import './BasketPage.css';
import basket from '../../Assets/img/shopping-cart.png';
import garbageImg from './../../Assets/img/garbage.png';
import { useDispatch, useSelector } from 'react-redux';
import { basketSelector, clearItems } from '../../Redux/Slices/basketSlice';
import BasketItems from './BasketItem';
import { Button, Modal } from 'react-bootstrap';
import { useState } from 'react';
import BasketModalForm from './BasketModalForm';
import kot from '../../Assets/img/shop/kot-PhotoRoom.png';

const BasketPage: React.FC = () => {
  const { items, totalPrice } = useSelector(basketSelector);
  const dispatch = useDispatch();

  const [showBasketModal, setShowBasketModal] = useState(false);
  const handleCloseBasketModal = () => setShowBasketModal(false);
  const handleShowBasketModal = () => setShowBasketModal(true);

  const removeBasket = () => {
    dispatch(clearItems());
    window.localStorage.clear();
  };

  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

  if (items.length < 1) {
    return (
      <div className="back">
        <div className="basket-container">
          <div className="basket-header">
            <div className="basket-img">
              <img src={basket} alt="basket-img" />
              <h2>Корзина</h2>
            </div>
          </div>
          <hr />
          <div className="basket-body">
            <div className="basket-kot-img">
              <img src={kot} alt="kot" />
            </div>
            <span className="basket-kot-tittle">
              Тут ничего нет! Нужно что-то выбрать!!
            </span>
          </div>
          <hr />
          <div className="basket-footer">
            <p>Всего: {totalCount}</p>
            <p>
              Сумма заказа:{' '}
              <span className="basket-price">{totalPrice} рублей</span>{' '}
            </p>
          </div>
          <div className="basket-button"></div>
        </div>
      </div>
    );
  }
  return (
    <div className="back">
      <div className="basket-container">
        <div className="basket-header">
          <div className="basket-img">
            <img src={basket} alt="basket-img" />
            <h2>Корзина</h2>
          </div>
          <Button variant="outline-danger" onClick={removeBasket}>
            <img src={garbageImg} width={'30px'} /> Очистить корзину
          </Button>{' '}
        </div>
        <div className="basket-body m-3">
          {items.map((item) => (
            <BasketItems key={item.id} {...item} />
          ))}
        </div>
        <div className="basket-footer">
          <p>Всего: {totalCount}</p>
          <p>
            Сумма заказа:{' '}
            <span className="basket-price">{totalPrice} рублей</span>{' '}
          </p>
        </div>
        <div className="basket-button">
          <Button variant="outline-primary" onClick={handleShowBasketModal}>
            Заказать
          </Button>{' '}
        </div>
        <Modal show={showBasketModal} onHide={handleCloseBasketModal}>
          <BasketModalForm />
        </Modal>
      </div>
    </div>
  );
};

export default BasketPage;
