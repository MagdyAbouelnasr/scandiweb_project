import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

function FurnitureComponent({onDimensionsChange}) {
  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');
  const [length, setLength] = useState('');
  const [errors, setErrors] = useState({
    height: '',
    width: '',
    length: '',
  });
  const [dimensions, setDimensions] = useState({
    height: null,
    width: null,
    length: null,
  });

  const updateDimension = (dimension, value, event) => {
    setDimensions((prevDimensions) => ({
      ...prevDimensions,
      [dimension]: value,
    }));

    if(dimensions.height && dimensions.width && dimensions.length){
      let product_attribute_value = `${dimensions.height}`

      //////
      event.target.name = 'product_attribute_value';
      onDimensionsChange(event);
      
      event.target.name = 'product_attribute'; 
      event.target.value = "weight";
      onDimensionsChange(event);
    }
  };

  const handleHeightChange = (e) => {
    const value = e.target.value;
    const regex = /^[0-9\b]+$/;
    if (regex.test(value)) {
      setHeight(value);
      setErrors((prevErrors) => ({ ...prevErrors, height: '' }));
      updateDimension('height', value);
    } else {
      setHeight('');
      setErrors((prevErrors) => ({ ...prevErrors, height: 'Please provide a valid height' }));
    }
  };

  const handleWidthChange = (e) => {
    const value = e.target.value;
    const regex = /^[0-9\b]+$/;
    if (regex.test(value)) {
      setWidth(value);
      setErrors((prevErrors) => ({ ...prevErrors, width: '' }));
      updateDimension('width', value);
    } else {
      setWidth('');
      setErrors((prevErrors) => ({ ...prevErrors, width: 'Please provide a valid width' }));
    }
  };

  const handleLengthChange = (e) => {
    const value = e.target.value;
    const regex = /^[0-9\b]+$/;
    if (regex.test(value)) {
      setLength(value);
      setErrors((prevErrors) => ({ ...prevErrors, length: '' }));
      updateDimension('length', value);
    } else {
      setLength('');
      setErrors((prevErrors) => ({ ...prevErrors, length: 'Please provide a valid length' }));
    }
  };
  return (
    <>
      <Form.Label className="mb-3 mt-3">Please provide dimensions</Form.Label>
      <Form.Group className="mb-3 mt-3" controlId="height">
        <Form.Label>Height (CM)</Form.Label>
        <Form.Control type="string" placeholder="#Height" value={height} onChange={handleHeightChange} />
        {errors.height && <Form.Text className="text-danger">{errors.height}</Form.Text>}
      </Form.Group>
      <Form.Group className="mb-3" controlId="width">
        <Form.Label>Width (CM)</Form.Label>
        <Form.Control type="string" placeholder="#Width" value={width} onChange={handleWidthChange} />
        {errors.width && <Form.Text className="text-danger">{errors.width}</Form.Text>}
      </Form.Group>
      <Form.Group className="mb-3" controlId="length">
        <Form.Label>Length (CM)</Form.Label>
        <Form.Control type="string" placeholder="#Length" value={length} onChange={handleLengthChange} />
        {errors.length && <Form.Text className="text-danger">{errors.length}</Form.Text>}
      </Form.Group>
    </>
  );
}

export default FurnitureComponent;


// // ===============

// import React, { useState } from "react";
// import Form from "react-bootstrap/Form";

// function FurnitureComponent({ onWeightChange }) {
//   const [weight, setWeight] = useState("");
//   const [weightError, setWeightError] = useState("");

//   const handleWeightChange = (event) => {
//     const value = event.target.value;
//     const regex = /^[0-9\b]+$/;

//     if (regex.test(value)) {
//       setWeight(value);
//       setWeightError("");

//       event.target.name = 'product_attribute_value';
//       onWeightChange(event);
      
//       event.target.name = 'product_attribute'; 
//       event.target.value = "weight";
//       onWeightChange(event);
//     } else {
//       setWeight("");
//       setWeightError("Please enter a valid weight");
//     }
//   };

//   return (
//     <>
//       <Form.Label className="mb-3 mt-3">Please, provide weight</Form.Label>
//       <Form.Group className="mb-3 mt-3" id="Book">
//         <Form.Label>Weight (KG)</Form.Label>
//         <Form.Control
//           type="string"
//           placeholder="#weight"
//           value={weight}
//           onChange={handleWeightChange}
//         />
//         {weightError && (
//           <Form.Text className="text-danger">{weightError}</Form.Text>
//         )}
//       </Form.Group>
//       <Form.Group className="mb-3 mt-3" id="Book">
//         <Form.Label>Weight (KG)</Form.Label>
//         <Form.Control
//           type="string"
//           placeholder="#weight"
//           value={weight}
//           onChange={handleWeightChange}
//         />
//         {weightError && (
//           <Form.Text className="text-danger">{weightError}</Form.Text>
//         )}
//       </Form.Group>
//       <Form.Group className="mb-3 mt-3" id="Book">
//         <Form.Label>Weight (KG)</Form.Label>
//         <Form.Control
//           type="string"
//           placeholder="#weight"
//           value={weight}
//           onChange={handleWeightChange}
//         />
//         {weightError && (
//           <Form.Text className="text-danger">{weightError}</Form.Text>
//         )}
//       </Form.Group>
//     </>
//   );
// }

// export default FurnitureComponent;
