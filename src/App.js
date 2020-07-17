import React, { useState, useEffect } from 'react';
import './App.css';
import Count from './components/Count';
import Boton from './components/Boton';

function App() {

  // UseEffect cada vez que se actualiza el state
  useEffect(()=>{
    document.title = `Aplicacion de contador: ${counter}`;
  });

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
        <Count counter={counter} />
        <div className="Boton-espacio">
          <Boton accionContador={actualizarContador} name="+1" />
          <Boton accionContador={resetearContador} name="Reset" />
        </div>
      </div>
    </div>
  );
}

export default App;
