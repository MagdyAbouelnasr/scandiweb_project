import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Product({sku , name , price , type, typeValue}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Button variant="primary">Go somewhere</Button>
        <Card.Title>{sku}</Card.Title>
        <Card.Title>{sku}</Card.Title>
        <Card.Title>{sku}</Card.Title>
        
      </Card.Body>
    </Card>
  );
}

export default Product;