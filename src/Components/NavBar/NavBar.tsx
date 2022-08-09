import { Nav, Navbar } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import { Link } from 'react-router-dom';
import logo from './../../assets/img/logo.jpeg';
import './NavBar.css';

const NavBar: React.FC = () => {
  return (
    <>
      <Navbar
        sticky="top"
        collapseOnSelect
        expand="md"
        bg="dark"
        variant="dark"
      >
        <Link className="home-link" to="/">
          <img src={logo} alt="logo" height={40} width={40} className="logo" />
          Kofevarka Service
        </Link>
        <NavbarToggle aria-controls="responsive-navbar-nav" />
        <NavbarCollapse id="responsive-navbar-nav">
          <Nav className="navbar-links">
            <Nav.Link as={Link} className="link" to="/">
              Главная
            </Nav.Link>
            <Nav.Link as={Link} className="link" to="/Service">
              Сервис
            </Nav.Link>
            <Nav.Link as={Link} className="link" to="/Shop">
              Магазин
            </Nav.Link>
          </Nav>
        </NavbarCollapse>
      </Navbar>
    </>
  );
};

export default NavBar;
