import React, { useState } from 'react';
import PhoneNumber from './../../Assets/telephone-call.png';
import WatsUp from './../../Assets/whatsapp (1).png';
import Telega from './../../Assets/telegram.png';
import { CSSTransition } from 'react-transition-group';
import './ContactsButton.css';
import { motion } from 'framer-motion';

const ContactsButton = (props) => {
  const [showContacts, setShowContacts] = useState(false);
  return (
    <>
      <div className='block1ZipButton'>
        <a
          onClick={() => setShowContacts(!showContacts)}
          type="button"
          className='button'
        >
          <span className='button_linetop'></span>
          <span className='button_lineright'></span>
          <span className='button_linebottom'></span>
          <span className='button_lineleft'></span>
          Как с нами связаться?
        </a>
      </div>
      <CSSTransition in={showContacts} classNames="node" unmountOnExit>
        <div>
          <div className='showContacts'>
            <ul className='ulshowContacts'>
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
            </ul>
          </div>
        </div>
      </CSSTransition>
    </>
  );
};

export default ContactsButton;
