import { ReactElement } from 'react';
import './App.css';

function App(): ReactElement<HTMLElement> {
  return (
    <div className="App">
      <header className="App-header">
        <span className="w-32 h-32 rounded-full mx-auto bg-gray-100">🙏</span>
        <p className="">In Progress! :D</p>
      </header>
    </div>
  );
}

export default App;
