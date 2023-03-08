import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: center;
`;

const SubContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    max-width: 50%;
`;

const SubSubContainer = styled.div`
    display: flex;
`;

export {Container, SubContainer, SubSubContainer}