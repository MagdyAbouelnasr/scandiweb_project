import Form from 'react-bootstrap/Form';
import SelectProductType from './ProductAdd/Selectcmp';
function DVDComponent() {
  return (
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
      </Form.Group
    </Form>
  );
}

export default DVDComponent;