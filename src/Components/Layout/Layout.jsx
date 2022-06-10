import React, { useState } from 'react';
import { Container, Nav, Navbar, NavbarBrand } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import { Link, NavLink, Outlet } from 'react-router-dom';
import './Layout.css';
import logo from './../../Assets/img/logo.jpeg';
import instagram from './../../Assets/img/instagram.png';
import WatsUp from './../../Assets/img/whatsapp (1).png';
import Vk from './../../Assets/img/vk.png';
import PhoneNumber from './../../Assets/img/telephone-call.png';
import Youtube from './../../Assets/img/youtube.png';
import Telega from './../../Assets/img/telegram.png'
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
              className="logo d-inline-block align-top"
            />
            Cofevarka Service
          </NavbarBrand>
          <NavbarToggle aria-controls="responsive-navbar-nav" />
          <NavbarCollapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Link className="link" to="/">Главная</Link>
              <Link className="link" to="/Service">Сервис</Link>
              <Link className="link" to="/Shop">Магазин</Link>
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>

      <body className='body'>
        <Outlet />
      </body>

      <footer className='footerContainer'>
        <ul className='ulFooter'>
          <motion.li className='liFooterInstagram' whileHover={{ scale: 1.2, }}>
            <a href="https://www.instagram.com/kofevarka_service/"><img className='icon' src={instagram} alt="instagram" /></a>
          </motion.li>
          <motion.li className='liFooterVk' whileHover={{ scale: 1.2, }}>
            <a href="https://vk.com/kofevarkaservise">
              <img className='icon' src={Vk} alt="Vk" />
            </a>
          </motion.li>
          <motion.li className='liFooterWatsUp' whileHover={{ scale: 1.2, }}>
            <a href="https://api.whatsapp.com/send?phone=79039271376">
              <img className='icon' src={WatsUp} alt="WatsUp" />
            </a>
          </motion.li>
          <motion.li className='liFooterTelega' whileHover={{ scale: 1.2, }}>
            <a href="https://t.me/kofevarkaservice">
              <img className='icon' src={Telega} alt="Telega" />
            </a>
          </motion.li>
          <motion.li className='liFooterYoutube' whileHover={{ scale: 1.2, }}>
            <a href="https://www.youtube.com/channel/UCy4-IIw4qW8K8fVzOlRkaBQ/videos">
              <img className='icon' src={Youtube} alt="Youtube" />
            </a>
          </motion.li>
          <motion.li className='liFooterPhoneNumber' whileHover={{ scale: 1.2, }}>
            <a href="tel:+79039271376">
              <img className='icon' src={PhoneNumber} alt="PhoneNumber" />
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
