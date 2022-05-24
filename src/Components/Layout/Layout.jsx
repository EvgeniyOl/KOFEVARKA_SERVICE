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
import Telega from './../../Assets/telegram.png'
import { motion } from "framer-motion"

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
              <Nav.Link className={s.link} href="/Service">
                Сервис
              </Nav.Link>
              <Nav.Link className={s.link} href="/Partners">
                Партнеры
              </Nav.Link>
              <Nav.Link className={s.link} href="/Shop">
                Магазин
              </Nav.Link>
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>

      <body className={s.body}>
        <Outlet />
      </body>

      <footer className={s.footerContainer}>
        <ul className={s.ulFooter}>
          <motion.li className={s.liFooterInstagram} whileHover={{ scale: 1.2, }}>
            <a href="https://www.instagram.com/kofevarka_service/"><img className={s.icon} src={instagram} alt="instagram" /></a>
          </motion.li>
          <motion.li className={s.liFooterVk} whileHover={{ scale: 1.2, }}>
            <a href="https://vk.com/kofevarkaservise">
              <img className={s.icon} src={Vk} alt="Vk" />
            </a>
          </motion.li>
          <motion.li className={s.liFooterWatsUp} whileHover={{ scale: 1.2, }}>
            <a href="https://api.whatsapp.com/send?phone=79039271376">
              <img className={s.icon} src={WatsUp} alt="WatsUp" />
            </a>
          </motion.li>
          <motion.li className={s.liFooterTelega} whileHover={{ scale: 1.2, }}>
            <a href="https://t.me/kofevarkaservice">
              <img className={s.icon} src={Telega} alt="Telega" />
            </a>
          </motion.li>
          <motion.li className={s.liFooterYoutube} whileHover={{ scale: 1.2, }}>
            <a href="https://www.youtube.com/channel/UCy4-IIw4qW8K8fVzOlRkaBQ/videos">
              <img className={s.icon} src={Youtube} alt="Youtube" />
            </a>
          </motion.li>
          <motion.li className={s.liFooterPhoneNumber} whileHover={{ scale: 1.2, }}>
            <a href="tel:+79039271376">
              <img className={s.icon} src={PhoneNumber} alt="PhoneNumber" />
            </a>
          </motion.li>
        </ul>
        <hr />
        <a href="https://github.com/EvgeniyOl">
          © 2022 Created by Evgeniy Olyanskii
        </a>
      </footer>
    </>
  );
};

export default Layout;
