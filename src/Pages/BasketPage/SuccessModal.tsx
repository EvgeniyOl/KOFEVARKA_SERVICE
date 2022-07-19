import { Alert, Button, Modal } from 'react-bootstrap';

const SuccessModal = () => {
  return (
    <>
      <Modal.Header closeButton />
      <Modal.Title className="modal__tittle">Готово</Modal.Title>
      <Modal.Body>
        <Alert
          className="mt-3"
          id="successForm"
          key={'success'}
          variant={'success'}
        >
          Ваша заявка принята, ожидайте звонка.
        </Alert>
        <Button type="submit" variant="outline-success" className="mt-4">
          Ок
        </Button>{' '}
      </Modal.Body>
    </>
  );
};

export default SuccessModal;
