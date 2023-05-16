import Form from 'react-bootstrap/Form';
import { useState } from 'react';
const SelectProductType = () => {
  const [type, setType] = useState("selectProuctType");

  const [bookVisible, setBookVisibility] = useState(false);

  const handleOnChange = (e)  => {
    setType(e.target.value);
  }

 

  return (
    <>
    <Form.Select aria-label="select product type" value={type} onChange={handleOnChange}>
      <option value="selectProuctType">Select product Type</option>
      <option value="DVD">DVD</option>
      <option value="Book">Book</option>
      <option value="Furniture">Furniture</option>
    </Form.Select>
    <div>
    {renderResult()}
    </div>
    <div>
    {renderResult()}
    </div>
    <div>
    {renderResult()}
    </div>
    </>
  );
}

export default SelectProductType;
