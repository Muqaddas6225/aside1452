import {React, useState }from 'react';
import '../../../styles/home/newsletter.scss';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';

const Newsletter = () => {
    const [message, setMessage] = useState('');
    const [error, setError]= useState(null);

    // const [state, setState] = useState('');


    function isValidEmail(email){
        return /\S+@\.\\S+/.test(email);
    }

    const handleChange = event => {
        if(!isValidEmail(event.target.value)){
            setError('Email is invalid');
            setMessage(error);
        }
        else{
            setError(null);
            // setState(event.target.value);
            

        }
        setMessage(event.target.value);
        
    }

    const handleSubmit = event =>{
        event.preventDefault();

        const email = {
            value : message
        }

        axios.post (`https://api.certiwise.fr/api/subscribe_newsletter`,{email})
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
    }











  return (
     <section className='newsletter-section'>
        <div className='container'>
        <Row className='newsletter-content'>
            <Col lg = {6} className='newsletter-div'>
                <div className='subscribe-heading'>
                    <h3 className='subs-head' >Subscribe to our <br/>
                        Newsletter
                    </h3>
                    <span className='hr-line'></span>
                </div>

                <div className='newsletterform-div'>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        {/* <Form.Label>Email address</Form.Label> */}
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        
                        </Form.Text>
                        <Form.Control type="email" placeholder="Enter email here..." onChange={handleChange} value={message} />
                        {/* {error && <h2 style={{color: 'red'}}>{error}</h2>} */}
                        {/* <button >Add</button> */}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="submit" label="I have read & accept privacy policy agreement" />
                    </Form.Group>
                    {/* <Button variant="primary" type="submit">
                        Submit
                    </Button> */}
                    </Form>
                </div>

            </Col>
            <Col lg = {6} className='suggestion-div'>
                <div className='suggestion-head' >
                <h3>Suggest a film that you would like to see on the platform.</h3>
                <h4>Fill in the form to request it</h4>
                </div>
                <div className='suggestionForm-div'>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Artist</Form.Label>
                        <Form.Control type="text" name='Artist' placeholder="" />
                        
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Film Title</Form.Label>
                        <Form.Control type="text" name='Artist' placeholder="" />
                       
                    </Form.Group>

                   
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="We will strive for having it soon on our market." />
                    </Form.Group>
                    {/* <Button variant="primary" type="submit">
                        Submit
                    </Button> */}
                    </Form>
                </div>
            </Col>
        </Row>

        </div>
     </section>
  )
}

export default Newsletter