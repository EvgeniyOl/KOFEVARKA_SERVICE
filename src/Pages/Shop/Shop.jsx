import React, { useEffect, useState } from 'react';
import './Shop.css';
import Categories from './Categories/Categories';
import Basket from './Bascet/Basket';
import ShopCard from './ShopCard/ShopCard.jsx';
import Skeleton from './ShopCard/Skeleton';
import SortButton from './../Shop/Categories/SortButton.jsx';
import Pagination from '../../Pagination/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { fetchShopItems } from '../../Redux/Slices/shopItemsSlice';
import { Link } from 'react-router-dom';

const Shop = (props) => {
  const { items, status } = useSelector((state) => state.shopItemsReducer);
  const dispatch = useDispatch();

  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState(0);
  const [searchValue, setSearchValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const search = searchValue ? `search=${searchValue}` : '';
  const category = categoryId > 0 ? `categories=${categoryId}` : '';

  const getShopItems = async () => {
    dispatch(fetchShopItems({ search, category, currentPage, sortType }));
    window.scrollTo(0, 0);
  };

  //изменились параметры или был первый рендер
  useEffect(() => {
    getShopItems();
  }, [currentPage, category, search, sortType.sortProperty]);

  const skeletons = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));
  const shopItems = items.map((obj) => <ShopCard key={obj.id} {...obj} />);

  return (
    <>
      <div className="shopBlock">
        <div className="container-fluid p-0 m-0">
          <div className="row p-0 m-0">
            <div className="col p-0 m-0">
              <div className="shopHeader container-fluid p-0 m-0">
                <Categories
                  value={categoryId}
                  onClickCategory={(index) => setCategoryId(index)}
                />
                <SortButton
                  value={sortType}
                  onClickSort={(index) => setSortType(index)}
                />
              </div>
              <div className="basketStyle container-fluid">
                <Basket />
              </div>

              <div className="container-fluid p-0 m-0 shopCardContainer">
                {status === 'loading' ? skeletons : shopItems}
              </div>
              <Pagination onChangePage={(number) => setCurrentPage(number)} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
