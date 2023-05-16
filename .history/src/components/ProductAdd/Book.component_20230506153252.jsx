// import Form from 'react-bootstrap/Form';
// function BookComponent() {
//   return (
//     <>
//       <Form.Label className="mb-3 mt-3">Please, provide weight </Form.Label>
//       <Form.Group className="mb-3 mt-3" controlId="weight">
//         <Form.Label>Weight (KG) </Form.Label>
//         <Form.Control type="number" placeholder="#weight" />
//       </Form.Group>
//       </>
//   );
// }

// export default BookComponent;

import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

function BookComponent() {
  const [weight, setWeight] = useState('');
  const [weightError, setWeightError] = useState(false);

  const handleWeightChange = (event) => {
    const value = event.target.value;
    setWeight(value);

    // validate weight input
    if (!value || isNaN(value)) {
      setWeightError(true);
    } else {
      setWeightError(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // check if all fields are filled
    if (!weight) {
      alert('Please, submit required data');
      return;
    }

    // check if all inputs are valid
    if (weightError) {
      alert('Please, provide the data of indicated type');
      return;
    }

    // submit form
    console.log('Form submitted');
  };

  return (
    <>
      <Form.Label className="mb-3 mt-3">Please, provide weight</Form.Label>
      <Form.Group className="mb-3 mt-3" controlId="weight">
        <Form.Label>Weight (KG)</Form.Label>
        <Form.Control
          type="number"
          placeholder="#weight"
          value={weight}
          onChange={handleWeightChange}
        />
        {weightError && (
          <Alert variant="danger" className="mt-2">
            Please, provide the data of indicated type
          </Alert>
        )}
      </Form.Group>
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}

export default BookComponent;
