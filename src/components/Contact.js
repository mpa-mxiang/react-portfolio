import { useState } from "react";

export const Contact = () => {
    const formInitialDetails = {
        name: '',
        email: '',
        message: ''
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={} alt='' />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}