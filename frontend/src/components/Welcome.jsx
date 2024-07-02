import { Jumbotron, Button } from 'react-bootstrap';
const Welcome = () => {
  return (
    <Jumbotron>
      <h1>Welcome to Image Gallery</h1>
      <p>
        This is a simple application that allows you to search for images using the Unsplash API. 
        To start just enter a search in the search bar above.
      </p>
      <p>
        <Button variant="primary" href="https://unsplash.com/" target="_blank">Learn more</Button>
      </p>
    </Jumbotron>
  )
}

export default Welcome;