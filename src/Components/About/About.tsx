import MapYandex from '../Map/Map';
import './About.css';
import PhoneNumber from './../../assets/img/telephone-call.png';
import WatsUp from './../../assets/img/whatsapp (1).png';
import Telega from './../../assets/img/telegram.png';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="container-about">
      <div className="container-fluid">
        <div className="row d-flex p-0 m-0 justify-content-center">
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 pt-4 text-center justify-content-center p-0 border border-info">
            <h5>Адрес:</h5>
            <p>Омск, улица Декабристов, 116/1, 644046</p>
            <h5>Телефон:</h5>
            <p>8 (903) 927-13-76</p>
            <div className="about-contacts">
              <ul className="ul-show-contacts">
                <motion.li
                  className="show-contacts-telega"
                  whileHover={{ scale: 1.2 }}
                >
                  <a href="https://t.me/kofevarkaservice">
                    <img className="icon" src={Telega} alt="Telega" />
                  </a>
                </motion.li>

                <motion.li
                  className="show-contacts-watsup"
                  whileHover={{ scale: 1.2 }}
                >
                  <a href="https://api.whatsapp.com/send?phone=79039271376">
                    <img className="icon" src={WatsUp} alt="WatsUp" />
                  </a>
                </motion.li>

                <motion.li
                  className="show-contacts-phone"
                  whileHover={{ scale: 1.2 }}
                >
                  <a href="tel:+79039271376">
                    <img className="icon" src={PhoneNumber} alt="PhoneNumber" />
                  </a>
                </motion.li>
              </ul>
            </div>
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
      <div className="map">
        <MapYandex />
      </div>
    </div>
  );
};

export default About;
