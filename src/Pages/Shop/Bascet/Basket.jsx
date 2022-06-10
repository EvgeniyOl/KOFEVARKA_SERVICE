import React from 'react';
import { Link } from 'react-router-dom';
import './Basket.css';

const Basket = (props) => {
  return (
    <>
      <Link to='/basket'><button className='btn btn-warning'>Корзина</button></Link>
    </>
  );
};

export default Basket;
