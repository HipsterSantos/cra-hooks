import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
function App() {
const [count,setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
      <h3>Testing react hooks</h3>
      </header>
    </div>
  );
}

export default App;