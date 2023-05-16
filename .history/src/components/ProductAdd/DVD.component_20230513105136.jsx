import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

function DVDComponent() {
  const [size, setSize] = useState('');
  const [error, setError] = useState('');

  const handleSizeChange = (e) => {
    const newSize = e.target.value.trim();
    if (!newSize) {
      setError('Please, submit required data');
    } else if (isNaN(newSize) || newSize < 0) {
      setError('Please, provide the data of indicated type');
    } else {
      setSize(newSize);
      setError('');
    }
  };

  return (
    <>
      <Form.Label className="mb-3 mt-3">Please, provide size </Form.Label>
      <Form.Group className="mb-3 mt-3" id="DVD">
        <Form.Label>Size (MB) </Form.Label>
        <Form.Control type="number" name='product_attribute_value' placeholder="#size" value={size} onChange={handleSizeChange} />
        {error && <Alert variant="danger">{error}</Alert>}
      </Form.Group>
    </>
  );
}

export default DVDComponent;

// =========================================================

// import React, { useState } from "react";
// import Form from "react-bootstrap/Form";

// function DVDComponent({ onSizeChange }) {
//   const [size, setSize] = useState("");
//   const [sizeError, setSizeError] = useState("");

//   const handleSizeChange = (event) => {
//     const value = event.target.value;
//     const regex = /^[0-9\b]+$/;

//     if (regex.test(value)) {
//       setSize(value);
//       setSizeError("");

//       event.target.name = 'product_attribute_value';
//       onSizeChange(event);
      
//       event.target.name = 'product_attribute'; 
//       event.target.value = "size";
//       onSizeChange(event);
//     } else {
//       setSize("");
//       setSizeError("Please enter a valid weight");
//     }
//   };

//   return (
//     <>
//       <Form.Label className="mb-3 mt-3">Please, provide Size</Form.Label>
//       <Form.Group className="mb-3 mt-3" id="DVD">
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

// export default BookComponent;

