import Form from 'react-bootstrap/Form';

function ProductAdd() {
  return (
    <Form controlId="product_form">
      <Form.Group className="mb-3" controlId="product_form.ControlInputName">
        <Form.Label>SKU</Form.Label>
        <Form.Control type="text" placeholder="#sku" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="#name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>text address</Form.Label>
        <Form.Control type="text" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>text address</Form.Label>
        <Form.Control type="text" placeholder="name@example.com" />
      </Form.Group>
    </Form>
  );
}

export default ProductAdd;