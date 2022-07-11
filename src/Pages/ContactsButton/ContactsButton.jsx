import { useState } from 'react';
import PhoneNumber from './../../Assets/img/telephone-call.png';
import WatsUp from './../../Assets/img/whatsapp (1).png';
import Telega from './../../Assets/img/telegram.png';
import { CSSTransition } from 'react-transition-group';
import './ContactsButton.css';
import { motion } from 'framer-motion';

const ContactsButton = () => {
  const [showContacts, setShowContacts] = useState(false);
  return (
    <>
      <div>
        <a
          onClick={() => setShowContacts(!showContacts)}
          type="button"
          className="button"
        >
          <span className="button-linetop"></span>
          <span className="button-lineright"></span>
          <span className="button-linebottom"></span>
          <span className="button-lineleft"></span>
          Как с нами связаться?
        </a>
      </div>
      <CSSTransition in={showContacts} classNames="node" unmountOnExit>
        <div>
          <div className="show-contacts">
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
      </CSSTransition>
    </>
  );
};

export default ContactsButton;
