import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import BookComponent from './Book.component'; 
import DVDComponent from './DVD.component';
import FurnitureComponent from './Furniture.component';
const SelectProductType = () => {
  const [type, setType] = useState("selectProuctType");
  const [bookVisible, setBookVisibility] = useState(false);
  const [DVDVisible, setDVDVisibility] = useState(false);
  const [FurnitureVisible, setFurnitureVisibility] = useState(false);

  useEffect(()=> {
    type === "DVD" ? setDVDVisibility(true) : setDVDVisibility(
  })

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
    {bookVisible() && <BookComponent/>}
    {DVDVisible() && <DVDComponent/>}
    {FurnitureVisible() && <FurnitureComponent/>}
    </div>
    </>
  );
}

export default SelectProductType;
