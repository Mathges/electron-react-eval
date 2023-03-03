import React, {useEffect, useRef, useState} from 'react';
import useDefineCurrentMetric from '../../hooks/useDefineMetric';
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
        }, 3000);

        // setting metric array (20 max)     
        const updateMetrics = () => {
            const newMetric = metric;       
            const newMetrics = [...metricArray, newMetric];
            if(newMetrics.length > 20) {
                newMetrics.shift();
            }
            setMetricArray(newMetrics);
        }
        
        // setting canvas (thanks GPT for the help, even if I improved it a bit )
        const draw = () => {
            const drawArea = canvas.current;
            const ctx = drawArea.getContext('2d');
            // clear area
            ctx.clearRect(0, 0, drawArea.width, drawArea.height)
            // start draw
            ctx.beginPath();
            // going to the end of the area
            ctx.moveTo(0, drawArea.height - metricArray[0]);
            // drawing line for each value 
            for (let i = 0; i < metricArray.length; i ++) {
                let x = 0 + (i * 20);
                let y;
                // preventing errors if value is falsy
                if (!metricArray[i]) {
                    y = drawArea.height;
                } else {
                    y = drawArea.height - (metricArray[i] * (drawArea.height / 100));
                }               
                ctx.lineTo(x, y);
            }
            ctx.stroke();
        }

        draw();
        const updateInterval = setInterval(updateMetrics, 3000);

        return () => {
            cleanMetrics();
            clearInterval(timerRef.current);
            clearInterval(updateInterval);
        }
    }, [metricArray]);

    return (
        <canvas ref={canvas} height={200} width={400} style={{ border: '1px solid white', backgroundColor: 'white' }}>           
        </canvas>
    );
}

export default OvertimeMetric;
