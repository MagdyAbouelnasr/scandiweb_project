import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Product({sku , name , price , type, typeValue}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
      import CloseButton from 'react-bootstrap/CloseButton';
        <Card.Title>{sku}</Card.Title>
        <Card.Title>{name}</Card.Title>
        <Card.Title>{price}</Card.Title>
        <Card.Title>{type} : {typeValue}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default Product;