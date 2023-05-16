import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import BookComponent from './Book.component'; 
import DVDComponent from './DVD.component';
import FurnitureComponent from './Furniture.component';
const SelectProductType = () => {
  const [type, setType] = useState("selectProuctType");
  const [DVDVisible, setDVDVisibility] = useState(false);
  const [bookVisible, setBookVisibility] = useState(false);
  const [FurnitureVisible, setFurnitureVisibility] = useState(false);

  useEffect(()=> {
    type === "DVD" ? setDVDVisibility(true) : setDVDVisibility(false);
    type === "Book" ? setBookVisibility(true) : setBookVisibility(false);
    type === "Furniture" ? setFurnitureVisibility(true) : setFurnitureVisibility(false);
  }, [type])

  const handleOnChange = (e)  => {
    setType(e.target.value);

    validate();
  }

  const validate = () => {
    let newErrors = {};
    if (!inputs.sku) newErrors.sku = 'SKU is required';
    if (inputs.sku && inputs.sku.length > 9) newErrors.sku = 'SKU must be at most 9 characters';
    if (!inputs.name) newErrors.name = 'Name is required';
    if (inputs.price === undefined || inputs.price === '') newErrors.price = 'Price is required';
    if (inputs.price < 0) newErrors.price = 'Price cannot be negative';
    // Add more validation rules as needed
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <>
    <Form.Select aria-label="select product type" value={type} onChange={handleOnChange} required>
      <option value="selectProuctType">Select product Type</option>
      <option value="DVD">DVD</option>
      <option value="Book">Book</option>
      <option value="Furniture">Furniture</option>
    </Form.Select>
    <div>
    {bookVisible && <BookComponent/>}
    {DVDVisible && <DVDComponent/>}
    {FurnitureVisible && <FurnitureComponent/>}
    </div>
    </>
  );
}

export default SelectProductType;
