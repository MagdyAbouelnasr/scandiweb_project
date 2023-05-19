
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import SelectProductType from '../ProductAdd/Selectcmp';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function ProductAdd() {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInputs((values) => ({ ...values, [name]: value }));
    validate()
    };

  // Form validation function
  const validate = () => {
    let newErrors = {};
    if (!inputs.sku) newErrors.sku = 'SKU is required';
    if (inputs.sku && inputs.sku.length > 9) newErrors.sku = 'SKU must be at most 9 characters';
    if (!inputs.name) newErrors.name = 'Name is required';
    if (inputs.price === undefined || inputs.price === '') newErrors.price = 'Price is required';
    if (inputs.price < 0) newErrors.price = 'Price cannot be negative';
    if (!inputs.product_attribute_value) newErrors.ProductType = 'please select a ProductType and provide a value';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      axios.post('https://scandiwebjuniortestmohamedabouelnasr.000webhostapp.com/start.php/addproduct', inputs).then((response) => {
        console.log(response.data);
        navigate('/');
      });
    }
  };

  return (
    <Form id="product_form" onSubmit={handleSubmit}>
      <div className="container  mt-5">
        <div className="row">
          <h1 className="page-header text-header col-md-9 text-start">Product Add</h1>
          <div className="col">
            <Button type="submit" id='save-product-btn' className="p-2" variant="primary" size="sm">
              Save
            </Button>
            </div>
          <div className="col">
            <Button
              onClick={() => navigate(-1)}
              className="p-2"
              variant="secondary"
              size="sm"
              id='cancel-product-add-btn'
            >
              Cancel
            </Button>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-5 mx-2">
            <Form.Group className="mb-3 mx-left">
              <Form.Label>SKU</Form.Label>
              <Form.Control
                id="sku"
                type="text"
                name="sku"
                maxLength="9"
                placeholder="#sku"
                onChange={handleChange}
                required
              />
              {errors.sku && <Form.Text className="text-danger">{errors.sku}</Form.Text>}
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Name</Form.Label>
              <Form.Control
                id="name"
                type="text"
                name="name"
                placeholder="#name"
                onChange={handleChange}
                required
              />
              {errors.name && <Form.Text className="text-danger">{errors.name}</Form.Text>}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control
                id="price"
                type="number"
                name="price"
                step="0.01"
                min="0"
                placeholder="#price"
                onChange={handleChange}
                onKeyDown={(event) => {
                  if (event.key === 'e' || event.key === 'E') {
                    event.preventDefault();
                  }
                }}
                required
              />
              {errors.price && <Form.Text className="text-danger">{errors.price}</Form.Text>}
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Product Type</Form.Label>
              <SelectProductType onChange={handleChange}
                required 
                name="ProductType"
                />
              {errors.ProductType && <Form.Text className="text-danger">{errors.ProductType}</Form.Text>}

            </Form.Group >
          </div>
        </div>
      </div>
    </Form>
  );
}

export default ProductAdd;