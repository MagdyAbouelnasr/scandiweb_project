import Form from 'react-bootstrap/Form';
function DVDComponent() {
  return (
    <Form controlId="product_form">
      <Form.Group className="mb-3" controlId="product_form.ControlInputSKU">
        <Form.Label>Size (MB) </Form.Label>
        <Form.Control type="text" placeholder="#sku" />
      </Form.Group>
    </Form>
  );
}

export default DVDComponent;