import React from 'react';
import './Categories.css';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoriesType } from '../../../Redux/Slices/filterSlice';

const Categories = ({ value, onClickCategory }) => {

  const categories = [
    'Все категории',
    'Кофе',
    'Химия',
  ];

  const categoriesType = useSelector(state => state.filterReducer.categoriesType);
  const dispatch = useDispatch()

  const onSelectItem = (index) => {
    onClickCategory(index);
    dispatch(setCategoriesType(index));
  };


  return (
    <>
      <div className="categories">
        {categories &&
          categories.map((categoryName, index) => (
            <button
              key={`${categoryName}_${index}`}
              onClick={() => onSelectItem(index)}
              className={value === index ? 'btn active' : 'btn btn-warning'}
            >
              {categoryName}
            </button>
          ))}
      </div>

    </>
  );
};

export default Categories;
