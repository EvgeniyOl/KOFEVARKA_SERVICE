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
  };

  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

  if (items.length < 1) {
    return (
      <div className="contaner">
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
              Сумма заказа: <span className="basket-price">{totalPrice}р.</span>{' '}
            </p>
          </div>
          <div className="basket-button"></div>
        </div>
      </div>
    );
  }
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
        <div className="basket-button">
          <Button className="btn btn-success" onClick={handleShowBasketModal}>
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
