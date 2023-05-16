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

function BookComponent(props) {
  const [weight, setWeight] = useState('');
  const [weightError, setWeightError] = useState('');

  const handleWeightChange = (event) => {
    const value = event.target.value;
    setWeight(value);

    if (!value) {
      setWeightError('Please provide weight');
    } else if (value <= 0) {
      setWeightError('Weight must be a positive number');
    } else {
      setWeightError('');
      props.onChange(value);
    }


  };

  return (
    <>
      <Form.Label className="mb-3 mt-3">Please, provide weight</Form.Label>
      <Form.Group className="mb-3 mt-3" id="weight">
        <Form.Label>Weight (KG)</Form.Label>
        <Form.Control type="number" placeholder="#weight" value={weight} onChange={handleWeightChange} />
        {weightError && <Form.Text className="text-danger">{weightError}</Form.Text>}
      </Form.Group>
    </>
  );
}

export default BookComponent;
