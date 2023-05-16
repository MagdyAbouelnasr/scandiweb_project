import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import ProductList from './components/ProductList';
import ProductAdd from './components/ProductAdd';

function App() {
  return (
    
    <div className="container">
    <div className="App">
    <h1 className="page-header

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
        <Route path="product/add" element={<ProductAdd />} />
      </Routes>
    </BrowserRouter>
    </div>
    </div>
  );
}

export default App;
