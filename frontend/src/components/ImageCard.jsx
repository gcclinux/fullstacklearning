/* eslint-disable react/prop-types */
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import { Card, Button } from "react-bootstrap";

const ImageCard = ({ images }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={images.urls.small} />
      <Card.Body>
        <Card.Title>{images.title.toUpperCase()}</Card.Title>
        <Card.Text>{images.description || images.alt_description}</Card.Text>
        <Button variant="primary">Delete</Button>
      </Card.Body>
    </Card>
  );
};

export default ImageCard;
