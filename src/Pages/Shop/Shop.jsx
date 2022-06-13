import React, { useEffect, useState } from 'react';
import './Shop.css';
import Categories from './Categories/Categories';
import Basket from './Bascet/Basket';
import ShopCard from './ShopCard/ShopCard.jsx';
import Skeleton from './ShopCard/Skeleton';
import SortButton from './../Shop/Categories/SortButton.jsx'
import Search from './Search/Search';
import Pagination from '../../Pagination/Pagination';
import axios from 'axios';

const Shop = (props) => {
  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState(0);

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [searchValue, setSearchValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const search = searchValue ? `search=${searchValue}` : '';
  const category = categoryId > 0 ? `categories=${categoryId}` : '';
  useEffect(() => {
    setIsLoading(true);

    axios.get(`https://62a167b3cc8c0118ef4ade8d.mockapi.io/items?page=${currentPage}&limit=4&${category}${search}&sortBy=${sortType.sortProperty}&order=desc`)
      .then((response) => {
        setItems(response.data);
        setIsLoading(false);
      })
    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue, currentPage]);

  return (
    <>
      <div className="shopBlock">
        <div className="container-fluid p-0 m-0">
          <div className="row p-0 m-0">
            <div className="col p-0 m-0">
              <div className="shopHeader container-fluid p-0 m-0">
                <Categories value={categoryId} onClickCategory={(index) => setCategoryId(index)} />
                <SortButton value={sortType} onClickSort={(index) => setSortType(index)} />
                <Search />
                <Basket />
              </div>
              <div className="container-fluid p-0 m-0 shopCardContainer">
                {
                  isLoading ? [... new Array(6)].map((_, index) => <Skeleton key={index} />) : items.map((obj) => <ShopCard key={obj.id} {...obj} />)
                }
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
