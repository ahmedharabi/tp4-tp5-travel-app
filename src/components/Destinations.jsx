import { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import DestinationCard from './DestinationCard'
import AddDestination from './AddDestination'

function Destinations(props) {
  const [search, setSearch] = useState('')
  const [minRating, setMinRating] = useState(0)
  const [showModal, setShowModal] = useState(false)

  // les deux filtres en meme temps
  const filtered = props.destinations.filter(
    (d) =>
      d.title.toLowerCase().includes(search.toLowerCase()) &&
      d.rating >= minRating
  )

  const addDestination = (newDestination) => {
    props.setDestinations([...props.destinations, newDestination])
  }

  return (
    <Container className="my-4">
      <h2 className="text-center mb-4">Destinations</h2>

      <Row className="mb-4">
        <Col md={5} className="mb-2">
          <Form.Control
            type="text"
            placeholder="Search by title..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Col>
        <Col md={4} className="mb-2">
          <Form.Select value={minRating} onChange={(e) => setMinRating(Number(e.target.value))}>
            <option value={0}>All ratings</option>
            <option value={1}>1 star and more</option>
            <option value={2}>2 stars and more</option>
            <option value={3}>3 stars and more</option>
            <option value={4}>4 stars and more</option>
            <option value={5}>5 stars</option>
          </Form.Select>
        </Col>
        <Col md={3} className="mb-2">
          <Button variant="success" className="w-100" onClick={() => setShowModal(true)}>
            + Add Destination
          </Button>
        </Col>
      </Row>

      <Row>
        {filtered.map((destination) => (
          <Col key={destination.id} sm={6} lg={4} className="mb-4">
            <DestinationCard destination={destination} />
          </Col>
        ))}
      </Row>

      {filtered.length === 0 && <p className="text-center">No destination found.</p>}

      <AddDestination
        show={showModal}
        handleClose={() => setShowModal(false)}
        addDestination={addDestination}
      />
    </Container>
  )
}

export default Destinations
