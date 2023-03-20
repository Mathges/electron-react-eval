import React, {useState, useEffect} from 'react';
import SingleMetric from '../SingleMetric/SingleMetric';
import OvertimeMetric from '../OvertimeMetric/OvertimeMetric';
import { Container, SubContainer, SubSubContainer } from './Style';

const Dashboard = () => {
    const content = localStorage.getItem('dashboardContent');
    const [dashboardContent, setDashboardContent] = useState({});
   
    useEffect(() => {
        console.log('useEffect', content)      
        setDashboardContent(JSON.parse(content));
    }, [content]);

    return (
        <Container>
            <SubContainer>
                <SubSubContainer>
                    { dashboardContent.CPUPercentage === true && <SingleMetric metricType="cpu" metricUnit="percent" metricTitle="CPU - Usage" /> }
                    { dashboardContent.CPUTemperature === true && <SingleMetric metricType="cpu" metricUnit="temperature" metricTitle="CPU - Temperature" /> }
                </SubSubContainer>
                { dashboardContent.CPUOvertime === true && <OvertimeMetric metricType="cpu" metricUnit="percent" metricTitle="CPU- Usage" /> }
            </SubContainer>
            <SubContainer>
                { dashboardContent.RAMPercentage === true && <SingleMetric metricType="ram" metricUnit="percent" metricTitle="RAM - Usage" /> }
                { dashboardContent.RAMOvertime === true && <OvertimeMetric metricType="ram" metricUnit="percent" metricTitle="RAM - Usage"/> }
            </SubContainer>
        </Container>
    );
}

export default Dashboard;
