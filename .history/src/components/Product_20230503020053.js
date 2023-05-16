import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Product({sku , name , price , type, typeValue}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Button variant="primary">Go somewhere</Button>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Product;