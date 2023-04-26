import { Link } from 'react-router-dom';
import { VscAccount } from 'react-icons/vsc';
import { BsCart } from 'react-icons/bs';
import * as userService from '../../utilities/users-service';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./NavBar.css"


export default function NavBar({ setUser }) {

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <Navbar bg="light">
    <Container className='container'>
      <Navbar.Brand as={Link} to="/home"><img src='https://i.etsystatic.com/isla/3fa768/50783420/isla_280x280.50783420_gqjb7y9i.jpg?version=0'style={{width:50}}/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/home" className='title'>flashy grain</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <div className='d-flex'>
        <Nav.Link as={Link} to="/orders/new" className='mx-3'><BsCart/></Nav.Link>
        <NavDropdown title={<VscAccount/>} id="basic-nav-dropdown">
          <NavDropdown.Item as={Link} to="/orders">Past Orders</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item as={Link} to="" onClick={handleLogOut}>
            Log Out
          </NavDropdown.Item>
        </NavDropdown>
      </div> 
    </Container>
  </Navbar>
  );
} 

