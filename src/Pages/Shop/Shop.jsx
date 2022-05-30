import React from 'react';
import './Shop.css';
import by from './../../Assets/by2.jpeg';
import him from './../../Assets/him.jpeg';
import kofe from './../../Assets/3in1.webp';
import shishki from './../../Assets/shishki.jpeg';
import nabor from './../../Assets/nabor.jpeg';
import pura from './../../Assets/1_pura.jpeg'
import saeco from './../../Assets/saeco1.webp';
import Categories from './Categories/Categories';
import Basket from './Bascet/Basket';
import ShopCard from './ShopCard/ShopCard.jsx';

const Shop = (props) => {
  return (
    <>
      <div className="shopBlock">
        <div className="container-fluid p-0 m-0">
          <div className="row p-0 m-0">
            <div className="col p-0 m-0">
              <div className="shopHeader container-fluid p-0 m-0">
                <Categories
                  items={[
                    'Новые Кофемашины',
                    'Б/У Кофемашины',
                    'Кофе',
                    'Химия',
                    'Подарочные наборы',
                  ]}
                />
                <Basket />
              </div>
              <div className="container-fluid p-0 m-0">
                <div className="row d-flex p-0 m-0">
                  <div className="col-lg-4 col-md-6 col-sm-12 p-0">
                    <ShopCard
                      cardTittle={'Новая кофемашина'}
                      cardName={'Saeco Xelsis'}
                      cardText={'Самая технологичная кофемашина Saeco'}
                      cardImg={saeco}
                      cardPrice={'25.000р.'}
                    />
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 p-0">
                    <ShopCard
                      cardTittle={'Кофемашина Б/У'}
                      cardName={'FRANKE'}
                      cardText={'Pura'}
                      cardImg={pura}
                      cardPrice={'35.000р.'}
                    />
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 p-0">
                    <ShopCard
                      cardTittle={'Новая кофемашина'}
                      cardName={'Saeco'}
                      cardText={'Мы являемся официальными дилерами Saeco ...'}
                      cardImg={saeco}
                      cardPrice={'500р.'}
                    />
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 p-0">
                    <ShopCard
                      cardTittle={'Кофе "Этна"'}
                      cardName={'Премиум'}
                      cardText={'Арабика 90% Робуста 10% Средняя обжарка'}
                      cardImg={kofe}
                      cardPrice={'2.000р.'}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
