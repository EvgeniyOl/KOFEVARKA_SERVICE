import axios from 'axios';
import { useState } from 'react';
import { Alert, Button, Form, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { clearItems } from '../../Redux/Slices/basketSlice';
import { getApplication } from '../../utils/getApplicationData';

const BasketModalForm: React.FC = () => {
  const dispatch = useDispatch();
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showDangerAlert, setShowDangerAlert] = useState(false);

  const {
    register, //набор св-в
    formState: { errors },
    handleSubmit, //обертка
    reset, //сброс после отправки
  } = useForm();

  const onSubmit = (data: any) => {
    const telegramToken = process.env.REACT_APP_TOKEN;
    const CHAT_ID = '-707751403';
    const URL_API = `https://api.telegram.org/bot${telegramToken}/sendMessage`;

    let message = `<b>Заявка с сайта!</b>\n`;
    const { itemData, totalPriceData } = getApplication();
    message += JSON.stringify({ itemData, totalPriceData, data }, null, '\t');
    if (itemData.length > 0) {
      axios.post(URL_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message,
      });
      reset();
      dispatch(clearItems());
      window.localStorage.clear();
      setShowSuccessAlert(!showSuccessAlert);
    } else {
      setShowDangerAlert(!showDangerAlert);
    }
  };

  return (
    <>
      <Modal.Header closeButton />
      <Modal.Title className="modal__tittle">Ваш заказ</Modal.Title>
      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group>
            <Form.Label>Ваше имя</Form.Label>
            <Form.Control
              placeholder="Дмитрий"
              {...register('Имя', {
                required: 'Поле обязательно к заполнению!',
                minLength: {
                  value: 2,
                  message: 'Минимум 2 символа!',
                },
              })}
            />
          </Form.Group>
          <p className="errors">{errors?.Имя?.message}</p>
          <Form.Group>
            <Form.Label>Номер телефона</Form.Label>
            <Form.Control
              placeholder="+7913xxxxxxx"
              {...register('PhoneNumber', {
                required: 'Поле обязательно к заполнению!',
                minLength: {
                  value: 11,
                  message: 'Минимум 11 символов!',
                },
                maxLength: {
                  value: 12,
                  message: 'Максимум 12 символов!',
                },
              })}
            />
          </Form.Group>
          <p className="errors">{errors?.PhoneNumber?.message}</p>
          {showSuccessAlert && (
            <Alert
              className="mt-3"
              id="successForm"
              key={'success'}
              variant={'success'}
            >
              Ваша заявка принята, ожидайте звонка.
            </Alert>
          )}
          {showDangerAlert && (
            <Alert
              className="mt-3"
              id="dangerForm"
              key={'danger'}
              variant={'danger'}
            >
              В корзине ничего нет!
            </Alert>
          )}
          <Button type="submit" variant="outline-success" className="mt-4">
            Отправить заявку
          </Button>{' '}
        </Form>
      </Modal.Body>
    </>
  );
};

export default BasketModalForm;
