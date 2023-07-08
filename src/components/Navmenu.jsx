import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import './Navmenu.css';
function Navmenu() {
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary p-2">
      <Container fluid>
        <Navbar.Brand style={{fontStyle: 'bold', fontSize: '30px', fontWeight: 'bold'}} >  <div className="logo">T</div>Treact</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto navbar">
            <Link to="/">Home</Link>
            <Link to="Blog">Blog</Link>
            <Link to="About">About</Link>
            <Link to="Contact">Contact</Link>
          </Nav>
         
        </Navbar.Collapse>
      </Container>

    </Navbar>
    <Outlet/>
    </>
  );
}


export default Navmenu;