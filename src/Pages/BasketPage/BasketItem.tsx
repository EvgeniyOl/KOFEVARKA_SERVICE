import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {
  addItems,
  BasketItem,
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

  const onClickPlus = () => {
    dispatch(addItems({ id } as BasketItem));
  };
  const onClickMinus = () => {
    dispatch(minusItem(id));
  };
  const onClickDeleteItem = () => {
    dispatch(removeItems(id));
    window.localStorage.clear();
  };
  return (
    <div className="basket-item-card">
      <div className="basket-item-img my-3">
        <img src={img} alt="item-img" />
      </div>
      <div className="basket-item-tittle m-3">
        <div>{cardTittle}</div>
        <div>{cardName}</div>
      </div>
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

      <div className="m-3">
        <div className="text-center mx-2">Количество</div>
        <div>
          <Button
            variant="outline-danger"
            disabled={count === 1}
            onClick={onClickMinus}
            className="mx-2"
          >
            -
          </Button>{' '}
          {count}{' '}
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
        <div className="text-center mx-2">Убрать</div>
        <Button
          variant="outline-danger"
          className="mx-3"
          onClick={onClickDeleteItem}
        >
          x
        </Button>
      </div>
    </div>
  );
};

export default BasketItems;
