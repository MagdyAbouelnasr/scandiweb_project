import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';

function FurnitureComponent({ onDimensionsChange }) {
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

  useEffect(() => {
    if (dimensions.height && dimensions.width && dimensions.length) {
      let product_attribute_value = `${dimensions.height} x ${dimensions.width} x ${dimensions.length}`;

      onDimensionsChange({
        target: {
          name: 'product_attribute_value',
          value: product_attribute_value,
        },
      });

      onDimensionsChange({
        target: {
          name: 'product_attribute',
          value: 'dimensions',
        },
      });
    }
  }, [dimensions]);

  const updateDimension = (dimension, value) => {
    setDimensions((prevDimensions) => ({
      ...prevDimensions,
      [dimension]: value,
    }));
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
      <Form.Group className="mb-3 mt-3">
        <Form.Label>Height (CM)</Form.Label>
        <Form.Control id='height' type="string" placeholder="#Height" value={height} onChange={handleHeightChange} />
        {errors.height && <Form.Text className="text-danger">{errors.height}</Form.Text>}
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Width (CM)</Form.Label>
        <Form.Control id='width' type="string" placeholder="#Width" value={width} onChange={handleWidthChange} />
        {errors.width && <Form.Text className="text-danger">{errors.width}</Form.Text>}
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Length (CM)</Form.Label>
        <Form.Control id='length' type="string" placeholder="#Length" value={length} onChange={handleLengthChange} />
        {errors.length && <Form.Text className="text-danger">{errors.length}</Form.Text>}
      </Form.Group>
    </>
  );
}

export default FurnitureComponent;
