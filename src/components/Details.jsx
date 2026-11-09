import { useParams, useNavigate } from 'react-router-dom'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Rating from './Rating'

function Details(props) {
  const { id } = useParams()
  const navigate = useNavigate()

  const destination = props.destinations.find((d) => d.id == id)

  if (!destination) {
    return (
      <Container className="page">
        <h3>Destination not found</h3>
        <Button variant="dark" onClick={() => navigate('/')}>Return Home</Button>
      </Container>
    )
  }

  return (
    <Container className="page">
      <Row>
        <Col md={6} className="mb-3">
          <img src={destination.image} alt={destination.title} className="details-img" />
        </Col>
        <Col md={6}>
          <h2>{destination.title}</h2>
          <Rating value={destination.rating} />
          <p className="mt-3">{destination.description}</p>
          <p><b>Price :</b> {destination.price} DT</p>
          <p><b>Country :</b> {destination.country}</p>
          <p><b>Flight duration :</b> {destination.flightDuration}</p>
          <p><b>Airline :</b> {destination.airline}</p>
          <p><b>Best season :</b> {destination.bestSeason}</p>
          <Button variant="dark" onClick={() => navigate('/')}>Return Home</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default Details
