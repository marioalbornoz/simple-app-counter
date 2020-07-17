import React, { useState } from 'react';
import './App.css';
import Count from './components/Count';
import Button from './components/Button';

function App() {

  // State del contador
  const [ counter, setCounter] = useState(0);

  const actualizarContador = () => {
    setCounter(counter+1);
  }
  const resetearContador = () => {
    setCounter(0);
  }

  return (
    <div className="App">
      <div className="App-content">
        <h1>Aplicacion de contador</h1>
        <Count 
        counter = {counter}
        />
        <Button 
          accionContador = {actualizarContador}
          name = "+1"
        />
        <Button 
          accionContador = {resetearContador}
          name = "Reset"
        />
      </div>
    </div>
  );
}

export default App;
