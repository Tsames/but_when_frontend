import logo from './logo.svg';
//Dependencies
import React from "react";
import { Route, Link, Switch } from "react-router-dom"

//Styling
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//Components
import './components/Nav.js';
import './components/Main.js';
import './components/Footer.js';

function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
