import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import ProductList from './components/Pages/ProductList';
import ProductAdd from './components/Pages/ProductAdd';
import Button from 'react-bootstrap/Button';


function App() {
  return (
    
    <div className="App">

    <ProductList />
    <BrowserRouter>

    </div>
    </div>
  );
}

export default App;
