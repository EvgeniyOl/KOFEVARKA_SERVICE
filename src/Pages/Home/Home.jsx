import React from 'react';
import './Home.css';
import { Carousel } from 'react-bootstrap';
import slide1 from './../../Assets/slide1.jpg';
import slide2 from './../../Assets/roster.jpeg';
import slide3 from './../../Assets/slide2.jpeg';
import slide4 from './../../Assets/slide2.webp';
import ContactsButton from '../ContactsButton/ContactsButton';
import { motion } from 'framer-motion';
import About from '../About/About';
import Partners from '../Partners/Partners';
import Service from '../Service/Service';

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
      <div className="carouselMedia">
        <Carousel className="carousel">
          <Carousel.Item className="carouselItem">
            <img className="d-block w-100" src={slide1} alt="First slide" />
            <Carousel.Caption className="caption">
              <p className="p">
                Регулярно заказывайте у нас кофе и будьте спокойны за свою
                кофемашину
                <br /> Техническое Обслуживание будет Бесплатным!
              </p>
              <motion.p whileHover={{ scale: 1.5 }}>
                <a href="/Shop">Перейти в магазин</a>
              </motion.p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carouselItem">
            <img className="d-block w-100" src={slide2} alt="First slide" />
            <Carousel.Caption className="caption">
              <p className="p">Болшой выбор кофе от разных обжарщиков</p>
              <motion.p whileHover={{ scale: 1.5 }}>
                <a href="#">Узнать подробности</a>
              </motion.p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carouselItem">
            <img className="d-block w-100" src={slide3} alt="First slide" />
            <Carousel.Caption className="caption">
              <p className="p">Болшой выбор кофе от разных обжарщиков</p>
              <motion.p whileHover={{ scale: 1.5 }}>
                <a href="#">Узнать подробности</a>
              </motion.p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carouselItem">
            <img className="d-block w-100" src={slide4} alt="First slide" />
            <Carousel.Caption className="caption">
              <p className="p">Болшой выбор кофе от разных обжарщиков</p>
              <motion.p whileHover={{ scale: 1.5 }}>
                <a href="#">Узнать подробности</a>
              </motion.p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="aboutBlock">
        <About />
      </div>

      <div className="block1">
        <motion.div
          className="block1Tittle"
          initial="hiddenLeft"
          whileInView="visibleLeft"
          viewport={{ amount: 1, once: false }}
        >
          <motion.p variants={textAnimation}>
            Занимаемся кофейным оборудованием
            <br /> уже <span>более 10 лет!</span>
          </motion.p>
        </motion.div>
        <motion.div
          className="block1Ul"
          initial="hiddenBottom"
          whileInView="visibleBottom"
          viewport={{ amount: 0.5, once: false }}
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
          viewport={{ amount: 0.2, once: false }}
          className="block1Zip"
        >
          <motion.p variants={textAnimation} custom={2} className="block1ZipP1">
            Используем оригинальные запчасти
          </motion.p>
          <motion.p variants={textAnimation} custom={3} className="block1ZipP2">
            Полировка хрома
          </motion.p>
          <motion.p variants={textAnimation} custom={4} className="block1ZipP3">
            Покраска кофемашины под ваш интерьер
          </motion.p>
        </motion.div>
        <div className="blockButton">
          <ContactsButton />
        </div>
      </div>
      <div className="service">
        <Service />
      </div>
      <div className="partners">
        <Partners />
      </div>
    </>
  );
};

export default Home;
