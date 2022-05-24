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
              <h1 className="text-center text-dark">Kofevarka Shop</h1>

              <div className="row justify-content-center">
                <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 mt-4 d-flex justify-content-center">
                  <Card className="bg-dark" style={{ width: '16rem' }}>
                    <Card.Title className="text-center text-light tittle p-1">
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
                        <Card.Text className="text-light text-center">
                          Мы являемся официальными дилерами Saeco ...
                        </Card.Text>
                      </div>
                    </Card.Body>
                  </Card>
                </div>

                <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 mt-4 d-flex justify-content-center">
                  <Card className="bg-dark" style={{ width: '16rem' }}>
                    <Card.Title className="text-center text-light p-1">
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
                        <Card.Text className="text-light text-center">
                          Куплю дешево!
                          <br /> Продам дорого!
                        </Card.Text>
                      </div>
                    </Card.Body>
                  </Card>
                </div>

                <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 mt-4 d-flex justify-content-center">
                  <Card className="bg-dark" style={{ width: '16rem' }}>
                    <Card.Title className="text-center text-light p-1">
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
                        <Card.Text className="text-light text-center">
                          Уничтожает 147% бактерий!
                        </Card.Text>
                      </div>
                    </Card.Body>
                  </Card>
                </div>

                <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 mt-4 d-flex justify-content-center">
                  <Card className="bg-dark" style={{ width: '16rem' }}>
                    <Card.Title className="text-center text-light p-1">
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
                        <Card.Text className="text-light text-center">
                          Лучший 3 в 1 в городе!
                        </Card.Text>
                      </div>
                    </Card.Body>
                  </Card>
                </div>

                <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 mt-4 d-flex justify-content-center">
                  <Card className="bg-dark" style={{ width: '16rem' }}>
                    <Card.Title className="text-center text-light p-1">
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
                        <Card.Text className="text-light text-center">
                          Не эти, другие...
                        </Card.Text>
                      </div>
                    </Card.Body>
                  </Card>
                </div>

                <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 mt-4 d-flex justify-content-center">
                  <Card className="bg-dark" style={{ width: '16rem' }}>
                    <Card.Title className="text-center text-light p-1">
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
                        <Card.Text className="text-light text-center">
                          Не знаешь что подарить?
                          <br /> Купи набор!
                        </Card.Text>
                      </div>
                    </Card.Body>
                  </Card>
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
