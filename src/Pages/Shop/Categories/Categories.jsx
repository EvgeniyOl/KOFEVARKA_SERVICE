import React, { useState } from 'react';
import './Categories.css';
import SortButton from './SortButton';

const Categories = () => {

  const categories = ['Все',
    'Новые Кофемашины',
    'Б/У Кофемашины',
    'Кофе',
    'Химия',
    'Подарочные наборы',];

  const [activeItem, setActiveItem] = useState(0);
  const onSelectItem = (index) => {
    setActiveItem(index);
  };

  return (
    <>
      <div className="categories">
        {categories &&
          categories.map((el, index) => (
            <button
              key={`${el}_${index}`}
              onClick={() => onSelectItem(index)}
              className={activeItem === index ? 'btn active' : 'btn btn-warning'}
            >
              {el}
            </button>
          ))}
        <SortButton />
      </div>

    </>
  );
};

export default Categories;
