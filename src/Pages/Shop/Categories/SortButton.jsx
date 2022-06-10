import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import './SortButton.css';

const SortButton = (props) => {
  const [isVisiblePopup, setVisiblePopup] = useState(false);

  const sortMenu = ['По цене', ' По популярности', 'По алфавиту'];
  const [selected, setSelected] = useState(0);
  const onClickSortMenuItem = (index) => {
    setSelected(index);
    setVisiblePopup(false);
  }
  return (
    <>
      <div className='sortList'>
        <Button onClick={() => setVisiblePopup(!isVisiblePopup)} variant="outline-warning">Отсортировать</Button>{' '}
        {isVisiblePopup && (<div className="sortPopup">
          <ul>
            {sortMenu.map((name, index) => <li
              key={index}
              className={selected === index ? 'activeSort' : 'listItem'}
              onClick={() => {
                onClickSortMenuItem(index)
              }}
            >{name}</li>)}
          </ul>
        </div>)}
      </div>
    </>
  )
}

export default SortButton
