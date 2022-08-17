import { Route, Routes } from 'react-router-dom';
import BasketPage from '../components/BasketPage/BasketPage';
import Home from '../components/Home/Home';
import ServicePage from '../components/ServicePage/ServicePage';
import ShopPage from '../components/ShopPage/ShopPage';
import FullCard from '../components/ShopPage/FullCard';
import Layout from '../components/Layout/Layout';

const RoutePage: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="service" element={<ServicePage />} />
        <Route path="shop" element={<ShopPage />} />
        <Route path="/basket" element={<BasketPage />} />
        <Route path="shop/fullcard/:id" element={<FullCard />} />
      </Route>
    </Routes>
  );
};

export default RoutePage;
