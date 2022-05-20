import React from 'react';
import { Container, Nav, Navbar, NavbarBrand } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import { Outlet } from 'react-router-dom';
import s from './Layout.module.css';
import logo from './../../Assets/logo.jpeg';
import instagram from './../../Assets/instagram.png';
import WatsUp from './../../Assets/whatsapp (1).png';
import Vk from './../../Assets/vk.png';
import PhoneNumber from './../../Assets/telephone-call.png';
import Youtube from './../../Assets/youtube.png';

const Layout = (props) => {
  return (
    <>
      <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark">
        <Container>
          <NavbarBrand href="/">
            <img
              src={logo}
              alt="logo"
              height={40}
              width={40}
              class="d-inline-block align-top"
              className={s.logo}
            />
            Cofevarka Service
          </NavbarBrand>
          <NavbarToggle aria-controls="responsive-navbar-nav" />
          <NavbarCollapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link className={s.link} href="/">
                Главная
              </Nav.Link>
              <Nav.Link className={s.link} href="/About">
                О нас
              </Nav.Link>
              <Nav.Link className={s.link} href="/Contacts">
                Контакты
              </Nav.Link>
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>

      <Outlet />

      <footer className={s.footerContainer}>
        <ul className={s.ulFooter}>
          <li className={s.liFooterInstagram}>
            <img className={s.icon} src={instagram} alt="instagram" />
          </li>
          <li className={s.liFooterWatsUp}>
            <img className={s.icon} src={WatsUp} alt="WatsUp" />
          </li>
          <li className={s.liFooterVk}>
            <img className={s.icon} src={Vk} alt="Vk" />
          </li>
          <li className={s.liFooterYoutube}>
            <img className={s.icon} src={Youtube} alt="Youtube" />
          </li>
          <li className={s.liFooterPhoneNumber}>
            <img className={s.icon} src={PhoneNumber} alt="PhoneNumber" />
          </li>
        </ul>
        <hr />
        <a href="https://github.com/EvgeniyOl">© 2022 Created by Evgeniy Olyanskii</a>
      </footer>
    </>
  );
};

export default Layout;
