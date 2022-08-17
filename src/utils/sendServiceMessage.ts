import { FormValues } from '../components/ServiceForm/ServiceForm';
import axios from 'axios';

const sendServiceMessage = (data: FormValues) => {
  const TG_TOKEN = process.env.REACT_APP_TOKEN;
  const CHAT_ID = process.env.REACT_APP_CHAT;
  const URL_API = `https://api.telegram.org/bot${TG_TOKEN}/sendMessage`;

  let message = `<b>Заявка с сайта!</b>\n`;
  message += JSON.stringify(data, null, '\t');
  axios
    .post(URL_API, {
      chat_id: CHAT_ID,
      parse_mode: 'html',
      text: message,
    })
    .catch((error) => {
      console.log(error);
    });
};

export default sendServiceMessage;
