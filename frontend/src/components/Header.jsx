
import { Navbar, Container } from 'react-bootstrap';

const Header = (props) => {
  // eslint-disable-next-line
  const { title } = props;
  const navbarStyle = {
    backgroundColor: 'lightblue'
  };
    return (
        <Navbar style={navbarStyle} variant="light">
          <Container>
            <Navbar.Brand href="/">{title}</Navbar.Brand>
          </Container>
      </Navbar>
    )
};

export default Header;