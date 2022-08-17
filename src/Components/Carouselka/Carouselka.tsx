import { Carousel } from 'react-bootstrap';
import { motion } from 'framer-motion';
import slide1 from './../../assets/img/slide1.webp';
import slide2 from './../../assets/img/roster.webp';
import slide3 from './../../assets/img/slide2.webp';
import './Carouselka.css';

const Carouselka: React.FC = () => {
  return (
    <div className="carousel-media">
      <Carousel className="carousel">
        <Carousel.Item className="carousel-item">
          <img className="d-block w-100" src={slide1} alt="First slide" />
          <Carousel.Caption className="caption">
            <p className="carousel-text">
              Регулярно заказывайте у нас кофе и будьте спокойны за свою
              кофемашину
              <br /> Техническое Обслуживание будет Бесплатным!
            </p>
            <motion.p whileHover={{ scale: 1.5 }}>
              <a href="/Shop">Перейти в магазин</a>
            </motion.p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img className="d-block w-100" src={slide2} alt="First slide" />
          <Carousel.Caption className="caption">
            <p className="carousel-text">
              Большой выбор кофе от разных обжарщиков
            </p>
            <motion.p whileHover={{ scale: 1.5 }}>
              <a href="/Shop">Заказать кофе</a>
            </motion.p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img className="d-block w-100" src={slide3} alt="First slide" />
          <Carousel.Caption className="caption">
            <p className="carousel-text">
              Можем сами забрать вашу машинку в сервис
            </p>
            <motion.p whileHover={{ scale: 1.5 }}>
              <a href="/Service">Оставить заявку</a>
            </motion.p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carouselka;
