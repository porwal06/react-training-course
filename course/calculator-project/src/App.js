import CalculatorForm from './components/CalculatorForm';
import Header from './components/Header';
import CalculatorResult from './components/CalculatorResult';
import React, {useState} from 'react';

function App() { 
const [yearsData, setYearsData] = useState('');
const calculationHandler = () => {

}
  return (
    <div>
      <Header></Header>
      <CalculatorForm onCalculation = {calculationHandler}/>

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      <CalculatorResult result = {yearsData}/>     
    </div>
  );
}

export default App;
