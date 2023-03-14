import styled from "styled-components";

const Container = styled.div`
    background-color: #2b092f;
`;

const LogoContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const Logo = styled.img`
    max-width: 50%;
`;

const FormContainer = styled.fieldset`
    display: flex;
    flex-direction: column;
    border: 1px solid #d0d0d0;
    max-width: 30%;
`;

const FormTitle = styled.legend`
    color: #d0d0d0;
`;

const StyledSubmit = styled.input`
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

export {Container, LogoContainer, Logo, FormContainer, FormTitle, StyledSubmit};