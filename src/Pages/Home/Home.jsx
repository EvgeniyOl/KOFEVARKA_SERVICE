import React from 'react';
import s from './Home.module.css';
import { Carousel } from 'react-bootstrap';
import slide1 from './../../Assets/slide1.jpg';
import slide2 from './../../Assets/roster.jpeg';
import slide3 from './../../Assets/slide2.jpeg';
import slide4 from './../../Assets/slide2.webp';
import ContactsButton from '../ContactsButton/ContactsButton';
import { motion } from 'framer-motion';

const textAnimation = {
  hiddenLeft: {
    x: -100,
    opacity: 0,
  },
  visibleLeft: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.5 },
  }),
  hiddenBottom: {
    y: 100,
    opacity: 0,
  },
  visibleBottom: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.5 },
  }),
};

const Home = (props) => {
  return (
    <>
      <div>
        <div className={s.carouselMedia}>
          <Carousel className={s.carousel}>
            <Carousel.Item className={s.carouselItem}>
              <img className="d-block w-100" src={slide1} alt="First slide" />
              <Carousel.Caption className={s.caption}>
                <p className={s.p}>
                  Регулярно заказывайте у нас кофе и будьте спокойны за свою
                  кофемашину
                  <br /> Техническое Обслуживание будет Бесплатным!
                </p>
                <p>
                  <a href="#">Узнать подробности</a>
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className={s.carouselItem}>
              <img className="d-block w-100" src={slide2} alt="First slide" />
              <Carousel.Caption className={s.caption}>
                <p className={s.p}>Болшой выбор кофе от разных обжарщиков</p>
                <p>
                  <a href="#">Узнать подробности</a>
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className={s.carouselItem}>
              <img className="d-block w-100" src={slide3} alt="First slide" />
              <Carousel.Caption className={s.caption}>
                <p className={s.p}>Болшой выбор кофе от разных обжарщиков</p>
                <p>
                  <a href="#">Узнать подробности</a>
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className={s.carouselItem}>
              <img className="d-block w-100" src={slide4} alt="First slide" />
              <Carousel.Caption className={s.caption}>
                <p className={s.p}>Болшой выбор кофе от разных обжарщиков</p>
                <p>
                  <a href="#">Узнать подробности</a>
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <div className={s.block1}>
        <motion.div
          className={s.block1Tittle}
          initial="hiddenLeft"
          whileInView="visibleLeft"
          viewport={{ amount: 0.2, once: true }}
        >
          <motion.p variants={textAnimation}>
            Занимаемся кофейным оборудованием
            <br /> уже <span>более 10 лет!</span>
          </motion.p>
        </motion.div>
        <motion.div
          className={s.block1Ul}
          initial="hiddenBottom"
          whileInView="visibleBottom"
          viewport={{ amount: 0.2, once: true }}
        >
          <ul>
            {' '}
            <motion.p variants={textAnimation} custom={1}>
              Будем рады помочь вам
            </motion.p>
            <hr />
            <motion.li variants={textAnimation} custom={2}>
              Отремонтировать вашу кофемашину
            </motion.li>
            <motion.li variants={textAnimation} custom={3}>
              Сделать Техническое Обслуживание
            </motion.li>
            <motion.li variants={textAnimation} custom={4}>
              Подобрать кофе на ваш вкус
            </motion.li>
          </ul>
        </motion.div>
        <motion.div
          initial="hiddenLeft"
          whileInView="visibleLeft"
          viewport={{ amount: 0.2 }}
          className={s.block1Zip}
        >
          <motion.p
            variants={textAnimation}
            custom={2}
            className={s.block1ZipP1}
          >
            Используем оригинальные запчасти
          </motion.p>
          <motion.p
            variants={textAnimation}
            custom={3}
            className={s.block1ZipP2}
          >
            Полировка хрома
          </motion.p>
          <motion.p
            variants={textAnimation}
            custom={4}
            className={s.block1ZipP3}
          >
            Покраска кофемашины под ваш интерьер
          </motion.p>
        </motion.div>
        <div className={s.blockButton}>
          <ContactsButton />
        </div>
      </div>
    </>
  );
};

export default Home;
