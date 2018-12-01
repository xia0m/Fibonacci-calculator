import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Fib from './fib';
import DummyPage from './DummyPage';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Link to="/">Home</Link>
            <Link to="/dummypage">Dummy Page</Link>
          </header>
          <div>
            <Route exact path="/" component={Fib} />
            <Route path="/dummypage" component={DummyPage} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
