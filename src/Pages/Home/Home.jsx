import React from 'react';
import s from './Home.module.css';
import saeco from './../../Assets/saeco1.webp';
import etna from './../../Assets/etna.jpeg';
import { Card } from 'react-bootstrap';

const Home = (props) => {
  return (
    <>
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
          <div class="row d-flex justify-content-center">
            <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 mt-4 d-flex justify-content-center">
              <Card className='' style={{ width: '18rem' }}>
                <Card.Title className="text-center">Saeco</Card.Title>
                <Card.Img variant="top" src={saeco} alt="..." />
                <Card.Body>
                  <div className={s.cardTextWrapper}>
                    <Card.Text className="text-dark text-center">
                      Автоматические эспрессо-кофемашины Saeco обеспечивают
                      приготовление превосходного кофе и безграничные
                      возможности выбора.
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 mt-4 d-flex justify-content-center">
              <Card style={{ width: '18rem' }}>
                <Card.Title className="text-center">Кофе 'Этна'</Card.Title>
                <Card.Img variant="top" src={etna} alt="..." />
                <Card.Body>
                  <div className={s.cardTextWrapper}>
                    <Card.Text className="text-dark text-center">
                      Вкусный кофеек!
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
