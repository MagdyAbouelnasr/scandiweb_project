import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import BookComponent from './Book.component'; 
import DVDComponent from './DVD.component';
import FurnitureComponent from './Furniture.component';
const SelectProductType = () => {
  const [type, setType] = useState("selectProuctType");

  const [bookVisible, setBookVisibility] = useState(false);
  const [DVDVisible, setDVDVisibility] = useState(false);
  const [FurnitureVisible, setFurnitureVisibility] = useState(false);

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
    {bookVisible() && <}
    {DVDVisible()}
    {FurnitureVisible()}
    </div>
    </>
  );
}

export default SelectProductType;
