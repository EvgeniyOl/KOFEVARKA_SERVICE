import { getBasketLS } from './getBasketLocalStorage';

export const getApplication = () => {
  const { items, totalPrice } = getBasketLS();
  const itemData = items.map((item: any) => {
    return `${item.cardTittle} -- ${item.cardName} -- ${item.size} -- ${item.count} штук`;
  });
  const totalPriceData = `Общая сумма заказа ${totalPrice}`;

  return {
    itemData,
    totalPriceData,
  };
};
