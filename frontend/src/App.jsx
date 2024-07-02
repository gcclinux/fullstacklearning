import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header.jsx";
import Search from "./components/Search.jsx";
import ImageCard from "./components/ImageCard.jsx";
import { Container, Row, Col } from "react-bootstrap";
import Welcome from "./components/Welcome.jsx";

const UNSPLASH_KEY = import.meta.env.VITE_APP_UNSPLASH_KEY;

const App = () => {
  const [word, setWord] = useState("");
  const [images, setImages] = useState([]);

  console.log(images);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetch(
      `https://api.unsplash.com/photos/random?query=${word}&client_id=${UNSPLASH_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages([{ ...data, title: word }, ...images]);
      })
      .catch((err) => {
        console.log(err);
      });
    setWord("");
  };

  const handleDeleteImage = (id) => {
    setImages(images.filter((images) => images.id !== id));
  };

  return (
    <div>
      <Header title="Images Galary" />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
      <Container className="mt-4">
        {images.length ? (
          <Row xs={1} md={2} lg={3}>
            {images.map((images, i) => (
              <Col key={i} className="pb-3" >
                <ImageCard images={images} deleteImage={handleDeleteImage} />
              </Col>
            ))}
          </Row>
        ) : (
          <Welcome />
        )}
      </Container>
    </div>
  );
};

export default App;
