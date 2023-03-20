import styled from "styled-components";

const Container = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    border: 1px solid #494949;
    border-radius: 10px 10px 5px 5px;
    height: 120px;
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 10px;
`;

const Title = styled.h5`
    font-size: 0.9em;
    color: #d0d0d0;
`;

const MetricValue = styled.p`
    color: #fa913c;
    font-size: 2em;
    font-weight: bolder;
`;

export {Container, Title, MetricValue};
