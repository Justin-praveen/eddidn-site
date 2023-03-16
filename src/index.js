import React from 'react';
import { Row } from 'react-bootstrap';
import ReactDOM from 'react-dom/client';
import "./App.css"
import App from './App';
import Home from './cards';
import Carouse from './carouse';
import Contact from './Contact';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Home />
    <Row className='carosal'>
      <Carouse />
    </Row>

    <Row className='point'>
      <Contact />
    </Row>

  </React.StrictMode>
);

