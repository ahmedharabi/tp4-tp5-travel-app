import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating'

function DestinationCard(props) {
  const d = props.destination

  return (
    <Card className="destination-card h-100">
      <Card.Img variant="top" src={d.image} />
      <Card.Body>
        <Card.Title>{d.title}</Card.Title>
        <Card.Text>{d.description}</Card.Text>
        <Rating value={d.rating} />
        <p className="price">{d.price} DT</p>
        <Link to={'/destinations/' + d.id}>
          <Button variant="primary">View Details</Button>
        </Link>
      </Card.Body>
    </Card>
  )
}

export default DestinationCard
