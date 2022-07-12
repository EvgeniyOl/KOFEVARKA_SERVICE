import './BasketPage.css';
import basket from '../../Assets/img/shopping-cart.png';
import garbageImg from './../../Assets/img/garbage.png';
import { useDispatch, useSelector } from 'react-redux';
import {
  BasketItem,
  basketSelector,
  clearItems,
} from '../../Redux/Slices/basketSlice';
import BasketItems from './BasketItem';
import { getApplication, getBasketLS } from '../../utils/getBasketLocalStorage';
import axios from 'axios';

const BasketPage: React.FC = () => {
  const { items, totalPrice } = useSelector(basketSelector);
  const dispatch = useDispatch();

  const removeBasket = () => {
    dispatch(clearItems());
  };
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

  const onSubmit = () => {
    const telegramToken = process.env.REACT_APP_TOKEN;
    const CHAT_ID = '-707751403';
    const URL_API = `https://api.telegram.org/bot${telegramToken}/sendMessage`;

    let message = `<b>Заявка с сайта!</b>\n`;
    message += JSON.stringify(getApplication(), null, '\t');
    axios.post(URL_API, {
      chat_id: CHAT_ID,
      parse_mode: 'html',
      text: message,
    });
    console.log(getApplication());
  };

  return (
    <div className="contaner">
      <div className="basket-container">
        <div className="basket-header">
          <div className="basket-img">
            <img src={basket} alt="basket-img" />
            <h2>Корзина</h2>
          </div>
          <button onClick={removeBasket} className="btn btn-danger">
            <img src={garbageImg} width={'30px'} /> Очистить корзину
          </button>
        </div>
        <hr />
        <div className="basket-body">
          {items.map((item) => (
            <BasketItems key={item.id} {...item} />
          ))}
        </div>
        <hr />
        <div className="basket-footer">
          <p>Всего: {totalCount}</p>
          <p>
            Сумма заказа: <span className="basket-price">{totalPrice}р.</span>{' '}
          </p>
        </div>
        <div className="basket-pay">
          <button onClick={onSubmit} className="btn btn-success">
            Заказать
          </button>
        </div>
      </div>
    </div>
  );
};

export default BasketPage;
