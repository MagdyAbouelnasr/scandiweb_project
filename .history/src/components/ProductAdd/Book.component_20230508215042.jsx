import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import useDebounce from "./useDebounce";

function BookComponent(props) {
  const [weight, setWeight] = useState("");
  const [weightError, setWeightError] = useState("");
  const debouncedWeight = useDebounce(weight, 500);

  useEffect(() => {
    const validateWeight = () => {
      if (!debouncedWeight) {
        setWeightError("Please provide weight");
      } else if (debouncedWeight <= 0) {
        setWeightError("Weight must be a positive number");
      } else {
        setWeightError("");
        sendValidationToParent();
      }
    };

    const sendValidationToParent = () => {
      props.onChange({
        target: { name: "product_attribute_value", value: debouncedWeight },
      });

      props.onChange({
        target: { name: "product_attribute", value: "weight" },
      });
    };

    if (debouncedWeight !== "") {
      validateWeight();
    }
  }, [debouncedWeight, props]);

  const handleWeightChange = (event) => {
    const value = event.target.value;
    const regex = /^[0-9\b]+$/;
    if (regex.test(event.target.value)) {
      setWeight(value);
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