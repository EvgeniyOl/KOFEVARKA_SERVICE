import React, { useState } from 'react';
import './Categories.css';

const Categories = ({ items }) => {

  const [activeItem, setActiveItem] = useState(0);
  const onSelectItem = (index) => {
    setActiveItem(index);
  };

  return (
    <div className="categories">
      {items &&
        items.map((el, index) => (
          <button
            key={`${el}_${index}`}
            onClick={() => onSelectItem(index)}
            className={activeItem === index ? 'btn active' : 'btn btn-warning'}
          >
            {el}
          </button>
        ))}
    </div>
  );
};

export default Categories;
