import Form from 'react-bootstrap/Form';
function BookComponent() {
  return (
      <Form.Group className="mb-3 mt-3" controlId="weight">
        <Form.Label>Weight (KG) </Form.Label>
        <Form.Control type="number" placeholder="#weight" />
      </Form.Group>
  );
}

export default BookComponent;