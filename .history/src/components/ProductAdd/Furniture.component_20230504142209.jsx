import Form from 'react-bootstrap/Form';
function FurnitureComponent() {
  return (
    <Form controlId="product_form">
      <Form.Group className="mb-3" controlId="height">
        <Form.Label>Height (CM) </Form.Label>
        <Form.Control type="number" placeholder="#Height" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="width">
        <Form.Label>Width (CM) </Form.Label>
        <Form.Control type="number" placeholder="#Width" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="Book">
        <Form.Label>Length (CM) </Form.Label>
        <Form.Control type="number" placeholder="#Length" />
      </Form.Group>
    </Form>
  );
}

export default FurnitureComponent;