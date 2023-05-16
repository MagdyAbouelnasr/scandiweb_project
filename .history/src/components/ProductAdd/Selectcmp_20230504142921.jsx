import Form from 'react-bootstrap/Form';
import { useState } from 'react';
const SelectProductType = () => {
  const [type, setType] = useState("selectType");

  handleOnChange = (e)  => {
    setType(e.target.)
  }

  return (
    <Form.Select aria-label="select product type" value={type} onChange={handleOnChange}>
      <option value="selectType">Select product Type</option>
      <option value="DVD">DVD</option>
      <option value="Book">Book</option>
      <option value="Furniture">Furniture</option>
    </Form.Select>
  );
}

export default SelectProductType;
