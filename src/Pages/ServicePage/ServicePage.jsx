import React, { useState } from 'react';
import { Accordion, Modal } from 'react-bootstrap';
import ModalForm from '../Service/Form/Form';
import './ServicePage.css';
import { motion } from 'framer-motion';
import PhoneNumber from './../../Assets/img/telephone-call.png';
import WatsUp from './../../Assets/img/whatsapp (1).png';
import Telega from './../../Assets/img/telegram.png';

const ServicePage = (props) => {
  const [showServiceModal, setshowServiceModal] = useState(false);

  const handleCloseServiceModal = () => setshowServiceModal(false);
  const handleShowServiceModal = () => setshowServiceModal(true);

  const serviceButtonAnimation = {
    hiddenRight: {
      x: 300,
      opacity: 0,
    },
    hiddenBottom: {
      y: 200,
      opacity: 0,
    },
    visibleRight: (custom) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.5 },
    }),
    visibleBottom: (custom) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    })
  };

  return (
    <div className="servicePageContainer">
      <div className="container">
        <div className="row">
          <div className="col">
            <Accordion className="accordion">
              <Accordion.Item className="accItem" eventKey="0">
                <Accordion.Header className="accHeader" eventKey="0">
                  <span>+</span> Основные услуги компании
                </Accordion.Header>
                <Accordion.Body>
                  <div className="container accordionBody">
                    <div className="row col justify-content-start p-0 m-0">
                      <div className="col-12 p-0 m-0">
                        <Accordion className="p-0" alwaysOpen>
                          <Accordion.Item className="accItem" eventKey="0">
                            <Accordion.Header
                              className="accHeader"
                              eventKey="0"
                            >
                              <span>+</span>Ремонт оборудования
                            </Accordion.Header>
                            <Accordion.Body>
                              <div className="container accordionBody">
                                <div className="row col justify-content-start">
                                  <div className="col-12">
                                    <ul>
                                      <li>Бытовые кофемашины и кофеварки</li>
                                      <li>
                                        Профессиональные кофемашины, кофемолки
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                        <Accordion className="p-0" alwaysOpen>
                          <Accordion.Item className="accItem" eventKey="1">
                            <Accordion.Header
                              className="accHeader"
                              eventKey="1"
                            >
                              <span>+</span>Техническое обслуживание
                            </Accordion.Header>
                            <Accordion.Body>
                              <div className="container accordionBody">
                                <div className="row col justify-content-start">
                                  <div className="col-12">
                                    <ul className="accordionList">
                                      <li>Декальцинация гидросистемы</li>
                                      <li>Разбор, чистка основных блоков</li>
                                      <li>Смазка механизмов</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                        <Accordion className="p-0" alwaysOpen>
                          <Accordion.Item className="accItem" eventKey="2">
                            <Accordion.Header
                              className="accHeader"
                              eventKey="2"
                            >
                              <span>+</span>Восстановление внешнего вида
                            </Accordion.Header>
                            <Accordion.Body>
                              <div className="container accordionBody">
                                <div className="row col justify-content-start">
                                  <div className="col-12">
                                    <ul>
                                      <li>Химчистка</li>
                                      <li>Полировка хрома</li>
                                      <li>
                                        Замена сломаных пластиковых деталей
                                      </li>
                                      <li>Покраска корпуса</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                      </div>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 mt-5">
            <p>
              Привозите свою кофемашину в наш сервисный центр, или оставьте
              заявку и мы сами ее заберем.
            </p>
            <p>
              Мастера со стажем более 10 лет проведут бесплатную диагностику.
            </p>
            <p>Подскажем лучший вариант решения проблемы</p>
            <hr />
            <div className="serviceModal">
              <div className="row">
                <motion.div
                  className="d-flex col-lg-4 col-sm-12 justify-content-center"
                  variants={serviceButtonAnimation}
                  initial="hiddenRight"
                  animate="visibleRight"
                  custom={3}
                >
                  <a
                    onClick={handleShowServiceModal}
                    type="button"
                    className="service__button text-center justify-content-center"
                  >
                    <span className="service__button__linetop"></span>
                    <span className="service__button__lineright"></span>
                    <span className="service__button__linebottom"></span>
                    <span className="service__button__lineleft"></span>
                    Оставить заявку
                  </a>
                </motion.div>
                <div className='col-lg-4 col-sm-12 mt-2 justify-content-center text-center'>
                  <p>ул. Декабристов, 116/1</p>
                  <p>8 (903) 927-13-76</p>
                </div>
                <motion.ul className='col-lg-4 col-sm-12 justify-content-center ulshowContacts'
                  variants={serviceButtonAnimation}
                  initial="hiddenBottom"
                  animate="visibleBottom"
                  custom={3}>
                  <motion.li className='showContactsTelega' whileHover={{ scale: 1.2, }}>
                    <a href="https://t.me/kofevarkaservice">
                      <img className='icon' src={Telega} alt="Telega" />
                    </a>
                  </motion.li>

                  <motion.li className='showContactsWatsup' whileHover={{ scale: 1.2, }}>
                    <a href="https://api.whatsapp.com/send?phone=79039271376">
                      <img className='icon' src={WatsUp} alt="WatsUp" />
                    </a>
                  </motion.li>

                  <motion.li className='showContactsPhone' whileHover={{ scale: 1.2, }}>
                    <a href="tel:+79039271376">
                      <img className='icon' src={PhoneNumber} alt="PhoneNumber" />
                    </a>
                  </motion.li>
                </motion.ul>
                <Modal show={showServiceModal} onHide={handleCloseServiceModal}>
                  <ModalForm />
                </Modal>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
