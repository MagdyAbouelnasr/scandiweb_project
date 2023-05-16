import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import BookComponent from "./Book.component";
import DVDComponent from "./DVD.component";
import FurnitureComponent from "./Furniture.component";

const SelectProductType = (props) => {

  
  const [type, setType] = useState("selectProductType");
  const [DVDVisible, setDVDVisibility] = useState(false);
  const [bookVisible, setBookVisibility] = useState(false);
  const [FurnitureVisible, setFurnitureVisibility] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const getData = (e) => {
    props.onChange(e);
  };

  useEffect(() => {
    if (["DVD", "Book", "Furniture"].includes(type)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
    setDVDVisibility(type === "DVD");
    setBookVisibility(type === "Book");
    setFurnitureVisibility(type === "Furniture");
  }, [type]);

  const handleOnChange = (e) => {
    setType(e.target.value);
    props.onChange(e);
  };

  // const [weightData, setWeightData] = useState({});

  const handleWeightChange = (data) => {
    // setWeightData(data);
    // console.log(weightData, 'weight data');
    getData(data);
  };
  const handleSizeChange = (data) => {
    getData(data);
  };

  return (
    <>
      <Form.Group className="mb-3" id="productInputName">
        <Form.Select
          aria-label="select product type"
          value={type}
          onChange={handleOnChange}
          required
          name="product_type"
        >
          <option value="selectProductType">Select product Type</option>
          <option value="DVD">DVD</option>
          <option value="Book">Book</option>
          <option value="Furniture">Furniture</option>
        </Form.Select>
        {!isValid && (
          <p className="text-danger">
            Please select a valid product type.
          </p>
        )}
        <div>
          {bookVisible && <BookComponent onWeightChange={handleWeightChange} onChange={getData}/>}
          {DVDVisible && <DVDComponent onSizeChange={handleSizeChange}/>}
          {FurnitureVisible && <FurnitureComponent />}
        </div>
      </Form.Group>
    </>
  );
};

export default SelectProductType;