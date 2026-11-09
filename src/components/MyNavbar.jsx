import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function MyNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Container>
        <Navbar.Brand as={Link} to="/">🌍 Travel Destinations</Navbar.Brand>
        <Navbar.Toggle aria-controls="travel-nav" />
        <Navbar.Collapse id="travel-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/destinations">Destinations</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MyNavbar
