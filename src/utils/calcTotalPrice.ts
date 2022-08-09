import { BasketItem } from '../redux/slices/basketSlice';

export const calcTotalPrice = (items: BasketItem[]) => {
  return items.reduce((sum, obj) => {
    return obj.cardPrice * obj.count + sum;
  }, 0);
};
