import React from 'react';
import './BasketPage.css';
import basket from "../../Assets/img/shopping-cart.png";
import garbageImg from './../../Assets/img/garbage.png';
import { useDispatch, useSelector } from 'react-redux';
import { basketSelector, clearItems } from '../../Redux/Slices/basketSlice';
import BasketItem from './BasketItem';

const BasketPage = (props) => {
  const { items, totalPrice } = useSelector(basketSelector);
  const dispatch = useDispatch();


  const removeBasket = () => {
    dispatch(clearItems());
  }
  const totalCount = items.reduce((sum, item) => sum + item.count, 0)

  return (
    <div className="contaner">
      <div className="basket-container">
        <div className="basket-header">
          <div className='basket-img'>
            <img src={basket} alt="basket-img" />
            <h2>Корзина</h2>
          </div>
          <button onClick={removeBasket} className='btn btn-danger'><img src={garbageImg} width={'30px'} /> Очистить корзину</button>
        </div>
        <hr />
        <div className="basket-body">
          {items.map(item => <BasketItem key={item.id} {...item} />)}
        </div>
        <hr />
        <div className="basket-footer">
          <p>Всего: {totalCount}</p>
          <p>Сумма заказа: <span className='basket-price'>{totalPrice}р.</span> </p>
        </div>
        <div className="basket-pay">
          <button className='btn btn-success'>Оплатить</button>
        </div>
      </div>
    </div>
  );
};

export default BasketPage;
