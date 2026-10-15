import { useState } from 'react';
import './App.css';
import {
  Calcular,
  handleButton as handleCalculatorButton,
} from './handleButton';

export default function App() {
  const [display, setDisplay] = useState("");

  function handleButton(value) {
    handleCalculatorButton(value, setDisplay);
  }

  return (
    <main className="container-principal">
      <h1>Calculadora em React</h1>
      <div className="calculadora">
        <input type="text" disabled id="display" value={display} />
        <div className="botoes">
          <button type="button" onClick={() => handleButton("C")}>C</button>
          <button type="button" onClick={() => handleButton("<")}>&lt;</button>
          <button type="button" onClick={() => handleButton("/")}>/</button>
          <button type="button" onClick={() => handleButton("*")}>*</button>
          <button type="button" onClick={() => handleButton("7")}>7</button>
          <button type="button" onClick={() => handleButton("8")}>8</button>
          <button type="button" onClick={() => handleButton("9")}>9</button>
          <button type="button" onClick={() => handleButton("-")}>-</button>
          <button type="button" onClick={() => handleButton("4")}>4</button>
          <button type="button" onClick={() => handleButton("5")}>5</button>
          <button type="button" onClick={() => handleButton("6")}>6</button>
          <button type="button" onClick={() => handleButton("+")}>+</button>
          <button type="button" onClick={() => handleButton("1")}>1</button>
          <button type="button" onClick={() => handleButton("2")}>2</button>
          <button type="button" onClick={() => handleButton("3")}>3</button>
          <button type="button"className ="btn-0" onClick={() => handleButton("0") }>0</button>
          <button type="button" onClick={() => handleButton(".")}>.</button>
          <button type="button"className ="btn-igual" onClick={() => Calcular(display, setDisplay)}>=</button>
        </div>
      </div>
    </main>
  );
}
