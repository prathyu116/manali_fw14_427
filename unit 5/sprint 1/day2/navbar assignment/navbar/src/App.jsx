import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const arrLink = ["Services", "Projects", "About"];

  return (
    <nav id="nav">
      <div id="logo">
        <p>LogoBakery</p>
      </div>

      <div id="options">
      
        {arrLink.map((e) => {
          return <Name op = {e} />;
        })}
      </div>

      <button id="btn">Contact</button>
    </nav>
  );
}

function Name({op}) {
  return <div className="neha">{op}</div>
}

export default App
