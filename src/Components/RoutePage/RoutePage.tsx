import { Route, Routes } from 'react-router-dom';
import BasketPage from '../../Pages/BasketPage/BasketPage';
import Home from '../../Pages/Home/Home';
import NavBar from '../../Pages/NavBar/NavBar';
import ServicePage from '../../Pages/ServicePage/ServicePage';
import Shop from '../../Pages/Shop/Shop';
import FullCard from '../../Pages/Shop/ShopCard/FullCard';
import Layout from '../Layout/Layout';

const RoutePage: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="Service" element={<ServicePage />} />
        <Route path="Shop" element={<Shop />} />
        <Route path="/basket" element={<BasketPage />} />
        <Route path="Shop/fullCard/:id" element={<FullCard />} />
      </Route>
    </Routes>
  );
};

export default RoutePage;
