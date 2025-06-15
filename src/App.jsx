import './App.css';
import LineChartComp from './components/LineChartComp';
import PieChartComp from './components/PieChartComp';
import SimpleBarChartComp from './components/SimpleBarChartComp';

function App() {
  return (
    <>
      <div>
        <h1>The App Home</h1>
        <LineChartComp />

        <SimpleBarChartComp />

        <PieChartComp />
      </div>
    </>
  );
}LineChartComp

export default App;
