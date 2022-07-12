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

export const getApplication = () => {
  const { items, totalPrice } = getBasketLS();
  const itemData = items.map((item: any) => {
    return `Бренд: ${item.cardTittle}, Название: ${item.cardName}, Размер: ${item.size}, Штук: ${item.count}`;
  });
  const totalPriceData = `Сумма заказа ${totalPrice}`;

  return {
    itemData,
    totalPriceData,
  };
};
