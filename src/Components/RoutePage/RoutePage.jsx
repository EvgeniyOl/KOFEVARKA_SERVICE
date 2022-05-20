import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../../Pages/About/About';
import Contacts from '../../Pages/Contacts/Contacts';
import Home from '../../Pages/Home/Home';
import Layout from '../Layout/Layout';

export default function RoutePage() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />} >
					<Route index element={<Home />} />
					<Route path="About" element={<About />} />
					<Route path="Contacts" element={<Contacts />} />
				</Route>
			</Routes>
		</>
	);
}
