import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setSort, Sort } from '../../redux/slices/filterSlice';
import './SortButton.css';

type SortButtonProps = {
  value: { name: string; sortProperty: string };
  onClickSort: (inedx: Sort) => void;
  onChangePage: (number: number) => void;
};

const SortButton: React.FC<SortButtonProps> = ({
  value,
  onClickSort,
  onChangePage,
}) => {
  const dispatch = useDispatch();

  const [isVisiblePopup, setVisiblePopup] = useState(false);

  const sortMenu: Sort[] = [
    { name: 'По цене', sortProperty: 'cardPrice' },
    { name: 'По популярности', sortProperty: 'rating' },
  ];

  const onClickSortMenuItem = (index: Sort) => {
    onClickSort(index);
    dispatch(setSort(index));
    onChangePage(1);
    setVisiblePopup(false);
  };
  return (
    <>
      <div className="d-flex-column">
        <div className="sort-list">
          <Button
            size="sm"
            className="button-sort"
            onClick={() => setVisiblePopup(!isVisiblePopup)}
            variant="info"
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
