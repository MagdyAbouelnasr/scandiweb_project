// import Form from 'react-bootstrap/Form';
// function DVDComponent() {
//   return (
//     <>
//       <Form.Label className="mb-3 mt-3">Please, provide size </Form.Label>
//       <Form.Group className="mb-3 mt-3" controlId="size">
//         <Form.Label>Size (MB) </Form.Label>
//         <Form.Control type="number" placeholder="#size" />
//       </Form.Group>
//       </>
//   );
// }

// export default DVDComponent;

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
      <Form.Group className="mb-3 mt-3" id="book">
        <Form.Label>Size (MB) </Form.Label>
        <Form.Control type="number" name='' placeholder="#size" value={size} onChange={handleSizeChange} />
        {error && <Alert variant="danger">{error}</Alert>}
      </Form.Group>
    </>
  );
}

export default DVDComponent;
