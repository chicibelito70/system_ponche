import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import App from './App';

// Implementa un formulario de la parte principal.
function formulariosP() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicCedula">
        <Form.Label>Cedula</Form.Label>
        <Form.Control type="email" placeholder="Cedula " />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Button variant="primary" type="submit">
        Registrar.
      </Button>
    </Form>
  );
}

export default formulariosP;