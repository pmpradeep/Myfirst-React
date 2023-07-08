import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Reabootstrap() {
  return (
    <Container fluid className=' height bg-aw'>
      <Row>
        <Col sm={6}>
          <Row>
            <Navbar bg="light" expand="lg">
              <Container>
                <Navbar.Brand href="#home" className='' style={{ fontStyle: 'bold', fontSize: '30px', fontWeight: 'bold' }}> <div className='logo'>T</div>Treact</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto ">
                    <Nav.Link href="#home">About  </Nav.Link>
                    <Nav.Link href="#Blog">Blog </Nav.Link>
                    <Nav.Link href="#Pricing">Pricing</Nav.Link>
                    <Nav.Link href="#Login">Login</Nav.Link>

                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </Row>
          COl1
        </Col>
        <Col sm={6}>COl2</Col>

      </Row>
    </Container>
  );
}

export default Reabootstrap;