import Form from 'react-bootstrap/Form';
function DVDComponent() {
  return (
    <Form controlId="product_form">
      <Form.Group className="mb-3" controlId="wight">
        <Form.Label>Size (MB) </Form.Label>
        <Form.Control type="number" placeholder="#size" />
      </Form.Group>
    </Form>
  );
}

export default DVDComponent;