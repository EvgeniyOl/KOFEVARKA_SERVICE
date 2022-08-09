import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './BasketButton.css';
import basketImg from './../../assets/img/shopping-cart.png';
import priceImg from './../../assets/img/price-tag.png';
import { basketSelector } from '../../redux/slices/basketSlice';
import { useEffect, useRef } from 'react';

const BasketButton: React.FC = () => {
  const { items, totalPrice } = useSelector(basketSelector);

  const isMounted = useRef(false);
  useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items);
      localStorage.setItem('basketItems', json); // сохраняем корзину в хранилище
    }
    isMounted.current = true;
  }, [items]);

  const totalCount = items.reduce(
    (sum: number, item: { count: number }) => sum + item.count,
    0,
  );
  return (
    <>
      <Link to="/basket">
        <button className="btn btn-warning">
          Корзина{' '}
          <span>
            <img src={basketImg} width={'20px'} alt="basketImg" /> {totalCount}
          </span>{' '}
          <span>
            <img src={priceImg} width={'20px'} alt="priceImg" /> {totalPrice}р.
          </span>
        </button>
      </Link>
    </>
  );
};

export default BasketButton;
