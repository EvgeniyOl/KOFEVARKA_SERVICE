import { Outlet } from 'react-router-dom';
import './Layout.css';
import instagram from './../../assets/img/instagram.png';
import WatsUp from './../../assets/img/whatsapp (1).png';
import Vk from './../../assets/img/vk.png';
import PhoneNumber from './../../assets/img/telephone-call.png';
import Youtube from './../../assets/img/youtube.png';
import Telega from './../../assets/img/telegram.png';
import { motion } from 'framer-motion';
import NavBar from '../NavBar/NavBar';

const Layout: React.FC = () => {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="body">
        <Outlet />
      </div>

      <footer className="footer-container">
        <ul className="ul-footer">
          <motion.li
            className="li-footer-instagram"
            whileHover={{ scale: 1.2 }}
          >
            <a href="https://www.instagram.com/kofevarka_service/">
              <img className="icon" src={instagram} alt="instagram" />
            </a>
          </motion.li>
          <motion.li className="li-footer-vk" whileHover={{ scale: 1.2 }}>
            <a href="https://vk.com/kofevarkaservise">
              <img className="icon" src={Vk} alt="Vk" />
            </a>
          </motion.li>
          <motion.li className="li-footer-watsup" whileHover={{ scale: 1.2 }}>
            <a href="https://api.whatsapp.com/send?phone=79039271376">
              <img className="icon" src={WatsUp} alt="WatsUp" />
            </a>
          </motion.li>
          <motion.li className="li-footer-telega" whileHover={{ scale: 1.2 }}>
            <a href="https://t.me/kofevarkaservice">
              <img className="icon" src={Telega} alt="Telega" />
            </a>
          </motion.li>
          <motion.li className="li-footer-youtube" whileHover={{ scale: 1.2 }}>
            <a href="https://www.youtube.com/channel/UCy4-IIw4qW8K8fVzOlRkaBQ/videos">
              <img className="icon" src={Youtube} alt="Youtube" />
            </a>
          </motion.li>
          <motion.li
            className="li-footer-phonenumber"
            whileHover={{ scale: 1.2 }}
          >
            <a href="tel:+79039271376">
              <img className="icon" src={PhoneNumber} alt="PhoneNumber" />
            </a>
          </motion.li>
        </ul>
        <hr />
        <a href="/policy">Политикa обработки персональных данных</a>
        <hr />
        <a href="https://github.com/EvgeniyOl">
          © 2022 Created by Evgeniy Olyanskii
        </a>
      </footer>
    </>
  );
};

export default Layout;
