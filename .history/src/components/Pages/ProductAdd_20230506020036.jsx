import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import SelectProductType from '../ProductAdd/Selectcmp';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function ProductAdd() {
  const navigate = useNavigate();

  const  [inputs , setInputs] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs(values => ({values, [name]: value}))
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/addproduct'));

    // console.log(inputs)

  }



  return (
    <Form controlId="product_form" onSubmit={handleSubmit}>
    <div className="container mt-5">
      <div className="row">
      <h1 className="page-header text-header col-md-8 text-start ">Product Add</h1>
      <div className='col-4 float-end'>
        <Button  type="submit" className='p-2 ms-2' variant="primary" size="sm">
          Add
        </Button>
        <Button onClick={()=> navigate(-1)}  className='p-2 ms-2' variant="secondary" size="sm">
          Cancel
        </Button>
      </div>
      </div>
    <br/>
    <div className="row">

    <div className="col-md-5 mx-2">
      <Form.Group className="mb-3 mx-left" controlId="productInputSKU">
        <Form.Label>SKU</Form.Label>
        <Form.Control type="text" name="sku" placeholder="#sku" onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="productInputName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name" placeholder="#name" onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="productInputPrice">
        <Form.Label>Price</Form.Label>
        <Form.Control type="number" name="price" placeholder="#price" onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="ProductType">
      <Form.Label>Product Type</Form.Label>
        <SelectProductType/> 
      </Form.Group>
    </div>
    </div>
    </div>
    </Form>
  );
}

export default ProductAdd;