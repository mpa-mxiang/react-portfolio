export const Newsletter = ({ subscribe, status, message }) => {
    return (
        <Col lg={12}>
            <div className="newsletter-bx">
                <Row>
                    <Col lg={12} md={6} xl={5}>
                        <h3>Subscribe to our Newsletter</h3>
                        {status === 'sending' && <Alert>Sending...</Alert>}
                        {status === 'error' && <Alert variant="danger">{message}</Alert>}
                        {status === 'success' && <Alert variant="success">{message}</Alert>}
                    </Col>
                </Row>
            </div>
        </Col>
    )
}