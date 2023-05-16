import Form from 'react-bootstrap/Form';
function DVDComponent() {
  return (
      <Form.Group className="mb-3 mt-3" controlId="size">
        <Form.Label>Size (MB) </Form.Label>
        <Form.Control type="number" placeholder="#size" />
      </Form.Group>
    </Form>
  );
}

export default DVDComponent;