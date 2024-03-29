import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addItems } from '../../redux/slices/basketSlice';
import BasketButton from './BasketButton';
import './FullCard.css';

const FullCard: React.FC = () => {
  const { id } = useParams();
  const [shopItem, setShopItem] = useState<{
    id: string;
    img: string;
    size: number;
    cardTittle: string;
    cardName: string;
    cardPrice: number;
    fullInfo: string;
    count: number;
  }>();
  const [countItem, setCountItem] = useState(0);

  const dispatch = useDispatch();
  const onClickAdd = () => {
    if (shopItem) {
      dispatch(addItems(shopItem));
    }
    setCountItem(countItem + 1);
  };

  const FETCH_DATA = process.env.REACT_APP_ITEMS_DATA;
  useEffect(() => {
    async function fetchShopItem() {
      try {
        const { data } = await axios.get(`${FETCH_DATA}/items/${id}`);
        setShopItem(data);
      } catch (err) {
        console.log(err);
        alert('Ошибка при получении товара');
      }
    }
    fetchShopItem();
  }, []);

  if (!shopItem) {
    return <div className="full-card-container">Загрузка...</div>;
  }
  return (
    <div className="full-card-container">
      <div className="m-3">
        <BasketButton />
      </div>
      <div className="full-card-wrapper">
        <div className="full-card-img">
          <img src={shopItem.img} alt="item-img" />
        </div>
        <div className="full-card-info">
          <div className="full-card-tittle">
            {shopItem.cardTittle} -- {shopItem.cardName} -- {shopItem.size}
          </div>
          <div>{shopItem.fullInfo}</div>
          <Button
            variant="outline-primary"
            size="lg"
            className="mt-3"
            onClick={onClickAdd}
          >
            Добавить в корзину <span>{countItem}</span>
          </Button>{' '}
        </div>
      </div>
    </div>
  );
};

export default FullCard;
