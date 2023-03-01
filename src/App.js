import logo from './logo.svg';
import './App.css';
import SingleMetric from './components/SingleMetric/SingleMetric';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <SingleMetric metricType="cpu" metricUnit="percent" metricTitle="CPU - Usage" />
        <SingleMetric metricType="cpu" metricUnit="temperature" metricTitle="CPU - Temperature" />
        <SingleMetric metricType="ram" metricUnit="percent" metricTitle="RAM -Usage" />
      </header>
    </div>
  );
}

export default App;
