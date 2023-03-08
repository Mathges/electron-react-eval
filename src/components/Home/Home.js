import React from 'react';

const Home = () => {
    const {attachDashboard, detachDashboard} = window.setters;

    return (
      <>
        { !localStorage.getItem('backgroundAttached') &&
        <div class="setup-window">
          <button onClick={() => {
            localStorage.setItem('backgroundAttached', true);
            attachDashboard();
          }}>
            attach dashboard
          </button>
          <button onClick={() => {
            localStorage.removeItem('backgroundAttached');
            detachDashboard()
          }}>
            detach dashboard
          </button>
          <button onClick={() => {
            localStorage.removeItem('backgroundAttached');
          }}>
            quit app
          </button>
        </div>}
      </>
    );
}

export default Home;
