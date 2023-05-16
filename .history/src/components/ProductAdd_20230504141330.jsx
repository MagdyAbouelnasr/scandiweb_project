import Form from 'react-bootstrap/Form';
import SelectProductType from './ProductAdd/Selectcmp';
import Button from 'react-bootstrap/Button';
function ProductAdd() {
  return (
    <div className="container mt-5">
      <div className="row">
      <h1 className="page-header text-header col-md-4 ">Product Add</h1>
      <div className='col-4'>
        <Button className='p-2 ms-2' variant="primary" size="sm">
          Add
        </Button>
        <Button className='p-2 ms-2' variant="secondary" size="sm">
          Cancel
        </Button>
      </div>
      </div>
    <br/>
    <div className="row">

    <div className="col-md-5 mx-2">
    <Form controlId="product_form">
      <Form.Group className="mb-3 mx-left" controlId="productInputSKU">
        <Form.Label>SKU</Form.Label>
        <Form.Control type="text" placeholder="#sku" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="productInputName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="#name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="productInputPrice">
        <Form.Label>Price</Form.Label>
        <Form.Control type="number" placeholder="#price" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="ProductType">
      <Form.Label>Product Type</Form.Label>
        <SelectProductType/> 
      </Form.Group>
    </Form>
    </div>
    </div>
    </div>
  );
}

export default ProductAdd;