// import Form from 'react-bootstrap/Form';
// function FurnitureComponent() {
//   return (
//     <><Form.Label className="mb-3 mt-3">Please, provide dimensions </Form.Label>
//       <Form.Group className="mb-3 mt-3" controlId="height">
//         <Form.Control type="number" placeholder="#Height" />
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="width">
//         <Form.Label>Width (CM) </Form.Label>
//         <Form.Control type="number" placeholder="#Width" />
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="length">
//         <Form.Label>Length (CM) </Form.Label>
//         <Form.Control type="number" placeholder="#Length" />
//       </Form.Group>
//       </>
//   );
// }

// export default FurnitureComponent;

import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

function FurnitureComponent() {
  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');
  const [length, setLength] = useState('');
  const [errors, setErrors] = useState({
    height: '',
    width: '',
    length: '',
  });

  const handleHeightChange = (e) => {
    const { value } = e.target;
    setHeight(value);
    if (value <= 0) {
      setErrors((prevErrors) => ({ ...prevErrors, height: 'Please provide a positive value' }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, height: '' }));
    }
  };

  const handleWidthChange = (e) => {
    const { value } = e.target;
    setWidth(value);
    if (value <= 0) {
      setErrors((prevErrors) => ({ ...prevErrors, width: 'Please provide a positive value' }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, width: '' }));
    }
  };

  const handleLengthChange = (e) => {
    const { value } = e.target;
    setLength(value);
    if (value <= 0) {
      setErrors((prevErrors) => ({ ...prevErrors, length: 'Please provide a positive value' }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, length: '' }));
    }
  };

  return (
    <>
      <Form.Label className="mb-3 mt-3">Please provide dimensions</Form.Label>
      <Form.Group className="mb-3 mt-3" controlId="height">
        <Form.Label>Height (CM)</Form.Label>
        <Form.Control type="number" placeholder="#Height" value={height} onChange={handleHeightChange} />
        {errors.height && <Form.Text className="text-danger">{errors.height}</Form.Text>}
      </Form.Group>
      <Form.Group className="mb-3" controlId="width">
        <Form.Label>Width (CM)</Form.Label>
        <Form.Control type="number" placeholder="#Width" value={width} onChange={handleWidthChange} />
        {errors.width && <Form.Text className="text-danger">{errors.width}</Form.Text>}
      </Form.Group>
      <Form.Group className="mb-3" controlId="length">
        <Form.Label>Length (CM)</Form.Label>
        <Form.Control type="number" placeholder="#Length" value={length} onChange={handleLengthChange} />
        {errors.length && <Form.Text className="text-danger">{errors.length}</Form.Text>}
      </Form.Group>
    </>
  );
}

export default FurnitureComponent;
