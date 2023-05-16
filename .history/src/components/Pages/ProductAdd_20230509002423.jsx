// import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';
// import Form from 'react-bootstrap/Form';
// import SelectProductType from '../ProductAdd/Selectcmp';
// import Button from 'react-bootstrap/Button';
// import axios from 'axios';

// function ProductAdd() {
//   const navigate = useNavigate();

//   const  [inputs , setInputs] = useState({});

//   const handleChange = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;
//     setInputs(values => ({values, [name]: value}))
//   }
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.post('http://localhost:8000/addproduct', inputs).then((response)=>{
//       console.log(response.data);
//       navigate('/');
//     });

//     // console.log(inputs)
//   }



//   return (
//     <Form id="product_form" onSubmit={handleSubmit}>
//     <div className="container mt-5">
//       <div className="row">
//       <h1 className="page-header text-header col-md-8 text-start ">Product Add</h1>
//       <div className='col-4 float-end'>
//         <Button  type="submit" className='p-2 ms-2' variant="primary" size="sm">
//           Add
//         </Button>
//         <Button onClick={()=> navigate(-1)}  className='p-2 ms-2' variant="secondary" size="sm">
//           Cancel
//         </Button>
//       </div>
//       </div>
//     <br/>
//     <div className="row">

//     <div className="col-md-5 mx-2">
//       <Form.Group className="mb-3 mx-left" id="productInputSKU">
//         <Form.Label>SKU</Form.Label>
//         <Form.Control type="text" name="sku" placeholder="#sku" onChange={handleChange} />
//       </Form.Group>
//       <Form.Group className="mb-3" id="productInputName">
//         <Form.Label>Name</Form.Label>
//         <Form.Control type="text" name="name" placeholder="#name" onChange={handleChange} />
//       </Form.Group>
//       <Form.Group className="mb-3" id="productInputPrice">
//         <Form.Label>Price</Form.Label>
//         <Form.Control type="number" name="price" placeholder="#price" onChange={handleChange} />
//       </Form.Group>
//       <Form.Group className="mb-3" id="ProductType">
//       <Form.Label>Product Type</Form.Label>
//         <SelectProductType/> 
//       </Form.Group>
//     </div>
//     </div>
//     </div>
//     </Form>
//   );
// }

// export default ProductAdd;
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
    console.log(e.target.value);
    console.log(e.target.name);
    const name = e.target.name;
    const value = e.target.value;

    setInputs((values) => ({ ...values, [name]: value }));
    validate()
    };

    // const handleRecievedData = (e) =>{
    //   const name = e.target.name;
    //   const value = e.target.value;
    //   setInputs((values) => ({ ...values, [name]: value }));
    //   console.log(e.name, e.value);
    // }

  // Form validation function
  const validate = () => {
    let newErrors = {};
    if (!inputs.sku) newErrors.sku = 'SKU is required';
    if (inputs.sku && inputs.sku.length > 9) newErrors.sku = 'SKU must be at most 9 characters';
    if (!inputs.name) newErrors.name = 'Name is required';
    if (inputs.price === undefined || inputs.price === '') newErrors.price = 'Price is required';
    if (inputs.price < 0) newErrors.price = 'Price cannot be negative';
    if (!inputs.product_attribute_value) newErrors.ProductType = 'please select a ProductType';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      axios.post('http://localhost:8000/addproduct', inputs).then((response) => {
        console.log(response.data);
        navigate('/');
      });
    }
  };

  return (
    <Form id="product_form" onSubmit={handleSubmit}>
      <div className="container mt-5">
        <div className="row">
          <h1 className="page-header text-header col-md-8 text-start ">Product Add</h1>
          <div className="col-4 float-end">
            <Button type="submit" className="p-2 ms-2" variant="primary" size="sm">
              Add
            </Button>
            <Button
              onClick={() => navigate(-1)}
              className="p-2 ms-2"
              variant="secondary"
              size="sm"
            >
              Cancel
            </Button>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-5 mx-2">
            <Form.Group className="mb-3 mx-left" id="productInputSKU">
              <Form.Label>SKU</Form.Label>
              <Form.Control
                type="text"
                name="sku"
                maxLength="9"
                placeholder="#sku"
                onChange={handleChange}
                required
              />
              {errors.sku && <Form.Text className="text-danger">{errors.sku}</Form.Text>}
            </Form.Group>
            <Form.Group className="mb-3" id="productInputName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="#name"
                onChange={handleChange}
                required
              />
              {errors.name && <Form.Text className="text-danger">{errors.name}</Form.Text>}
            </Form.Group>
            <Form.Group className="mb-3" id="productInputPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                name="price"
                step="0.01"
                min="0"
                placeholder="#price"
                onChange={handleChange}
                required
              />
              {errors.price && <Form.Text className="text-danger">{errors.price}</Form.Text>}
            </Form.Group>
            <Form.Group className="mb-3" id="ProductType">
              <Form.Label>Product Type</Form.Label>
              <SelectProductType onChange={handleChange}
                required 
                name="ProductType"/>
            </Form.Group >
          </div>
        </div>
      </div>
    </Form>
  );
}

export default ProductAdd;