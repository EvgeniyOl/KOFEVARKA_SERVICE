import React, { useEffect, useState } from 'react';
import './Shop.css';
import Categories from './Categories/Categories';
import Basket from './Bascet/Basket';
import ShopCard from './ShopCard/ShopCard.jsx';
import cardShopParams from '../../Assets/cardShopParams.json';
import Skeleton from './ShopCard/Skeleton';

const Shop = (props) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    fetch('https://62a167b3cc8c0118ef4ade8d.mockapi.io/items')
      .then((response) => response.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      })
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="shopBlock">
        <div className="container-fluid p-0 m-0">
          <div className="row p-0 m-0">
            <div className="col p-0 m-0">
              <div className="shopHeader container-fluid p-0 m-0">
                <Categories />
                <Basket />
              </div>
              <div className="container-fluid p-0 m-0 shopCardContainer">
                {
                  isLoading ? [... new Array(6)].map((_, index) => <Skeleton key={index} />) : items.map((obj) => <ShopCard key={obj.id} {...obj} />)
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
