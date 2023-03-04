import React, {useEffect, useRef, useState} from 'react';
import useDefineCurrentMetric from '../../hooks/useDefineMetric';
import { Graph } from './Style';
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
        // setting canvas (thanks GPT for the help, even if I improved it a bit )
        const draw = () => {
            const drawArea = canvas.current;
            const ctx = drawArea.getContext('2d');
            ctx.strokeStyle = '#fa913c';
            
            // Create a linear gradient from the top to the bottom of the canvas
            const gradient = ctx.createLinearGradient(0, 0, 0, drawArea.height);
            gradient.addColorStop(0, 'rgba(250, 145, 60, 0.6)');
            gradient.addColorStop(1, 'rgba(250, 145, 60, 0.2)');
          
            // Clear area
            ctx.clearRect(0, 0, drawArea.width, drawArea.height);
          
            // Start draw
            ctx.beginPath();
            
            // Move to the first point
            let firstX = drawArea.width;
            let firstY = drawArea.height - (metricArray[metricArray.length - 1] * (drawArea.height / 100));
            ctx.moveTo(firstX, firstY);
            
            // Draw lines
            for (let i = metricArray.length - 2; i >= 0; i--) {
              let x = drawArea.width - ((metricArray.length - 1 - i) * 20);
              let y = drawArea.height - (metricArray[i] * (drawArea.height / 100));
              ctx.lineTo(x, y);
            }
            
            // Close the path
            ctx.lineTo(drawArea.width, drawArea.height);
            ctx.lineTo(firstX, firstY);
            ctx.closePath();
            
            // Fill with gradient
            ctx.fillStyle = gradient;
            ctx.fill();
            
            // Stroke the path
            ctx.stroke();
          };

        draw();
        const updateInterval = setInterval(updateMetrics, 1000);

        return () => {
            cleanMetrics();
            clearInterval(timerRef.current);
            clearInterval(updateInterval);
        }
    }, [metricArray]);

    return (
        <Graph ref={canvas} height={200} width={400}>           
        </Graph>
    );
}

export default OvertimeMetric;
