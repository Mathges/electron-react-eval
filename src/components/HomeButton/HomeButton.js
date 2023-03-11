import React from 'react';
import { StyledButton } from './Style';

const HomeButton = ({title, onClick}) => {
    return (
      <StyledButton onClick={onClick} type="button">
        {title}
      </StyledButton>
    );
}

export default HomeButton;
