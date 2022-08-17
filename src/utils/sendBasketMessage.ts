import { BasketFormValues } from './../components/BasketPage/BasketModalForm';
import axios from 'axios';
import { getApplication } from './getApplicationData';

const sendBasketMessage = (data: BasketFormValues) => {
  const TG_TOKEN = process.env.REACT_APP_TOKEN;
  const CHAT_ID = process.env.REACT_APP_CHAT;
  const URL_API = `https://api.telegram.org/bot${TG_TOKEN}/sendMessage`;

  let message = `<b>Заявка с сайта!</b>\n`;
  const { itemData, totalPriceData } = getApplication();
  message += JSON.stringify({ itemData, totalPriceData, data }, null, '\t');
  axios
    .post(URL_API, {
      chat_id: CHAT_ID,
      parse_mode: 'html',
      text: message,
    })
    .catch((err) => {
      console.log(err);
    });
};

export default sendBasketMessage;
