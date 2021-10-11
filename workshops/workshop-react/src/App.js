import logo from './logo.svg';
import './App.css';
import {Component} from 'react';

class Hello extends Component {
  render(){
    return(
      <h2>Hello world en classe !</h2>
    );
  }
}



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          It works.
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
      <Hello />
    </div>
  );
}

export default App;
