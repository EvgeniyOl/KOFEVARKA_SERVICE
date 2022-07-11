import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './FullCard.css';

const FullCard: React.FC = () => {
  const { id } = useParams();
  const [shopItem, setShopItem] = useState<{
    img: string;
    cardTittle: string;
    cardName: string;
    cardPrice: number;
    fullInfo: string;
  }>();

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
    <div className="container full-card-container">
      <div>
        <img src={shopItem.img} alt="item-img" />
      </div>
      <div>{shopItem.cardTittle}</div>
      <div>{shopItem.cardName}</div>
      <div>{shopItem.fullInfo}</div>
    </div>
  );
};

export default FullCard;
