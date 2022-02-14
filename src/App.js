import React, {useState} from 'react';
import './App.css';
import './index.css';
import MatTable from './MatTable';
import MyMatTable from './myMatTable';
import HorizontalNonLinearStepper from './StepperMaterial'; 


function App() {
  
  
  const [currentStep, setCurrentStep] = useState(0) 

  return (
    <div className="App"  >
      <HorizontalNonLinearStepper setCurrentStep={setCurrentStep}/>
      <MyMatTable currentStep={currentStep}/>
    </div>
  );
}

export default App;
