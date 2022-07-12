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
  };
  return (
    <div className="basket-item-card">
      <div className="basket-item-img">
        <img src={img} alt="item-img" />
      </div>
      <div className="basket-item-tittle m-3">
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
        <div>
          <button
            disabled={count === 1}
            onClick={onClickMinus}
            className="btn btn-danger"
          >
            -
          </button>{' '}
          {count}{' '}
          <button onClick={onClickPlus} className="btn btn-success">
            +
          </button>
        </div>
      </div>
      <div>
        <button className="btn btn-danger m-3" onClick={onClickDeleteItem}>
          x
        </button>
      </div>
    </div>
  );
};

export default BasketItems;
