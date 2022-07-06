import React from 'react';
import { useDispatch } from 'react-redux';
import { addItems, minusItem } from '../../Redux/Slices/basketSlice';
import './BasketItems.css';

const BasketItem = ({
  id,
  img,
  cardTittle,
  cardName,
  size,
  cardPrice,
  count,
}) => {
  const dispatch = useDispatch();

  const onClickPlus = () => {
    dispatch(addItems({ id }))
  }
  const onClickMinus = () => {
    dispatch(minusItem(id))
  }
  return (
    <div className="basketItemCard">
      <hr />
      <div className="basketItemTittle m-3">
        <div>{cardTittle}</div>
        <div>{cardName}</div>
      </div>
      <div className="m-3">{size} грамм</div>
      <div className="m-3">
        <div>Цена</div>
        <div>{cardPrice * count} р.</div>
      </div>
      <div className="m-3">
        <div>Количество</div>

        <div><button onClick={onClickMinus} className='btn btn-danger'>-</button> {count} <button onClick={onClickPlus} className='btn btn-success'>+</button></div>
      </div>
      <hr />
    </div>
  );
};

export default BasketItem;
