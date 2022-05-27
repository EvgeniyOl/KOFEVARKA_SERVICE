import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../../Pages/About/About';
import Home from '../../Pages/Home/Home';
import Partners from '../../Pages/Partners/Partners';
import ServicePage from '../../Pages/ServicePage/ServicePage';
import Shop from '../../Pages/Shop/Shop';
import Layout from '../Layout/Layout';

export default function RoutePage() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />} >
					<Route index element={<Home />} />
					<Route path="Service" element={<ServicePage />} />
					<Route path="Shop" element={<Shop />} />
				</Route>
			</Routes>
		</>
	);
}
