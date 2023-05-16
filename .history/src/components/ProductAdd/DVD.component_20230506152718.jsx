import Form from 'react-bootstrap/Form';
function DVDComponent() {
  return (
    <>
      <Form.Label className="mb-3 mt-3">Please, provide size </Form.Label>
      <Form.Group className="mb-3 mt-3" controlId="size">
        <Form.Label>Size (MB) </Form.Label>
        <Form.Control type="number" placeholder="#size" />
      </Form.Group>
      </>
  );
}

export default DVDComponent;