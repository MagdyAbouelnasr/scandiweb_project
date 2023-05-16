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

const ProductCard = ({ sku, name, price, type, typeValue }) => {
  return (
    <>
      <CardContent>
        <CardActions>
          <IconButton aria-label="add to favorites" className="delete-checkbox">
            <CropSquareIcon />
          </IconButton>
        </CardActions>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          SKU: {sku}
        </Typography>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Price: {price}$
        </Typography>
        <Typography variant="body2">
          {type}: {typeValue}
        </Typography>
      </CardContent>
    </>
  );
};

const Product = ({ sku, name, price, type, typeValue }) => {
  return (
    <Box sx={{m:2, minWidth: 300 }}>
      <Card variant="outlined">
        <ProductCard sku={sku} name={name} price={price} type={type} typeValue={typeValue} />
      </Card>
    </Box>
  );
};

export default Product;