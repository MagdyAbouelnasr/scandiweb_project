import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import ProductList from './components/ProductList';
import ProductAdd from './components/ProductAdd';
import Button from 'react-bootstrap/Button';


function App() {
  return (
    
    <div className="container">
    <div className="App">


    <BrowserRouter>
    <div className='col-4 float-end'>
        <Button to="addproduct" className='p-2 ms-2' variant="primary" size="sm">
          Add
        </Button>
        <Button className='p-2 ms-2' variant="secondary" size="sm">
          Cancel
        </Button>
      </div>
      
            {/* <Link to="addproduct">Add</Link> */}
          
      <Routes>
        <Route index element={<ProductList />} />
        <Route path="addproduct" element={<ProductAdd />} />
      </Routes>
    </BrowserRouter>
    </div>
    </div>
  );
}

export default App;
