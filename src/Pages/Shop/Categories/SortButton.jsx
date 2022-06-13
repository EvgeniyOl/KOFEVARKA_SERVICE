import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { setSort } from '../../../Redux/Slices/filterSlice';
import './SortButton.css';

const SortButton = ({ value, onClickSort }) => {
  const dispatch = useDispatch();
  const sort = useSelector(state => state.filterReducer.sortType);

  const [isVisiblePopup, setVisiblePopup] = useState(false);

  const sortMenu = [
    { name: 'По цене', sortProperty: 'cardPrice' },
    { name: ' По популярности', sortProperty: 'rating' }
  ];

  const onClickSortMenuItem = (index) => {
    onClickSort(index);
    dispatch(setSort(index));
    setVisiblePopup(false);
  }
  return (
    <>
      <div className='sortList'>
        <Button onClick={() => setVisiblePopup(!isVisiblePopup)} variant="outline-warning">Отсортировать</Button>{' '}
        {isVisiblePopup && (<div className="sortPopup">
          <ul>
            {sortMenu.map((obj, index) => <li
              key={index}
              className={value.sortProperty === obj.sortProperty ? 'activeSort' : 'listItem'}
              onClick={() => {
                onClickSortMenuItem(obj)
              }}
            >{obj.name}</li>)}
          </ul>
        </div>)}
      </div>
    </>
  )
}

export default SortButton
