import { calcTotalPrice } from './calcTotalPrice';

export const getBasketLS = () => {
  const data = localStorage.getItem('basketItems');
  const items = data ? JSON.parse(data) : [];
  const totalPrice = calcTotalPrice(items);

  return {
    items,
    totalPrice,
  };
};
