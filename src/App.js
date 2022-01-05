import logo from './logo.svg';
//Dependencies
import React from "react";
import { Route, Link, Switch } from "react-router-dom"

//Styling
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//Components
import Nav from './components/Nav.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';

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
