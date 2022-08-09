import axios from 'axios';
import Swal from 'sweetalert2';
import { Button, Form, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { clearItems } from '../../redux/slices/basketSlice';
import { getApplication } from '../../utils/getApplicationData';

const BasketModalForm: React.FC = () => {
  const dispatch = useDispatch();

  const {
    register, //набор св-в
    formState: { errors },
    handleSubmit, //обертка
    reset, //сброс после отправки
  } = useForm();

  const onSubmit = (data: any) => {
    // const telegramToken = process.env.REACT_APP_TOKEN;
    const telegramToken = '5394889213:AAG-H6ynudJBBiO99Pw5zZzPsBqWA12L_pE';
    const CHAT_ID = '-707751403';
    const URL_API = `https://api.telegram.org/bot${telegramToken}/sendMessage`;

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
    reset();
    Swal.fire('Готово', 'Ваш заказ отправлен, ожидайте звонка!', 'success');
    dispatch(clearItems());
    window.localStorage.clear();
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
          <Form.Group>
            <Form.Label>Адрес доставки</Form.Label>
            <Form.Control
              placeholder="Ленина 10"
              {...register('Адрес', {
                required: 'Поле обязательно к заполнению!',
                minLength: {
                  value: 2,
                  message: 'Минимум 2 символа!',
                },
              })}
            />
          </Form.Group>
          <p className="errors">{errors?.Адрес?.message}</p>
          <Button type="submit" variant="outline-success" className="mt-4">
            Отправить заявку
          </Button>{' '}
        </Form>
      </Modal.Body>
    </>
  );
};

export default BasketModalForm;
