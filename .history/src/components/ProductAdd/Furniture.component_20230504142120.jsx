import Form from 'react-bootstrap/Form';
function FurnitureComponent() {
  return (
    <Form controlId="product_form">
      <Form.Group className="mb-3" controlId="Book">
        <Form.Label>Height (CM) </Form.Label>
        <Form.Control type="number" placeholder="#weight" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="Book">
        <Form.Label>Width (KG) </Form.Label>
        <Form.Control type="number" placeholder="#weight" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="Book">
        <Form.Label>Weight (KG) </Form.Label>
        <Form.Control type="number" placeholder="#weight" />
      </Form.Group>
    </Form>
  );
}

export default FurnitureComponent;