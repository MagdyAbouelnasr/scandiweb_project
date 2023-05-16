import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import ProductList from './components/ProductList';

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
      <Routes>
        <Route index element={<ProductList />} />
        <Route path="user/create" element={<ProductList />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
