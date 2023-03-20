import React, {useState} from 'react';
import HomeButton from '../HomeButton/HomeButton';
import LabeledCheckbox from '../LabeledCheckbox/LabeledCheckbox';
import { Container, LogoContainer, Logo, FormTitle, FormContainer, StyledSubmit } from './Style';

const Home = () => {
  const { attachDashboard, detachDashboard, quitApp } = window.setters;
  const [dashboardParams, setDashboardParams] = useState({});

  const setDashboard = event => {
    event.preventDefault();
    localStorage.setItem('backgroundAttached', true);
    localStorage.setItem('dashboardContent', JSON.stringify(dashboardParams));
    attachDashboard();
  }

  const unsetDashboard = () => {
    localStorage.removeItem('backgroundAttached');
    localStorage.removeItem('dashboardContent');
    detachDashboard();
  }

  const closeApp = () => {
    localStorage.removeItem('backgroundAttached');
    localStorage.removeItem('dashboardContent');
    quitApp();
  }

  return (
    <>
      {!localStorage.getItem('backgroundAttached') &&
        <Container>
          <LogoContainer>
            <Logo src='/logo.png' width={250} alt="App logo" />
          </LogoContainer>
          <form onSubmit={setDashboard}>
            <FormContainer>
              <FormTitle>Turbopimp your TurboDashboard</FormTitle>
              <LabeledCheckbox name="CPU - Percentage" state={dashboardParams} setState={setDashboardParams} />
              <LabeledCheckbox name="CPU - Temperature" state={dashboardParams} setState={setDashboardParams} />
              <LabeledCheckbox name="CPU - Overtime" state={dashboardParams} setState={setDashboardParams} />
              <LabeledCheckbox name="RAM - Percentage" state={dashboardParams} setState={setDashboardParams} />
              <LabeledCheckbox name="RAM - Overtime" state={dashboardParams} setState={setDashboardParams} />
            </FormContainer>
            <StyledSubmit value="Set Dashboard" type='submit' />  
          </form>
          <HomeButton onClick={unsetDashboard} title="Unset Dashboard" type='button' />  
          <HomeButton onClick={closeApp} title="Quit App" type='button' />
        </Container>
      }
    </>
  );
}

export default Home;
