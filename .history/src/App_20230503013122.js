import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import ProductList from './components/ProductList';
import ProductAdd from './components/ProductAdd';

function App() {
  return (
    .
    <div class="container">
      
    </div>
    
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
        <Route path="product/add" element={<ProductAdd />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
