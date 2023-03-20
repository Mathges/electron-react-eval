import React, {useState} from 'react';
import { Container, SwitchContainer, SwitchInput, SwitchInputChecked, SwitchSlider, SwitchLabel} from './Style';
import { GiCheckMark } from 'react-icons/gi';

const LabeledCheckbox = ({name, state, setState}) => {
    const [isChecked, setIsChecked] = useState(false);
    
    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
        console.log(state)
        let { name, checked } = event.target;
        name = name.replace(" - ", "");
        setState({ ...state, [name]: checked });
    }

    return (
        <Container>
          <SwitchContainer>
            <SwitchInputChecked
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                name={name}
            />
            <SwitchSlider />
          </SwitchContainer>
          <SwitchLabel>{name}</SwitchLabel>
          {isChecked && <GiCheckMark style={{color: 'orange'}} />}
        </Container>

    );
}

export default LabeledCheckbox;
