import styled from "styled-components";

const Container = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    border: 1px solid #494949;
    border-radius: 10px 10px 5px 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 450px;
    height: 250px;
`;

const Title = styled.h5`
    font-size: 0.9em;
    color: #d0d0d0;
`;

const Graph = styled.div`
    
`;

const Values = styled.canvas`
    background-color: rgba(0, 0, 0, 0.7);

`;

const Legend = styled.canvas`

`;

export {Values, Container, Title, Legend, Graph};
