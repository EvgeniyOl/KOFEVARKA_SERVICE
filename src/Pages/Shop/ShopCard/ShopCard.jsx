import React, { useState } from 'react';
import './ShopCard.css';
import etna from './../../../Assets/img/etna-pix.webp';


const ShopCard = ({
  img,
  cardTittle,
  cardName,
  sizes,
  cardText,
  cardPrice,
}) => {

  const [activeSize, setActiveSize] = useState(0);

  const [addItem, setAddItem] = useState(0);
  return (
    <>
      <div className="containerCard">
        <div className="card">
          <div className="card-head">
            <div className="product-detail">
              <h2>{cardTittle}</h2>
            </div>
            <img src={img} alt="logo" className="card-logo" />
          </div>
          <div className="card-body">
            <div className="product-desc">
              <span className="product-title">{cardName}</span>
            </div>
            <div className="product-properties">
              <div className="cardBodyText">{cardText}</div>
              <div className="itemSize">
                <ul className='sizeUl'>
                  {sizes.map((size, index) => (<li key={index} onClick={() => setActiveSize(index)} className={activeSize === index ? 'activeSize' : ''}>{size} г.</li>))}
                </ul>
              </div>

              <span className="product-price">
                <b>{cardPrice}</b>
              </span>
              <button onClick={() => {
                setAddItem(addItem + 1)
              }} className="btnAdd btn btn-warning">+ Добавить {addItem}</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopCard;
