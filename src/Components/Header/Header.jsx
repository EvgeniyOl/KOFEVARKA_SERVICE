import React from 'react';
import { Container, Nav, Navbar, NavbarBrand } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import logo from './../../Assets/logo.jpeg';
import s from './Header.module.css';
import Routes from './Routes/Routes';

export default function Header() {
	return (
		<>
			<Navbar
				fixed='top'
				collapseOnSelect
				expand="md"
				bg="dark"
				variant="dark"
			>
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
							<Nav.Link className={s.link} href="/Abous">
								О нас
							</Nav.Link>
							<Nav.Link className={s.link} href="/Contacts">
								Контакты
							</Nav.Link>
							<Nav.Link className={s.link} href="/Blog">
								Новости
							</Nav.Link>
						</Nav>
					</NavbarCollapse>
				</Container>
			</Navbar>
			<Routes />
		</>
	);
}
