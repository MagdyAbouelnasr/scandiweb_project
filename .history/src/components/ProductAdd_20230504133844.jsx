import Form from 'react-bootstrap/Form';
import SelectProductType from './ProductAdd/Selectcmp';
import Button from 'react-bootstrap/Button';
function ProductAdd() {
  return (
    <div className="container">
      <div className="row">
      <div >

    <h1 className="page-header text-header ">Product Add</h1>
    <Button className="col" variant="outline-primary">Primary</Button>{' '}
    </div>
    </div>

    <div className="row">

    <div className="col-md-5 mx-auto">
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