import './Product-style.scss';
import './Product.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CropSquareIcon from '@mui/icons-material/CropSquare';
import { useState } from 'react';


const bull = (
  <Box
  component="span"
  sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);


const ProductCard = ({ id, sku, name, price, product_attribute, typeValue, selectedProducts }) => {
  const [isActive, setActive] = useState("false");
  const selectedProduct = () => {
    selectedProducts(id)

   }

   setActive(!isActive);  };

  const handleToggle = () => {
  return (
    <>
      <CardContent>
        <CardActions>
          <IconButton aria-label="select to delete" className="delete-checkbox" onClick={selectedProduct}>
            <CropSquareIcon />
          </IconButton>
        </CardActions>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          SKU: {sku}
        </Typography>
        {bull}
        <Typography wrap="true" sx={{}} variant="h5" component="div" >
          {name}
        </Typography>
        {bull}
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Price: {price}$
        </Typography>
        {bull}
        <Typography variant="body2">
          {product_attribute}: {typeValue} {console.log(product_attribute)}
        </Typography>
      </CardContent>
    </>
  );
};

const Product = ({ product , selectedProducts}) => {
  
  const selectedProductsDelete = (data) => {
    selectedProducts(data);
  }
// console.log(selectedProducts);
  return (
    <Box sx={{m:2, minWidth: 270, maxWidth: 270 }}>
      <Card variant="outlined">
        <ProductCard selectedProducts={selectedProductsDelete} id={product.id} sku={product.sku} name={product.name} price={product.price} product_attribute={product.product_attribute} typeValue={product.product_attribute_value} />
      </Card>
    </Box>
  );
};

export default Product;