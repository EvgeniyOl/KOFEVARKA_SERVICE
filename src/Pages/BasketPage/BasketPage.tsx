import './BasketPage.css';
import basket from '../../Assets/img/shopping-cart.png';
import garbageImg from './../../Assets/img/garbage.png';
import { useDispatch, useSelector } from 'react-redux';
import { basketSelector, clearItems } from '../../Redux/Slices/basketSlice';
import BasketItems from './BasketItem';
import axios from 'axios';
import { getApplication } from '../../utils/getApplicationData';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const BasketPage: React.FC = () => {
  const { items, totalPrice } = useSelector(basketSelector);
  const dispatch = useDispatch();

  const removeBasket = () => {
    dispatch(clearItems());
  };
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

  const {
    register, //набор св-в
    formState: { errors },
    handleSubmit, //обертка
    reset, //сброс после отправки
  } = useForm();

  const onSubmit = (data: any) => {
    const telegramToken = process.env.REACT_APP_TOKEN;
    const CHAT_ID = '-707751403';
    const URL_API = `https://api.telegram.org/bot${telegramToken}/sendMessage`;

    let message = `<b>Заявка с сайта!</b>\n`;
    const { itemData, totalPriceData } = getApplication();
    message += JSON.stringify({ itemData, totalPriceData, data }, null, '\t');
    if (itemData.length > 0) {
      axios.post(URL_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message,
      });
      console.log(message);
      alert('Мы получили ваш заказ, ожидайте звонка');
      reset();
      dispatch(clearItems());
      window.localStorage.clear();
    } else {
      alert('Ваша корзина пуста');
    }
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
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group>
              <Form.Label>Введите номер телефона</Form.Label>
              <Form.Control
                placeholder="+7913xxxxxxx"
                {...register('PhoneNumber', {
                  required: 'Поле обязательно к заполнению!',
                  minLength: {
                    value: 11,
                    message: 'Минимум 11 символов!',
                  },
                  maxLength: {
                    value: 12,
                    message: 'Максимум 12 символов!',
                  },
                })}
              />
            </Form.Group>
            <p className="errors">{errors?.PhoneNumber?.message}</p>
            <Button type="submit" className="btn btn-success mt-3 w-100">
              Заказать
            </Button>{' '}
          </Form>
        </div>
      </div>
    </div>
  );
};

export default BasketPage;
