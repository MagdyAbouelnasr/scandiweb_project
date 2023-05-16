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
  const [errors, setErrors] = useState({});

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
    if (!type) newErrors.type = 'please select product type';
    // Add more validation rules as needed
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <>
    <Form.Group className="mb-3" id="productType">
    <Form.Select aria-label="select product type" value={type} onChange={handleOnChange} required>
      <option value="selectProuctType">Select product Type</option>
      <option value="DVD">DVD</option>
      <option value="Book">Book</option>
      <option value="Furniture">Furniture</option>
    </Form.Select>
    {errors.ty && <Form.Text className="text-danger">{errors.name}</Form.Text>}
    
    <div>
    {bookVisible && <BookComponent/>}
    {DVDVisible && <DVDComponent/>}
    {FurnitureVisible && <FurnitureComponent/>}
    </div>

    </Form.Group>

    </>
  );
}

export default SelectProductType;
