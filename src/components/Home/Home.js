import React from 'react';
import HomeButton from '../HomeButton/HomeButton';
import LabeledCheckbox from '../LabeledCheckbox/LabeledCheckbox';
import { Container, LogoContainer, Logo, FormTitle, FormContainer } from './Style';

const Home = () => {
  const { attachDashboard, detachDashboard } = window.setters;

  const setDashboard = (event) => {
    localStorage.setItem('backgroundAttached', true);
    attachDashboard();
  }

  const unsetDashboard = () => {
    localStorage.removeItem('backgroundAttached');
    detachDashboard();
  }

  const quitApp = () => {
    localStorage.removeItem('backgroundAttached');

  }

  return (
    <>
      {!localStorage.getItem('backgroundAttached') &&
        <Container>
          <LogoContainer>
            <Logo src='/logo.png' width={250} alt="App logo" />
          </LogoContainer>
          <form>
            <FormContainer  >
              <FormTitle>Turbopimp your TurboDashboard</FormTitle>
              <LabeledCheckbox name="CPU - Percentage"/>
              <LabeledCheckbox name="CPU - Temperature" />
              <LabeledCheckbox name="CPU - Overtime" />
              <LabeledCheckbox name="RAM - Percentage" />
              <LabeledCheckbox name="RAM - Overtime" />
            </FormContainer >
          </form>
          <HomeButton onClick={setDashboard} title="Set Dashboard" />
          <HomeButton onClick={unsetDashboard} title="Unset Dashboard" />    
          <HomeButton onClick={quitApp} title="Quit App" />
        </Container>}
    </>
  );
}

export default Home;
