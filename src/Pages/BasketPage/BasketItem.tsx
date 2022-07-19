import { useEffect, useRef } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
  addItems,
  BasketItem,
  basketSelector,
  minusItem,
  removeItems,
} from '../../Redux/Slices/basketSlice';
import './BasketItems.css';

const BasketItems: React.FC<BasketItem> = ({
  id,
  img,
  cardTittle,
  cardName,
  size,
  cardPrice,
  count,
}) => {
  const dispatch = useDispatch();
  const { items } = useSelector(basketSelector);
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items);
      localStorage.setItem('basketItems', json); // сохраняем корзину в хранилище
    }
    isMounted.current = true;
  }, [items]);

  const onClickPlus = () => {
    dispatch(addItems({ id } as BasketItem));
  };
  const onClickMinus = () => {
    dispatch(minusItem(id));
  };
  const onClickDeleteItem = () => {
    dispatch(removeItems(id));
  };
  return (
    <div className="basket-item-card">
      <div className="basket-item-img-tittle">
        <div className="basket-item-img my-3">
          <img src={img} alt="item-img" />
        </div>
        <div className="basket-item-tittle m-3">
          <div>{cardTittle}</div>
          <div>{cardName}</div>
        </div>
      </div>

      <div className="basket-item-weight-price">
        <div className="m-3">
          <div className="text-center">Вес</div>
          <hr />
          <div>{size}</div>
        </div>
        <div className="m-3">
          <div className="text-center">Цена</div>
          <hr />
          <div>{cardPrice * count}</div>
        </div>
      </div>

      <div className="m-3 plus-minus">
        <div className="text-center mb-2">Количество</div>
        <div>
          <Button
            variant="outline-danger"
            disabled={count === 1}
            onClick={onClickMinus}
            className="mx-2"
          >
            -
          </Button>{' '}
          {count}
          <Button
            variant="outline-success"
            onClick={onClickPlus}
            className="mx-2"
          >
            +
          </Button>{' '}
        </div>
      </div>
      <div>
        <div className="delete-button">
          <div className="text-center mx-2">Убрать</div>
          <Button
            variant="outline-danger"
            className="mx-3 my-3"
            onClick={onClickDeleteItem}
          >
            x
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BasketItems;
