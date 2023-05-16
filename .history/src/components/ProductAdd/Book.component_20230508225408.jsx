import React, { useState, useCallback } from "react";
import Form from "react-bootstrap/Form";

function BookComponent(props) {
  const [weight, setWeight] = useState("");
  const [weightError, setWeightError] = useState("");
  const [timeoutId, setTimeoutId] = useState(null);

  const validateWeight = (value) => {
    if (!value) {
      setWeightError("Please provide weight");
    } else if (value <= 0) {
      setWeightError("Weight must be a positive number");
    } else {
      setWeightError("");
      sendValidationToParent(value);
    }
  };

  const sendValidationToParent = (value) => {
    props.onChange({
      target: { name: "product_attribute_value", value },
    });

    props.onChange({
      target: { name: "product_attribute", value: "weight" },
    });
  };

  const handleWeightChange = (event) => {
    const value = event.target.value;
    const regex = /^[0-9\b]+$/;

    if (regex.test(event.target.value)) {
      setWeight(value);

      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      const newTimeoutId = setTimeout(() => {
        validateWeight(value);
      }, 500);

      setTimeoutId(newTimeoutId);
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