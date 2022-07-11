import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setSort, Sort } from '../../../Redux/Slices/filterSlice';
import './SortButton.css';

type SortButtonProps = {
  value: { name: string; sortProperty: string };
  onClickSort: (inedx: Sort) => void;
};

const SortButton: React.FC<SortButtonProps> = ({ value, onClickSort }) => {
  const dispatch = useDispatch();

  const [isVisiblePopup, setVisiblePopup] = useState(false);

  const sortMenu: Sort[] = [
    { name: 'По цене', sortProperty: 'cardPrice' },
    { name: 'По популярности', sortProperty: 'rating' },
  ];

  const onClickSortMenuItem = (index: Sort) => {
    onClickSort(index);
    dispatch(setSort(index));
    setVisiblePopup(false);
  };
  return (
    <>
      <div className="d-flex">
        <div className="sort-list">
          <Button
            className="button-sort"
            onClick={() => setVisiblePopup(!isVisiblePopup)}
            variant="warning"
          >
            Отсортировать
          </Button>{' '}
        </div>
        {isVisiblePopup && (
          <div className="sort-popup">
            <ul>
              {sortMenu.map((obj, index) => (
                <li
                  key={index}
                  className={
                    value.sortProperty === obj.sortProperty
                      ? 'activeSort'
                      : 'listItem'
                  }
                  onClick={() => {
                    onClickSortMenuItem(obj);
                  }}
                >
                  {obj.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default SortButton;
