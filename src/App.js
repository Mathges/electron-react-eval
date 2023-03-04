import './App.css';
import SingleMetric from './components/SingleMetric/SingleMetric';
import OvertimeMetric from './components/OvertimeMetric/OverTimeMetric';

function App() {
  return (
    <div className="App">
      <body class="App-body">
        <SingleMetric metricType="cpu" metricUnit="percent" metricTitle="CPU - Usage" />
        <SingleMetric metricType="cpu" metricUnit="temperature" metricTitle="CPU - Temperature" />
        <SingleMetric metricType="ram" metricUnit="percent" metricTitle="RAM -Usage" />
        <OvertimeMetric metricType="cpu" metricUnit="percent" />
        <br />
        <OvertimeMetric metricType="ram" metricUnit="percent" />
      </body>
    </div>
  );
}

export default App;
