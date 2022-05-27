import React from 'react';
import './Shop.css';
import { Card } from 'react-bootstrap';
import saeco from './../../Assets/saeco1.webp';
import by from './../../Assets/by2.jpeg';
import him from './../../Assets/him.jpeg';
import kofe from './../../Assets/3in1.webp';
import shishki from './../../Assets/shishki.jpeg';
import nabor from './../../Assets/nabor.jpeg';

const Shop = (props) => {
  return (
    <>
      <div className='shopBlock'>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="shopHeader container">
                <a href="">Новые Кофемашины</a>
                <a href="">Б/У Кофемашины</a>
                <a href="">Кофе</a>
                <a href="">Химия</a>
                <a href="">Подарочные наборы</a>
              </div>

              {/* <div className="row justify-content-center">
                <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 mt-4 d-flex justify-content-center">
                  <card className="cardMain" style={{ width: '16rem' }}>
                    <Card.Title className="text-center tittle p-1">
                      Новые кофемашины
                    </Card.Title>
                    <Card.Img
                      className='cardImg'
                      variant="top"
                      src={saeco}
                      alt="..."
                    />
                    <Card.Body>
                      <div className='cardTextWrapper'>
                        <Card.Text className="text-center">
                          Мы являемся официальными дилерами Saeco ...
                        </Card.Text>
                      </div>
                    </Card.Body>
                  </card>
                </div>

                <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 mt-4 d-flex justify-content-center">
                  <card className="cardMain" style={{ width: '16rem' }}>
                    <Card.Title className="text-center p-1">
                      Б/У кофемашины
                    </Card.Title>
                    <Card.Img
                      className='cardImg'
                      variant="top"
                      src={by}
                      alt="..."
                    />
                    <Card.Body>
                      <div className='cardTextWrapper'>
                        <Card.Text className="text-center">
                          Куплю дешево!
                          <br /> Продам дорого!
                        </Card.Text>
                      </div>
                    </Card.Body>
                  </card>
                </div>

                <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 mt-4 d-flex justify-content-center">
                  <card className="cardMain" style={{ width: '16rem' }}>
                    <Card.Title className="text-center p-1">
                      Профессиональная химия
                    </Card.Title>
                    <Card.Img
                      className='cardImg'
                      variant="top"
                      src={him}
                      alt="..."
                    />
                    <Card.Body>
                      <div className='cardTextWrapper'>
                        <Card.Text className="text-center">
                          Уничтожает 147% бактерий!
                        </Card.Text>
                      </div>
                    </Card.Body>
                  </card>
                </div>

                <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 mt-4 d-flex justify-content-center">
                  <card className="cardMain" style={{ width: '16rem' }}>
                    <Card.Title className="text-center p-1">
                      Все что можно заварить
                    </Card.Title>
                    <Card.Img
                      className='cardImg'
                      variant="top"
                      src={kofe}
                      alt="..."
                    />
                    <Card.Body>
                      <div className='cardTextWrapper'>
                        <Card.Text className="text-center">
                          Лучший 3 в 1 в городе!
                        </Card.Text>
                      </div>
                    </Card.Body>
                  </card>
                </div>

                <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 mt-4 d-flex justify-content-center">
                  <card className="cardMain" style={{ width: '16rem' }}>
                    <Card.Title className="text-center p-1">
                      Свежие шишки!
                    </Card.Title>
                    <Card.Img
                      className='cardImg'
                      variant="top"
                      src={shishki}
                      alt="..."
                    />
                    <Card.Body>
                      <div className='cardTextWrapper'>
                        <Card.Text className="text-center">
                          Не эти, другие...
                        </Card.Text>
                      </div>
                    </Card.Body>
                  </card>
                </div>

                <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 mt-4 d-flex justify-content-center">
                  <card className="cardMain" style={{ width: '16rem' }}>
                    <Card.Title className="text-center p-1">
                      Подарочные наборы
                    </Card.Title>
                    <Card.Img
                      className='cardImg'
                      variant="top"
                      src={nabor}
                      alt="..."
                    />
                    <Card.Body>
                      <div className='cardTextWrapper'>
                        <Card.Text className="text-center">
                          Не знаешь что подарить?
                          <br /> Купи набор!
                        </Card.Text>
                      </div>
                    </Card.Body>
                  </card>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
