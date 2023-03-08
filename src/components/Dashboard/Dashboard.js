import React from 'react';
import SingleMetric from '../SingleMetric/SingleMetric';
import OvertimeMetric from '../OvertimeMetric/OvertimeMetric';
import { Container, SubContainer, SubSubContainer } from './Style';

const Dashboard = () => {
    return (
        <Container>
            <SubContainer>
                <SubSubContainer>
                    <SingleMetric metricType="cpu" metricUnit="percent" metricTitle="CPU - Usage" />
                    <SingleMetric metricType="cpu" metricUnit="temperature" metricTitle="CPU - Temperature" />
                </SubSubContainer>
                <OvertimeMetric metricType="cpu" metricUnit="percent" metricTitle="CPU- Usage" />                
            </SubContainer>
            <SubContainer>
                <SingleMetric metricType="ram" metricUnit="percent" metricTitle="RAM - Usage" />
                <OvertimeMetric metricType="ram" metricUnit="percent" metricTitle="RAM - Usage"/>
            </SubContainer>
        </Container>
    );
}

export default Dashboard;
