import { Navbar, Container } from "react-bootstrap";
import  Logo from "../images/logo.svg";

const Header = (props) => {
  // eslint-disable-next-line
  const { title } = props;
  const navbarStyle = {
    backgroundColor: "lightgray",
  };
  return (
    <Navbar style={navbarStyle} variant="light">
      <Container>
      <img style={{maxWidth: '14rem', maxHeight: '2rem'}} src={Logo} alt="Logo" />
      </Container>
    </Navbar>
  );
};

export default Header;
