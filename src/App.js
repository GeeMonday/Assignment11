import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>My name is George Monday</h1> 
        <a
          className="App-link"
          href="https://reactjs.org" 
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React today or tommorrow
        </a>
      </header>
    </div>
  );
}

export default App;
