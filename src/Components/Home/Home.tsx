import React from 'react';
import './Home.css';
import ContactsButton from '../ContactsButton/ContactsButton';
import { motion } from 'framer-motion';
import About from '../About/About';
import Partners from '../Partners/Partners';
import Service from '../HomeServiceBlock/HomeServiceBlock';
import Carouselka from '../Carouselka/Carouselka';

const textAnimation = {
  hiddenLeft: {
    x: -100,
    opacity: 0,
  },
  visibleLeft: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.5 },
  }),
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

const Home: React.FC = () => {
  return (
    <>
      <div className="carouselka-container">
        <Carouselka />
      </div>

      <div className="about-block">
        <About />
      </div>

      <div className="block1">
        <motion.div
          className="block1-tittle"
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
          className="block1-ul"
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
          className="block1-zip"
        >
          <motion.p
            variants={textAnimation}
            custom={2}
            className="block1-zip-p1"
          >
            Используем оригинальные запчасти
          </motion.p>
          <motion.p
            variants={textAnimation}
            custom={3}
            className="block1-zip-p2"
          >
            Полировка хрома
          </motion.p>
          <motion.p
            variants={textAnimation}
            custom={4}
            className="block1-zip-p3"
          >
            Покраска кофемашины под ваш интерьер
          </motion.p>
        </motion.div>
        <div className="block-button">
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
