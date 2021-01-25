import { ReactElement } from 'react';
import logo from './logo.svg';
import './App.css';

function App(): ReactElement<HTMLElement> {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>In Progress! :D</p>
      </header>
    </div>
  );
}

export default App;
