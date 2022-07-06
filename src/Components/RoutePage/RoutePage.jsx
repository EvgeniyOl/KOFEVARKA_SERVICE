import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BasketPage from '../../Pages/BasketPage/BasketPage';
import Home from '../../Pages/Home/Home';
import ServicePage from '../../Pages/ServicePage/ServicePage';
import Shop from '../../Pages/Shop/Shop';
import FullCard from '../../Pages/Shop/ShopCard/FullCard';
import Layout from '../Layout/Layout';

export default function RoutePage() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />} >
					<Route index element={<Home />} />
					<Route path="Service" element={<ServicePage />} />
					<Route path="Shop" element={<Shop />} />
					<Route path="/basket" element={<BasketPage />} />
					<Route path="Shop/fullCard/:id" element={<FullCard />} />
				</Route>
			</Routes>
		</>
	);
}
