//Dependencies
import React from "react";

//Styling
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//Components
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';

function App(props) {

  //Set UserData in State
  const [authState, setAuthState] = React.useState({ username: null, name: null, token: null})

  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
