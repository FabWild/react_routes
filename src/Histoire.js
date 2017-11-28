import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//routing quest
import './App.css';

class Histoire extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Notre histoire</h1>
        </header>
        <Link to="/"> Retour à l accueil </Link>
      </div>
    );
  }
}

export default Histoire;
