import React, { useState } from 'react';
import './ShopCard.css';
import { useDispatch } from 'react-redux';
import { addItems, BasketItem } from '../../../Redux/Slices/basketSlice';
import { Link } from 'react-router-dom';

type ShopCardProps = {
  id: string;
  img: string;
  cardTittle: string;
  cardName: string;
  sizes: [];
  cardText: string;
  cardPrice: number;
  count: number;
};
const ShopCard: React.FC<ShopCardProps> = ({
  id,
  img,
  cardTittle,
  cardName,
  sizes,
  cardText,
  cardPrice,
  count,
}) => {
  const dispatch = useDispatch();

  const [activeSize, setActiveSize] = useState(0);

  const onClickAdd = () => {
    const item: BasketItem = {
      id,
      img,
      cardTittle,
      cardName,
      size: sizes[activeSize],
      cardPrice,
      count: 0,
    };
    dispatch(addItems(item));
  };

  return (
    <>
      <div className="containerCard">
        <div className="card">
          <Link to={`fullCard/${id}`}>
            <div className="card-head">
              <div className="product-detail">
                <h2>{cardTittle}</h2>
              </div>
              <img src={img} alt="logo" className="card-logo" />
            </div>
          </Link>

          <div className="card-body">
            <div className="product-desc">
              <span className="product-title">{cardName}</span>
            </div>
            <div className="product-properties">
              <div className="cardBodyText">{cardText}</div>
              <div className="itemSize">
                <ul className="sizeUl">
                  {sizes.map((size, index) => (
                    <li
                      key={index}
                      onClick={() => setActiveSize(index)}
                      className={activeSize === index ? 'activeSize' : ''}
                    >
                      {size} г.
                    </li>
                  ))}
                </ul>
              </div>

              <span className="product-price">
                <b>{cardPrice}</b>
              </span>
              <button onClick={onClickAdd} className="btnAdd btn btn-warning">
                Добавить
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopCard;
