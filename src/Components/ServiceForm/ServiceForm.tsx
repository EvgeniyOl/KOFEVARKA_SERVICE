import axios from 'axios';
import { useState } from 'react';
import { Alert, Button, Form, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './ServiceForm.css';

type FormValues = {
  Имя: string;
  Номер_телефона: string;
  Проблема: string;
  Кофемашина: string;
  Адрес: string;
};

const ServiceForm: React.FC = () => {
  const [showAlert, setShowAlert] = useState(false);

  const {
    register, //набор св-в
    formState: { errors },
    handleSubmit, //обертка
    reset, //сброс после отправки
  } = useForm<FormValues>();

  const onSubmit = (data: any) => {
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
      .then((res) => {
        setShowAlert(!showAlert);
      })
      .catch((error) => {
        console.log(error);
      });
    reset();
  };
  return (
    <>
      <Modal.Header closeButton />
      <Modal.Title className="modal__tittle">Заявка на ремонт</Modal.Title>
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
              {...register('Номер_телефона', {
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
          <p className="errors">{errors?.Номер_телефона?.message}</p>
          <Form.Group className="mt-3">
            <Form.Label>Опишите проблему</Form.Label>
            <Form.Control
              placeholder="Завелись тараканы, хочу почистить"
              as="textarea"
              rows={3}
              {...register('Проблема', {
                required: 'Поле обязательно к заполнению!',
                minLength: {
                  value: 2,
                  message: 'Минимум 2 символа!',
                },
              })}
            />
          </Form.Group>
          <p className="errors">{errors?.Проблема?.message}</p>
          <Form.Group>
            <Form.Label>Название, модель кофемашины</Form.Label>
            <Form.Control
              placeholder="самовар-3000"
              {...register('Кофемашина', {
                required: true,
              })}
            />
          </Form.Group>
          <Form.Group className="import-km">
            <Form.Label>Заберите мою кофемашину по адресу</Form.Label>
            <Form.Control
              placeholder="Ленина 10 / 1 подъезд / 1 этаж / кв.1 "
              {...register('Адрес')}
            />
          </Form.Group>
          {showAlert && (
            <Alert
              className="mt-3"
              id="successForm"
              key={'success'}
              variant={'success'}
            >
              Ваша заявка принята, ожидайте звонка.
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

export default ServiceForm;
