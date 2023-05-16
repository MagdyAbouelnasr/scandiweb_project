// import Card from 'react-bootstrap/Card';
// import Form from 'react-bootstrap/Form';
// function Product({sku , name , price , type, typeValue}) {
//   return (
//     <Card style={{ width: '18rem' }}>
//       <Card.Body >
//         <button type="checkbox" className='delete-checkbox'></button>
//         <Card.Title>{sku}</Card.Title>
//         <Card.Title>{name}</Card.Title>
//         <Card.Title>{price}$</Card.Title>
//         <Card.Title>{type} : {typeValue}</Card.Title>
//       </Card.Body>
//     </Card>
//   );
// }

// export default Product;

import './Product.css'
import './Product-style.sass'
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CropSquareIcon from '@mui/icons-material/CropSquare';
// import Checkbox from '@mui/material/Checkbox';
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const card = (
  <>
    <CardContent>

    <CardActions>
        <IconButton aria-label="add to favorites" className="delete-checkbox">
        <CropSquareIcon />
      </IconButton>
        
        </CardActions>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Word of the Day
      </Typography>
      <Typography variant="h5" component="div">
        be{bull}nev{bull}o{bull}lent
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        adjective
      </Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    
  </>
);

export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}