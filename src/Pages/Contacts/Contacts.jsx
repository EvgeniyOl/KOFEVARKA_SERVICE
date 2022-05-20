import React from 'react';
import s from './Contacts.module.css';
import saeco from './../../Assets/saeco1.webp';

const Contacts = (props) => {
  return (
    <div className={s.container}>
      <h1>Contacts Page</h1>
      <card className={s.card}>
        <p className={s.cardTittle}>Saeco</p>
        <img className={s.cardImg} src={saeco} alt="" />
        <p className={s.cardBody}>
          Автоматические эспрессо-кофемашины Saeco обеспечивают приготовление
          превосходного кофе и безграничные возможности выбора.
        </p>
      </card>
    </div>
  );
};

export default Contacts;
