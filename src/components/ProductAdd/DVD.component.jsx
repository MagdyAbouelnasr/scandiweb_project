import React, { useState } from "react";
import Form from "react-bootstrap/Form";

function DVDComponent({ onSizeChange }) {
  const [size, setSize] = useState("");
  const [sizeError, setSizeError] = useState("");

  const handleSizeChange = (event) => {
    const value = event.target.value;
    const regex = /^[0-9\b]+$/;

    if (regex.test(value)) {
      setSize(value);
      setSizeError("");
      event.target.value = value + ' MB';
      event.target.name = 'product_attribute_value';
      onSizeChange(event);
      
      event.target.name = 'product_attribute'; 
      event.target.value = "size";
      onSizeChange(event);
    } else {
      setSize("");
      setSizeError("Please enter a valid size");
    }
  };

  return (
    <>
      <Form.Label className="mb-3 mt-3">Please, provide Size</Form.Label>
      <Form.Group className="mb-3 mt-3">
        <Form.Label>Size (MB)</Form.Label>
        <Form.Control
          id='size'
          type="string"
          placeholder="#size"
          value={size}
          onChange={handleSizeChange}
        />
        {sizeError && (
          <Form.Text className="text-danger">{sizeError}</Form.Text>
        )}
      </Form.Group>
    </>
  );
}

export default DVDComponent;

