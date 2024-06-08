import { Col, Row, Container, Form, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const Search = ({ word, setWord, handleSubmit }) => {
    return (
        <Container className="mt-4">
            <Row className="justify-content-center">
                <Col xs={12} md={8} lg={6}>
                <Form onSubmit={handleSubmit}>
                    <Form.Row>
                        <Col xs={9}>
                            <Form.Control 
                                type="text"
                                value={word}
                                onChange={(e) => setWord(e.target.value)}
                                placeholder="Search for images" 
                            />
                        </Col>
                        <Col>
                            <Button variant="primary" type="submit">Search</Button>
                        </Col>
                    </Form.Row>
                </Form>
                </Col>
            </Row>
        </Container>
    );
};

Search.propTypes = {
    word: PropTypes.string.isRequired,
    setWord: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
};

export default Search;