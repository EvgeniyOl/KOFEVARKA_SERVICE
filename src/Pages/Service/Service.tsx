import { useState } from 'react';
import './Service.css';
import { motion } from 'framer-motion';
import { Button, ListGroup, Modal } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
import ModalForm from './Form/Form';
import axios from 'axios';

const cardAnimation = {
  hiddenBottom: {
    y: 100,
    opacity: 0,
  },
  visibleBottom: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.5 },
  }),
};

const Service: React.FC = () => {
  const [showInfo1, setShowInfo1] = useState(false);
  const [showInfo2, setShowInfo2] = useState(false);
  const [showInfo3, setShowInfo3] = useState(false);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="container-fluid service-container">
        <div className="row p-0 d-flex justify-content-center">
          <p className="service-tittle">Занимаемся ремонтом любой сложности</p>
          <div className="d-flex col-lg-4 justify-content-center">
            <a onClick={handleShow} type="button" className="service__button">
              <span className="service-button-linetop"></span>
              <span className="service-button-lineright"></span>
              <span className="service-button-linebottom"></span>
              <span className="service-button-lineleft"></span>
              Оставить заявку
            </a>
          </div>
        </div>
        <div className="row p-0">
          <Modal show={show} onHide={handleClose}>
            <ModalForm />
          </Modal>

          <div className="col-lg-6 col-md-12 col-sm-12 p-0">
            <div className="cards-container">
              <motion.div
                initial="hiddenBottom"
                whileInView="visibleBottom"
                viewport={{ amount: 0.5 }}
                className="cards-block"
              >
                <motion.div
                  whileHover={{ scale: 1.05, boxShadow: '0 0 30px #10caf0' }}
                  variants={cardAnimation}
                  custom={1}
                  className="card-price"
                >
                  <div className="card-price-tittle">
                    Техническое Обслуживание
                  </div>
                  <hr />
                  <div className="card-price-price">2700 p.</div>
                  <hr />
                  <div className="card-price-body">
                    Постоянная акция:
                    <br />
                    Регулярно покупая у нас кофе - обслуживание кофемашины
                    бесплатное
                  </div>
                  <div className="card-info">
                    <Button
                      onClick={() => setShowInfo1(!showInfo1)}
                      variant="outline-success"
                    >
                      Подробнее
                    </Button>{' '}
                  </div>
                  <CSSTransition
                    timeout={200}
                    in={showInfo1}
                    classNames="showInfo"
                    unmountOnExit
                  >
                    <ListGroup className="show-info-list text-center">
                      <ListGroup.Item variant="success">
                        Чистка основных блоков
                      </ListGroup.Item>
                      <ListGroup.Item variant="success">
                        Декальцинация бойлера
                      </ListGroup.Item>
                      <ListGroup.Item variant="success">
                        Смазка механизмов
                      </ListGroup.Item>
                    </ListGroup>
                  </CSSTransition>
                </motion.div>
              </motion.div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12 p-0">
            <div className="cards-container">
              <motion.div
                initial="hiddenBottom"
                whileInView="visibleBottom"
                viewport={{ amount: 0.5 }}
                className="cards-block"
              >
                <motion.div
                  whileHover={{ scale: 1.05, boxShadow: '0 0 30px #10caf0' }}
                  variants={cardAnimation}
                  custom={1.5}
                  className="card-price"
                >
                  <div className="card-price-tittle">Не работает кофемолка</div>
                  <hr />
                  <div className="card-price-price">от 1500 p.</div>
                  <hr />
                  <div className="card-price-body">
                    Диагностика + ремонт или замена
                  </div>
                  <div className="card-info">
                    <Button
                      onClick={() => setShowInfo2(!showInfo2)}
                      variant="outline-danger"
                    >
                      Возможные неисправности
                    </Button>{' '}
                  </div>
                  <CSSTransition
                    timeout={200}
                    in={showInfo2}
                    classNames="showInfo"
                    unmountOnExit
                  >
                    <ListGroup className="show-info-list text-center">
                      <ListGroup.Item variant="danger">
                        Клин кофемолки
                      </ListGroup.Item>
                      <ListGroup.Item variant="danger">
                        Затупились жернова
                      </ListGroup.Item>
                      <ListGroup.Item variant="danger">
                        Сгорел мотор
                      </ListGroup.Item>
                    </ListGroup>
                  </CSSTransition>
                </motion.div>
              </motion.div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12 p-0">
            <div className="cards-container">
              <motion.div
                initial="hiddenBottom"
                whileInView="visibleBottom"
                viewport={{ amount: 0.5 }}
                className="cards-block"
              >
                <motion.div
                  whileHover={{ scale: 1.05, boxShadow: '0 0 30px #10caf0' }}
                  variants={cardAnimation}
                  custom={2}
                  className="card-price"
                >
                  <div className="card-price-tittle">Устранение течи</div>
                  <hr />
                  <div className="card-price-price">от 500 p.</div>
                  <hr />
                  <div className="card-price-body">Диагностика + Ремонт</div>
                  <div className="card-info">
                    <Button
                      onClick={() => setShowInfo3(!showInfo3)}
                      variant="outline-danger"
                    >
                      Возможные неисправности
                    </Button>{' '}
                  </div>
                  <CSSTransition
                    timeout={200}
                    in={showInfo3}
                    classNames="showInfo"
                    unmountOnExit
                  >
                    <ListGroup className="show-info-list text-center">
                      <ListGroup.Item variant="danger">
                        Износ уплотнителей
                      </ListGroup.Item>
                      <ListGroup.Item variant="danger">
                        треснула трубка
                      </ListGroup.Item>
                      <ListGroup.Item variant="danger">
                        Лопнул бойлер
                      </ListGroup.Item>
                    </ListGroup>
                  </CSSTransition>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
