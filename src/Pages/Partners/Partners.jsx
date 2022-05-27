import React from 'react';
import './Partners.css';
import saecoLogo from './../../Assets/saeco.svg';
import delongi from './../../Assets/delongiLogo.jpeg';
import jira from './../../Assets/jiraLogo.webp';
import marzocco from './../../Assets/marzoccoLogo.jpeg';
import wmf from './../../Assets/wmfLogo.png';
import nivona from './../../Assets/nivona.png';
import { motion } from 'framer-motion';
import gaggia from './../../Assets/gaggiaLogo.jpeg';
import franke from './../../Assets/frankeLogo.png';
import bork from './../../Assets/borkLogo.jpeg';

const Partners = (props) => {
  return (
    <div className="containerPartners">
      <div className="container tittlePartners">
        <div className="row p-5">
          <div className="col">
            <h3>Наши действующие партнеры</h3>
          </div>
        </div>
        <div className="row line1">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="partnerCard">
              <motion.img
                whileHover={{ scale: 2 }}
                src={saecoLogo}
                alt="saecoLogo"
              />
              <motion.img
                whileHover={{ scale: 2 }}
                src={delongi}
                alt="delongi"
              />
              <motion.img whileHover={{ scale: 2 }} src={jira} alt="jira" />
            </div>
            <hr />
          </div>
        </div>

        <div className="row line2">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="partnerCard">
              <motion.img
                whileHover={{ scale: 2 }}
                src={marzocco}
                alt="saecoLogo"
              />
              <motion.img whileHover={{ scale: 2 }} src={wmf} alt="delongi" />
              <motion.img whileHover={{ scale: 2 }} src={nivona} alt="jira" />
            </div>
            <hr />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="partnerCard">
              <motion.img
                whileHover={{ scale: 2 }}
                src={gaggia}
                alt="saecoLogo"
              />
              <motion.img
                whileHover={{ scale: 2 }}
                src={franke}
                alt="delongi"
              />
              <motion.img whileHover={{ scale: 2 }} src={bork} alt="jira" />
            </div>
            <hr />
          </div>
        </div>
      </div>

      <div className="container-fluid p-0 m-0">
        <div className="row p-0 m-0">
          <div className="col p-0 m-0">

          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
