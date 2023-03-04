import React, {useEffect, useRef, useState} from 'react';
import useDefineCurrentMetric from '../../hooks/useDefineMetric';
import { Container, Values, Title, Legend, Graph } from './Style';
import draw from './utils';
// https://developer.mozilla.org/fr/docs/Web/HTML/Element/canvas
// https://developer.mozilla.org/fr/docs/Web/API/Canvas_API

const OvertimeMetric = ({metricType, metricUnit, metricTitle}) => {
    // getting metric
    const {
        cleanMetrics
    } = window.metrics;

    const [metricArray, setMetricArray] = useState([]);
    const timerRef = useRef(null);
    const {getMetric, metric} = useDefineCurrentMetric(metricType, metricUnit);
    const canvas = useRef();
    const legend = useRef();

    useEffect(() => {
        clearInterval(timerRef.current);
        timerRef.current = setInterval(async () => {
            await getMetric();
        }, 1000);

        // setting metric array (20 max)     
        const updateMetrics = () => {
            const newMetric = metric;       
            const newMetrics = [...metricArray, newMetric];
            if(newMetrics.length > 21) {
                newMetrics.shift();
            }
            setMetricArray(newMetrics);
        }


        draw(canvas, metricArray);

        const updateInterval = setInterval(updateMetrics, 1000);

        return () => {
            cleanMetrics();
            clearInterval(timerRef.current);
            clearInterval(updateInterval);
        }
    }, [metricArray]);

    useEffect(() => {
        // Draw the legend
        const legendDrawArea = legend.current;
        const legendCtx = legendDrawArea.getContext('2d');
        legendCtx.font = '12px sans-serif white';
        legendCtx.textBaseline = 'middle';
        legendCtx.textAlign = 'right';
        legendCtx.fillStyle = '#fff'
        for (let i = 0; i <= 100; i += 20) {
          let y = (1 - i / 100) * (legendDrawArea.height);

          if (y === 200) {
            y = 196;
          } else if (y === 0) {
            y = 6
          }
          const text = `${i}%`;
          legendCtx.fillText(text, legendDrawArea.width - 5, y);
        }
      }, []);

    return (
        <Container>
            <Title>{metricTitle}</Title>
            <Graph >

                <Legend ref={legend} height={200} width={40} style={{marginRight: 10}}>
                </Legend>
                <Values ref={canvas} height={200} width={400}>
                </Values>
            </Graph>
        </Container>
        
    );
}

export default OvertimeMetric;
