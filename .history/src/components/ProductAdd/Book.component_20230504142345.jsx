import Form from 'react-bootstrap/Form';
function BookComponent() {
  return (
    <Form controlId="product_form">
      <Form.Group className="mb-3" controlId="weight">
        <Form.Label>Weight (KG) </Form.Label>
        <Form.Control type="number" placeholder="#weight" />
      </Form.Group>
    </Form>
  );
}

export default BookComponent;