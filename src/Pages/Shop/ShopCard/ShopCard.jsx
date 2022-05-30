import React, { useState } from 'react';
import './ShopCard.css';

const ShopCard = ({ cardTittle, cardImg, cardName, cardText, cardPrice }) => {
  const [count, setCount] = useState(0);

  const addButtonClick = () => {
    setCount(count + 1);
  };
  return (
    <>
      <div class="containerCard">
        <div class="card">
          <div class="card-head">
            <div class="product-detail">
              <h2>{cardTittle}</h2>
            </div>
            <img src={cardImg} alt="logo" class="card-logo" />
          </div>
          <div class="card-body">
            <div class="product-desc">
              <span class="product-title">
                {cardName}
                <span class="badge">New</span>
              </span>
            </div>
            <div class="product-properties">
              <div className="cardBodyText">{cardText}</div>

              <span class="product-price">
                <b>{cardPrice}</b>
              </span>
              <button
                onClick={addButtonClick}
                className="btnAdd btn btn-warning"
              >
                + Добавить {count}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopCard;
