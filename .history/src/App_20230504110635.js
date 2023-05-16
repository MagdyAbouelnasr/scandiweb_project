import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import ProductList from './components/ProductList';
import ProductAdd from './components/ProductAdd';

function App() {
  return (
    
    <div className="container">
    <div className="App">

    <BrowserRouter>
      
            <Link to="addproduct">Add</Link>
          
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
