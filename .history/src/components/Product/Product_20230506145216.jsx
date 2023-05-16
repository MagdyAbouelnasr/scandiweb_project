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

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const ProductCard = ({ sku, name, price, product_attribute, typeValue }) => {
  return (
    <>
      <CardContent>
        <CardActions>
          <IconButton aria-label="select to delete" className="delete-checkbox">
            <CropSquareIcon />
          </IconButton>
        </CardActions>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          SKU: {sku}
        </Typography>
        bull
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Price: {price}$
        </Typography>
        <Typography variant="body2">
          {product_attribute}: {typeValue} {console.log(product_attribute)}
        </Typography>
      </CardContent>
    </>
  );
};

const Product = ({ product }) => {
  return (
    <Box sx={{m:2, minWidth: 264 }}>
      <Card variant="outlined">
        <ProductCard sku={product.sku} name={product.name} price={product.price} product_attribute={product.product_attribute} typeValue={product.product_attribute_value} />
      </Card>
    </Box>
  );
};

export default Product;