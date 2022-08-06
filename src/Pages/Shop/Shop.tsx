import { useEffect, useState } from 'react';
import './Shop.css';
import Categories from './Categories/Categories';
import Basket from './Bascet/Basket';
import ShopCard from './ShopCard/ShopCard';
import Skeleton from './ShopCard/Skeleton';
import SortButton from './Categories/SortButton';
import Pagination from '../../Pagination/Pagination';
import { useSelector } from 'react-redux';
import { fetchShopItems } from '../../Redux/Slices/shopItemsSlice';
import { useAppDispatch } from '../../Redux/store';

const Shop: React.FC = () => {
  const { items, status } = useSelector(
    (state: { shopItemsReducer: { items: []; status: string } }) =>
      state.shopItemsReducer,
  );

  const dispatch = useAppDispatch();
  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState({
    name: '',
    sortProperty: '',
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsperPage] = useState(8);
  const lastItemsIndex = currentPage * itemsperPage;
  const firstItemsIndex = lastItemsIndex - itemsperPage;
  const currentItem = items.slice(firstItemsIndex, lastItemsIndex);
  console.log(currentItem);

  const category = categoryId > 0 ? `categories=${categoryId}` : '';

  const getShopItems = async () => {
    dispatch(fetchShopItems({ category, currentPage, sortType }));
    window.scrollTo(0, 0);
  };

  //изменились параметры или был первый рендер
  useEffect(() => {
    getShopItems();
  }, [currentPage, category, sortType.sortProperty]);

  const skeletons = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));
  const shopItems = currentItem.map((obj: any) => (
    <ShopCard key={obj.id} {...obj} />
  ));

  return (
    <>
      <div className="shop-block">
        <div className="container-fluid p-0 m-0">
          <div className="row p-0 m-0">
            <div className="col p-0 m-0">
              <div className="shop-header container-fluid p-0 m-0">
                <Categories
                  value={categoryId}
                  onClickCategory={(index) => setCategoryId(index)}
                  onChangePage={(number: number) => setCurrentPage(number)}
                />
                <SortButton
                  value={sortType}
                  onClickSort={(index) => setSortType(index)}
                />
              </div>
              <div className="basket-style container-fluid">
                <Basket />
              </div>

              <div className="container-fluid p-0 m-0 shop-card-container">
                {status === 'loading' ? skeletons : shopItems}
              </div>
              <Pagination
                itemsCount={items.length}
                itemsperPage={itemsperPage}
                onChangePage={(number: number) => setCurrentPage(number)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
