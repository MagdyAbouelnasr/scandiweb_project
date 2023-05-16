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
  
  function isNumber(e){
    e = e || window.event;
    var charCode = e.which ? e.which : e.keyCode;
    return /\d/.test(String.fromCharCode(charCode));
}
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
        <Form.Control type="string" placeholder="#weight" value={weight} onChange={handleWeightChange} on />
        {weightError && <Form.Text className="text-danger">{weightError}</Form.Text>}
      </Form.Group>
    </>
  );
}

export default BookComponent;
