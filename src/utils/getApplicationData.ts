import { BasketItem } from './../redux/slices/basketSlice';
import { getBasketLS } from './getBasketLocalStorage';

export const getApplication = () => {
  const { items, totalPrice } = getBasketLS();
  const itemData = items.map((item: BasketItem) => {
    return `${item.cardTittle} -- ${item.cardName} -- ${item.size} -- ${item.count} штук`;
  });
  const totalPriceData = `Общая сумма заказа ${totalPrice}`;

  return {
    itemData,
    totalPriceData,
  };
};
