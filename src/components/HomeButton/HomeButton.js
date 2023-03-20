import React from 'react';
import { StyledButton } from './Style';

const HomeButton = ({title, onClick, type}) => {
    return (
      <StyledButton onClick={onClick} type={type}>
        {title}
      </StyledButton>
    );
}

export default HomeButton;
