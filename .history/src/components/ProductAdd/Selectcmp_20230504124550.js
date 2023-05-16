import Form from 'react-bootstrap/Form';

const SelectProductType = () => {
  return (
    <Form.Select aria-label="Default select example">
      <option>Open this select menu</option>
      <option value="1">DVD</option>
      <option value="2">Book</option>
      <option value="3">Furniture</option>
    </Form.Select>
  );
}

export default SelectProductType;
