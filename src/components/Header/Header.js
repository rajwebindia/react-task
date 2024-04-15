import logo from "../../assets/imges/logo-digi.png";
import { Nav, Navbar, NavDropdown, Container, Row, Col } from "react-bootstrap";
import "../../assets/css/comman.css"
import HeaderBackground from '../../assets/imges/headerbackground.png';
import { Link } from 'react-router-dom';
import Paymentpop from "../Paymentpop/Paymentpop";
import Headeruserdetails from "../Header/Headeruserdetails";
const Header = () => {
  return (
    <header>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Row>
            <Col md={3}>
              <div className="logo-block">
                <Link to="/dashboard" className="logo">
                  <img src={logo} alt="logo" />
                </Link>
              </div>
            </Col>
            <Col md={6}>
              <div className="menu-block">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="m-auto menu-links">
                    <Nav.Link href="#home">Dashboard</Nav.Link>
                    <Nav.Link href="#link">Transfer</Nav.Link>
                    <Paymentpop></Paymentpop>
                  </Nav>
                </Navbar.Collapse>
              </div>
            </Col>
            <Col md={3}>
              <div className="head-user-detail">
                <Headeruserdetails></Headeruserdetails>
              </div>
            </Col>
          </Row>
        </Container>
      </Navbar>
      <div className='user-header' style={{ backgroundImage: `url(${HeaderBackground})` }}>

      </div>
    </header>
    
  );
};

export default Header;