import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './Form.css';

const ModalForm = (props) => {
  const {
    register, //набор св-в
    formState: { errors },
    handleSubmit, //обертка
    reset, //сброс после отправки
  } = useForm();

  // const onSubmit = (data) => {
  //   Post(JSON.stringify(data));
  //   reset();
  // };
  // onSubmit = { handleSubmit(onSubmit) }
  return (
    <>
      <Modal.Header closeButton />
      <Modal.Title className="modalTittle">Заявка на ремонт</Modal.Title>
      <Modal.Body>
        <Form method="post" action="/src/Pages/Service/Form/TelegramMailer.php">
          <Form.Group controlId="">
            <Form.Label>Ваше имя</Form.Label>
            <Form.Control
              type="text"
              name="name"
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
          <Form.Group controlId="">
            <Form.Label>Номер телефона</Form.Label>
            <Form.Control
              type="text"
              name="phone"
              placeholder="+7 913 ххх хх хх"
              {...register('PhoneNumber', {
                required: 'Поле обязательно к заполнению!',
                minLength: {
                  value: 11,
                  message: 'Минимум 11 символов!',
                },
              })}
            />
          </Form.Group>
          <p className="errors">{errors?.PhoneNumber?.message}</p>
          <Form.Group className="mt-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Опишите проблему</Form.Label>
            <Form.Control
              placeholder="Завелись тараканы, хочу почистить"
              as="textarea"
              rows={3}
              {...register('Problem', {
                required: 'Поле обязательно к заполнению!',
                minLength: {
                  value: 2,
                  message: 'Минимум 2 символа!',
                },
              })}
            />
          </Form.Group>
          <p className="errors">{errors?.Problem?.message}</p>
          <Button type='submit' variant="outline-success" className='mt-4'>Отправить заявку</Button>{' '}

        </Form>
      </Modal.Body>
    </>
  );
};

export default ModalForm;
