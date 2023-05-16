import Form from 'react-bootstrap/Form';
import { useState } from 'react';
const SelectProductType = () => {
  const [type, setType] = use
  return (
    <Form.Select aria-label="Default select example">
      <option>Open this select menu</option>
      <option value="DVD">DVD</option>
      <option value="Book">Book</option>
      <option value="Furniture">Furniture</option>
    </Form.Select>
  );
}

export default SelectProductType;
