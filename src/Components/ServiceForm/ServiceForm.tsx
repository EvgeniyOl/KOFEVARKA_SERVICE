import { useState } from 'react';
import { Alert, Button, Form, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import sendServiceMessage from '../../utils/sendServiceMessage';
import './ServiceForm.css';

export type FormValues = {
  Name: string;
  Phone_Number: string;
  Problems: string;
  coffee_machine: string;
  address: string;
};

const ServiceForm: React.FC = () => {
  const [showAlert, setShowAlert] = useState(false);

  const {
    register, //набор св-в
    formState: { errors },
    handleSubmit, //обертка
    reset, //сброс после отправки
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    sendServiceMessage(data);
    setShowAlert(!showAlert);
    reset();
  };
  return (
    <>
      <Modal.Header closeButton />
      <Modal.Title className="modal__tittle">Заявка на ремонт</Modal.Title>
      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group>
            <Form.Label>Ваше Имя</Form.Label>
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
              {...register('Phone_Number', {
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
          <p className="errors">{errors?.Phone_Number?.message}</p>
          <Form.Group className="mt-3">
            <Form.Label>Опишите проблему</Form.Label>
            <Form.Control
              placeholder="Завелись тараканы, хочу почистить"
              as="textarea"
              rows={3}
              {...register('Problems', {
                required: 'Поле обязательно к заполнению!',
                minLength: {
                  value: 2,
                  message: 'Минимум 2 символа!',
                },
              })}
            />
          </Form.Group>
          <p className="errors">{errors?.Problems?.message}</p>
          <Form.Group>
            <Form.Label>Название, модель кофемашины</Form.Label>
            <Form.Control
              placeholder="самовар-3000"
              {...register('coffee_machine', {
                required: true,
              })}
            />
          </Form.Group>
          <Form.Group className="import-km">
            <Form.Label>Заберите мою кофемашину по адресу</Form.Label>
            <Form.Control
              placeholder="Ленина 10 / 1 подъезд / 1 этаж / кв.1 "
              {...register('address')}
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
