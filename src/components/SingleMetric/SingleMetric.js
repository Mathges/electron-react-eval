import React, {useEffect, useRef} from 'react';
import useDefineCurrentMetric from '../../hooks/useDefineMetric';

const CpuUsage = ({metricType, metricUnit, metricTitle}) => {
    const {
        cleanMetrics
    } = window.metrics;

    const timerRef = useRef(null);
    const {getMetric, metric} = useDefineCurrentMetric(metricType, metricUnit);

    useEffect(() => {
        clearInterval(timerRef.current)
        timerRef.current = setInterval(async () => {
          await getMetric()
        }, 3000);

        return () => {
            cleanMetrics();
            clearInterval(timerRef.current);
        }
    }, []);

    let symbol;
    if (metricUnit === "percent") {
        symbol = '%';
    }
    if (metricUnit === "temperature") {
        symbol = '°C';
    }
    
    return (
        <div>
            <h4>{metricTitle}</h4>
            <div>{`${metric} ${symbol}`}</div>
        </div>
    );
}

export default CpuUsage;
