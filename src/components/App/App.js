import React from 'react';
import './App.css';
import Dashboard from '../Dashboard/Dashboard';

const App = () => {
  return (
    <>
      { localStorage.getItem('backgroundAttached') && 
      <div class="App">
        <div class="metric-container">
          <Dashboard />
        </div>
      </div>}
    </>
  );
}

export default App;
