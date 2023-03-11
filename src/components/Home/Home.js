import React, { useState } from 'react';
import HomeButton from '../HomeButton/HomeButton';
import { Container } from './Style';

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
          <HomeButton onClick={setDashboard} title="Set Dashboard" />
          <HomeButton onClick={unsetDashboard} title="Unset Dashboard" />    
          <HomeButton onClick={quitApp} title="Quit App" />
        </Container>}
    </>
  );
}

export default Home;
