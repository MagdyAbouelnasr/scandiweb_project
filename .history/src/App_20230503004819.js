import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">


    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="product/add">Add</Link>
          </li>
        </ul>
      </nav>
      <
    </BrowserRouter>
    </div>
  );
}

export default App;
