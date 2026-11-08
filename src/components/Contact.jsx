import { Container, Card } from 'react-bootstrap'

function Contact() {
  return (
    <Container className="page">
      <h2>Contact</h2>
      <Card className="contact-card">
        <Card.Body>
          <p>📍 Address : Rue Omar Ibn El Khattab, Gabès, Tunisia</p>
          <p>📞 Phone : +216 75 000 000</p>
          <p>✉️ Email : contact@traveldestinations.tn</p>
          <p>🕒 Open : Monday - Saturday, 8h - 18h</p>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default Contact
