import styled from "styled-components";

const Container = styled.div`
    display: flex;
    align-items: center;
`;

const SwitchLabel = styled.div`
    color: #d0d0d0;
    margin: 3px;
`;

const SwitchContainer = styled.label`
  position: relative;
  display: inline-block;
  width: 30px;
  height: 10px;
  margin: 5px;  
`;

const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

const SwitchSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #3B0054;
  transition: .4s;
  border-radius: 10px;

  &:before {
    position: absolute;
    content: "";
    height: 15px;
    width: 15px;
    bottom: -2.5px;
    border-radius: 10px;
    background-color: #7600A9;
    transition: .4s;
  }
`;

const SwitchInputChecked = styled(SwitchInput)`
  &:checked + ${SwitchSlider} {
    background-color: darkorange;
  }

  &:checked + ${SwitchSlider}:before {
    transform: translateX(15px);
  }
`;

export {Container, SwitchContainer, SwitchInput, SwitchInputChecked, SwitchSlider, SwitchLabel};