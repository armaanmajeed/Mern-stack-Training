import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/Components/App';

const name = "Armaan";
const element = <h1>Hello {name}</h1>;

ReactDOM.render(
  <div style={{backgroundColor: 'red', border: '2px solid black'}}>
    {element}
    <App />
  </div>,
  document.getElementById('root')
);