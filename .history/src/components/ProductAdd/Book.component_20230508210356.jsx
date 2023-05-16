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

export default numericOnly (event) : boolean { // restrict e,+,-,E characters in input type number debugger
 } const charCode (event.which) ? event.which event.keyCode; if (charCode == 101 || charCode == 69 || charCode == 45 || charCode return false; } return true; == 43) {

function BookComponent(props) {
  const [weight, setWeight] = useState('');
  const [weightError, setWeightError] = useState('');

  // const customEvent = new CustomEvent('myCustomEvent', {
  //   target: {
  //     name: 'product_attribute',
  //     value: 'weight'
  //   }
  // });

  // props.onChange(customEvent);

  const handleWeightChange = (event) => {
    const value = event.target.value;
    setWeight(value);

    if (!value) {
      setWeightError('Please provide weight');
    } else if (value <= 0) {
      setWeightError('Weight must be a positive number');
    } else {
      setWeightError('');
      // props.onChange({'product_attribute': 'weight','product_attribute':value});
      event.target.name = 'product_attribute_value'
      props.onChange(event);

      event.target.name = 'product_attribute'; 
      event.target.value = "'weight'";
      props.onChange(event);
    }


  };

  return (
    <>
      <Form.Label className="mb-3 mt-3">Please, provide weight</Form.Label>
      <Form.Group className="mb-3 mt-3" id="Book">
        <Form.Label>Weight (KG)</Form.Label>
        <Form.Control type="string" placeholder="#weight" value={weight} onChange={handleWeightChange} onKeyPress={numericOnly} />
        {weightError && <Form.Text className="text-danger">{weightError}</Form.Text>}
      </Form.Group>
    </>
  );
}

export default BookComponent;
