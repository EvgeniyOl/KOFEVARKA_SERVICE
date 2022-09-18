import Swal from 'sweetalert2';
import { Button, Form, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { clearItems } from '../../redux/slices/basketSlice';
import sendBasketMessage from '../../utils/sendBasketMessage';
import { useState } from 'react';

export type BasketFormValues = {
  Name: string;
  Phone_number: string;
  address: string;
};

const BasketModalForm: React.FC = () => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);

  const {
    register, //набор св-в
    formState: { errors },
    handleSubmit, //обертка
    reset, //сброс после отправки
  } = useForm<BasketFormValues>();

  const onSubmit = (data: BasketFormValues) => {
    sendBasketMessage(data);
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
              {...register('Name', {
                required: 'Поле обязательно к заполнению!',
                minLength: {
                  value: 2,
                  message: 'Минимум 2 символа!',
                },
              })}
            />
          </Form.Group>
          <p className="errors">{errors?.Name?.message}</p>
          <Form.Group>
            <Form.Label>Номер телефона</Form.Label>
            <Form.Control
              placeholder="+7913xxxxxxx"
              {...register('Phone_number', {
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
          <p className="errors">{errors?.Phone_number?.message}</p>
          <Form.Group>
            <Form.Label>Адрес доставки</Form.Label>
            <Form.Control
              placeholder="Ленина 10"
              {...register('address', {
                required: 'Поле обязательно к заполнению!',
                minLength: {
                  value: 2,
                  message: 'Минимум 2 символа!',
                },
              })}
            />
          </Form.Group>
          <p className="errors">{errors?.address?.message}</p>
          <div className="policy">
            <input
              className="form-check-input"
              type="checkbox"
              checked={checked}
              onChange={() => setChecked(!checked)}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              согласен c{' '}
              <a href="/policy">политикой обработки персональных данных</a>
            </label>
          </div>
          <Button
            type="submit"
            disabled={!checked}
            variant="outline-success"
            className="mt-4"
          >
            Отправить заявку
          </Button>
        </Form>
      </Modal.Body>
    </>
  );
};

export default BasketModalForm;
