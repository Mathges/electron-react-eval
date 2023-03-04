import React, {useEffect, useRef} from 'react';
import useDefineCurrentMetric from '../../hooks/useDefineMetric';
import { Container, Title, MetricValue } from './Style';

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
        <Container>
            <Title>{metricTitle}</Title>
            <MetricValue>{`${metric} ${symbol}`}</MetricValue>
        </Container>
    );
}

export default CpuUsage;
