// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import { Card, Button } from 'react-bootstrap';

const ImageCard = () => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1578656415093-e7e19e5e132b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTg5ODV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgyOTE0MDJ8&ixlib=rb-4.0.3&q=80&w=400" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card&apos;s content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default ImageCard;