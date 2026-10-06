
import { useState } from 'react';
import './App.css';

export default function App() {

  
  const [meuEstado, setMeuEstado] = useState("Valor inicial");

  
  function minhaLógica() {
    
    setMeuEstado("Novo valor!");
  }


  return (
    <main className="container-principal">
      <h1>Calculadora em React</h1>
      <div className="calculadora">
        <input type="text" disabled id="display" />
        <div className="botoes">
          <button>C</button>
          <button>&lt;</button>
          <button>/</button>
          <button>*</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>-</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>+</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>0</button>
          <button>.</button>
          <button>=</button>
        </div>
      </div>
      
      
      
      
    </main>
  );
}