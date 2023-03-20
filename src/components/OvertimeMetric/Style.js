import styled from "styled-components";

const Container = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    border: 1px solid #494949;
    border-radius: 10px 10px 5px 5px;
    width: 450px;
    height: 250px;
    margin: 10px;
`;

const Title = styled.h5`
    font-size: 0.9em;
    color: #d0d0d0;
    margin: 10px
`;

// here's just for rename markups for better understanding
const Graph = styled.div`
    display: flex;
`;

const Values = styled.canvas`
`;

const Legend = styled.canvas`
`;

export {Values, Container, Title, Legend, Graph};
