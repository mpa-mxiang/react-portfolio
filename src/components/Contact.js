import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
export const Contact = () => {
    const formInitialDetails = {
        name: '',
        email: '',
        message: ''
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
          ...formDetails,
          [category]: value
        })
    }
    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt='Contact Us' />
                    </Col>
                    <Col md={6}>
                        <h2>Get in Touch</h2>
                        <form>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.name} placeholder="Name" onChange={(e) => onFormUpdate('name', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.email} placeholder="Email" onChange={(e) => onFormUpdate('email', e.target.value)} />
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}