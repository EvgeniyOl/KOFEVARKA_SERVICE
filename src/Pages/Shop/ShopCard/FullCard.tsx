import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addItems } from '../../../Redux/Slices/basketSlice';
import Basket from '../Bascet/Basket';
import './FullCard.css';

const FullCard: React.FC = () => {
  const { id } = useParams();
  const [shopItem, setShopItem] = useState<{
    id: string;
    img: string;
    size: number[];
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

  useEffect(() => {
    async function fetchShopItem() {
      try {
        const { data } = await axios.get(
          `https://62a167b3cc8c0118ef4ade8d.mockapi.io/items/${id}`,
        );
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
        <Basket />
      </div>
      <div className="full-card-wrapper">
        <div className="full-card-img">
          <img src={shopItem.img} alt="item-img" />
        </div>
        <div className="full-card-info">
          <div className="full-card-tittle">
            {shopItem.cardTittle} -- {shopItem.cardName}
          </div>
          <div>{shopItem.fullInfo}</div>
          <Button
            variant="outline-success"
            size="lg"
            className="mt-3"
            onClick={onClickAdd}
          >
            Добавить в корзину <span>{countItem}</span>
          </Button>{' '}
          <span>{shopItem.count}</span>
        </div>
      </div>
    </div>
  );
};

export default FullCard;
