import {useState} from 'react';

const useDefineCurrentMetric = (metricType, metricUnit) => {
    const {
        requestCPUUsagePercent,
        getCPUUsagePercent,
        requestCPUTemperature,
        getCPUTemperature,
        requestRAMUsagePercent,
        getRAMUsagePercent
    } = window.metrics;

    // @param metricType: define the component listened (ex: cpu, ram...)
    // @param metricUnit: define the unit (ex: temperature, percentage)
    const [metric, setMetric] = useState('');

    const getMetric = async () => {
        if (metricType === "cpu" && metricUnit === "percent") {
            await requestCPUUsagePercent();
            getCPUUsagePercent(setMetric);
        }

        if (metricType === "cpu" && metricUnit === "temperature") {
            await requestCPUTemperature();
            getCPUTemperature(setMetric);
        }

        if (metricType === "ram" && metricUnit === "percent") {
            await requestRAMUsagePercent();
            getRAMUsagePercent(setMetric);
        }
    }

    return {
        metric,
        getMetric
    }

}

export default useDefineCurrentMetric;