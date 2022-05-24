import React from 'react';
import s from './About.module.css';
import MapYandex from './Map/Map';

const About = (props) => {
  return (
    <div className={s.container}>
      <div className="container-fluid">
        <div className="row d-flex p-0 m-0 justify-content-center">
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 pt-4 text-center justify-content-center p-0 border border-info">
            <h5>Адрес:</h5>
            <p>Омск, ул. Декабристов, 116/1, 644046</p>
            <h5>Телефон:</h5>
            <p>8 (903) 927-13-76</p>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 pt-4 justify-content-center p-0 border border-info border-left-0">
            <div className="row d-flex justify-content-center text-center p-0">
              <div className="col p-0">
                <h3>Режим работы</h3>
              </div>
            </div>
            <div className="row justify-content-center p-0">
              <div className="col d-flex justify-content-center text-center p-0">
                <p className="me-3">Понедельник</p>
                <p>10:00 - 19:00</p>
              </div>
            </div>
            <div className="row justify-content-center p-0">
              <div className="col d-flex justify-content-center text-center p-0">
                <p className="me-3">Вторник</p>
                <p>10:00 - 19:00</p>
              </div>
            </div>
            <div className="row justify-content-center p-0">
              <div className="col d-flex justify-content-center text-center p-0">
                <p className="me-3">Среда</p>
                <p>10:00 - 19:00</p>
              </div>
            </div>
            <div className="row justify-content-center p-0">
              <div className="col d-flex justify-content-center text-center p-0">
                <p className="me-3">Четверг</p>
                <p>10:00 - 19:00</p>
              </div>
            </div>
            <div className="row justify-content-center p-0">
              <div className="col d-flex justify-content-center text-center p-0">
                <p className="me-3">Пятница</p>
                <p>10:00 - 19:00</p>
              </div>
            </div>
            <div className="row justify-content-center p-0">
              <div className="col d-flex justify-content-center text-center p-0">
                <p className="me-3">Суббота</p>
                <p>10:00 - 17:00</p>
              </div>
            </div>
            <div className="row justify-content-center p-0">
              <div className="col d-flex justify-content-center text-center p-0">
                <p className="me-3">Воскресенье</p>
                <p>Выходной</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-dark text-light">
        <div className="row">
          <div className="col p-2">
            <h3>Отзывы о нашей компании</h3>
          </div>
        </div>
      </div>
      <div className={s.map}>
        <MapYandex />
      </div>
    </div>
  );
};

export default About;
