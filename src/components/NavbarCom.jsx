import { Navbar, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavbarCom(){
  return(
    <Navbar bg="light" expand="lg" ms-auto>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link as={Link} to="/">Accueil</Nav.Link>
          <Nav.Link as={Link} to="/formation">Formation</Nav.Link>
          <Nav.Link as={Link} to="/experience">Experience</Nav.Link>
         
          <Nav.Link as={Link} to="/publication">Publication</Nav.Link>
          
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarCom;
