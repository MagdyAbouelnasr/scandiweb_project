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
  const [val, setVal] = useState("");

  const handleChange = (e) => {
    const regex = /^[0-9\b]+$/;
    if (e.target.value === "" || regex.test(e.target.value)) {
      setVal(e.target.value);
    }
  };
  // const customEvent = new CustomEvent('myCustomEvent', {
  //   target: {
  //     name: 'product_attribute',
  //     value: 'weight'
  //   }
  // });

  // props.onChange(customEvent);

  const handleWeightChange = (event) => {

    const regex = /^[0-9\b]+$/;
    if (event.target.value === "" || regex.test(e.target.value)) {
      setVal(event.target.value);
    }

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
        <Form.Control type="string" placeholder="#weight" value={val} onChange={handleChange} onChange={handleWeightChange}/>
        {weightError && <Form.Text className="text-danger">{weightError}</Form.Text>}
      </Form.Group>
    </>
  );
}

export default BookComponent;
