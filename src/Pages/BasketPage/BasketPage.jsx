import React from 'react';
import './BasketPage.css';
import basket from "../../Assets/img/shopping-cart.png";

const BasketPage = (props) => {
  return (
    <div className="contaner">
      <div className="basket-container">
        <div className="basket-header">
          <div className='basket-img'>
            <img src={basket} alt="basket-img" />
            <h2>Корзина</h2>
          </div>
          <button className='btn btn-danger'>Очистить корзину</button>
        </div>
        <hr />
        <div className="basket-body">

        </div>
        <hr />
        <div className="basket-footer">
          <p>Всего:</p>
          <p>Сумма заказа: <span className='basket-price'>900р</span> </p>
        </div>
        <div className="basket-pay">
          <button className='btn btn-success'>Оплатить</button>
        </div>
      </div>
    </div>
  );
};

export default BasketPage;
