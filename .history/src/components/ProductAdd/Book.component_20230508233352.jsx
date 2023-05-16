import React, { useState } from "react";
import Form from "react-bootstrap/Form";

function BookComponent({ onWeightChange }) {
  const [weight, setWeight] = useState("");
  const [weightError, setWeightError] = useState("");

  const handleWeightChange = (event) => {
    const value = event.target.value;
    const regex = /^[0-9\b]+$/;

    if (regex.test(value)) {
      setWeight(value);
      onWeightChange({ product_attribute_value: value,  product_attribute: 'weight'});
      setWeightError("");
      event.target.name = 'product_attribute_value'
      onWeightChange.onChange(event);
      
      event.target.name = 'product_attribute'; 
      event.target.value = "'weight'";
      onWeightChange.onChange(event);
    } else {
      setWeight("");
      setWeightError("Please enter a valid weight");
    }
  };

  return (
    <>
      <Form.Label className="mb-3 mt-3">Please, provide weight</Form.Label>
      <Form.Group className="mb-3 mt-3" id="Book">
        <Form.Label>Weight (KG)</Form.Label>
        <Form.Control
          type="string"
          placeholder="#weight"
          value={weight}
          onChange={handleWeightChange}
        />
        {weightError && (
          <Form.Text className="text-danger">{weightError}</Form.Text>
        )}
      </Form.Group>
    </>
  );
}

export default BookComponent;
