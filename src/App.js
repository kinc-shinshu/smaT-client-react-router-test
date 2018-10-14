import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom'

const ReactRouter = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li><Link to='/'><button>Home</button></Link></li>
        <li><Link to='/about'><button>about</button></Link></li>
        <li><Link to='/friends'>Friends</Link></li>
      </ul>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/friends/' component={Friends} />
      <hr />
    </div>
  </BrowserRouter>
)

const Home = () => (
  <div>
    <h2>Home</h2>
    <p>Welcome to</p>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
    <p>勘弁してください</p>
  </div>
)

const Friends = () => (
  <div>
    <h2>Friends</h2>
    <p>ここにフレンズのリストを書きます</p>
  </div>
)


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <ReactRouter />
      </div>
    );
  }
}

export default App;
