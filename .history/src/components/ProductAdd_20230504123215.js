import Form from 'react-bootstrap/Form';

function ProductAdd() {
  return (
    <div
    <Form controlId="product_form">
      <Form.Group className="mb-3" controlId="product_form.ControlInputSKU">
        <Form.Label>SKU</Form.Label>
        <Form.Control type="text" placeholder="#sku" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="product_form.ControlInputName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="#name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="product_form.ControlInputPrice">
        <Form.Label>Price</Form.Label>
        <Form.Control type="text" placeholder="#price" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="product_form.ControlInputProductType">
        <Form.Label>text address</Form.Label>
        <Form.Control type="text" placeholder="Type Swicther" />
      </Form.Group>
    </Form>
  );
}

export default ProductAdd;