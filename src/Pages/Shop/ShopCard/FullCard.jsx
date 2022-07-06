import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './FullCard.css';

const FullCard = (props) => {
  const { id } = useParams();
  const [shopItem, setShopItem] = useState();

  useEffect(() => {
    async function fetchShopItem() {
      try {
        const { data } = await axios.get(
          `https://62a167b3cc8c0118ef4ade8d.mockapi.io/items/${id}`
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
    return (
      <div className="a">
        Загрузка...
      </div>
    )
  }
  return (
    <div className="container a">
      <div>{shopItem.cardTittle}</div>
      <div>{shopItem.cardName}</div>
      <div>{shopItem.cardPrice}</div>
      <div>{shopItem.fullInfo}</div>
    </div>
  );
};

export default FullCard;
