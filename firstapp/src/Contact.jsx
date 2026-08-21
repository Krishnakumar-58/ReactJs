import Form from 'react-bootstrap/Form';
import Home from './Home';

function Contact() {
  return (
    <div>
        <Home/>
    <Form>
        <Form.Group className="mb-3" controlId="formGroupEmail">
            <h1>Contact Page</h1>
      </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Name:</Form.Label>
        <Form.Control type="text" placeholder="Enter Your name:" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email:</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Message:</Form.Label>
        <Form.Control type="text" placeholder="Enter your message here" />
      </Form.Group>
    </Form>
    </div>
  );
}

export default Contact;