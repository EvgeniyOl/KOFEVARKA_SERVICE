import { Route, Routes } from 'react-router-dom';
import BasketPage from '../BasketPage/BasketPage';
import Home from '../Home/Home';
import ServicePage from '../ServicePage/ServicePage';
import Shop from '../ShopPage/ShopPage';
import FullCard from '../ShopPage/FullCard';
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
