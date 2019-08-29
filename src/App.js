import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Reader from './view/Reader/index'

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Link to="/reader">Reader</Link>
        </header>
        <main>
          <Route path="/reader" exact component={Reader} />
        </main>
      </div>
  );
}

export default App;
