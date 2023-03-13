import styled from "styled-components";

const StyledButton = styled.button`
    font-family: Signika;
    font-size: 15px;
    width: 150px;
    margin: 5px;
    background-color: transparent;
    border-radius: 10px;
    color: #d0d0d0;
    border-color: #d0d0d0;
    &:hover {
        cursor: pointer;
        background-color: rgba(256, 256, 256, 0.3);
    }
`;

export {StyledButton}