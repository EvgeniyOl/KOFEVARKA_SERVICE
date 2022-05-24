import React from 'react';
import { Card } from 'react-bootstrap';
import s from './Partners.module.css';
import saeco from './../../Assets/saeco1.webp';
import etna from './../../Assets/etna.jpeg';

const Partners = (props) => {
  return (
    <div className={s.container}>
      <div className={s.info}>
        <span className={s.tittle}>Основные услуги нашей компании:</span>
        <hr />
        <p>
          Ремонт и обслуживание бытового и профессионального кофейного
          оборудования.
        </p>
        <p>Большой ассортимент кофе, чая, эксклюзивного варенья, сиропов.</p>
        <p>Формируем подарки на ваш вкус и любой бюджет.</p>
        <p>
          В продаже имеется профессиональная химия для кофейного оборудования.
        </p>

        <span className={s.tittleDiller}>Являемся официальными дилерами</span>
        <div className="container-fluid">
          <div class="row d-flex">
            <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 mt-4 d-flex justify-content-center">
              <Card className="bg-dark" style={{ width: '16rem' }}>
                <Card.Title className="text-center text-light">
                  Saeco
                </Card.Title>
                <Card.Img variant="top" src={saeco} alt="..." />
                <Card.Body>
                  <div className={s.cardTextWrapper}>
                    <Card.Text className="text-light text-center">
                      Автоматические эспрессо-кофемашины Saeco обеспечивают
                      приготовление превосходного кофе и безграничные
                      возможности выбора.
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 mt-4 d-flex justify-content-center">
              <Card className="bg-dark" style={{ width: '16rem' }}>
                <Card.Title className="text-center text-light">
                  Кофе 'Этна'
                </Card.Title>
                <Card.Img variant="top" src={etna} alt="..." />
                <Card.Body>
                  <div className={s.cardTextWrapper}>
                    <Card.Text className="text-light text-center">
                      Наши давние партнеры - обжарочная компания из Тюмени.
                      <br />
                      Большой выбор кофе, всегда свежая обжарка!
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
