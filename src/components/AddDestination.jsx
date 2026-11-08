import { useState } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'

function AddDestination(props) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  const [price, setPrice] = useState('')
  const [rating, setRating] = useState(5)
  const [country, setCountry] = useState('')
  const [flightDuration, setFlightDuration] = useState('')
  const [airline, setAirline] = useState('')
  const [bestSeason, setBestSeason] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (title === '' || price === '') {
      alert('Please enter at least the title and the price')
      return
    }

    const newDestination = {
      id: Math.random(),
      title: title,
      description: description,
      image: image,
      price: Number(price),
      rating: Number(rating),
      country: country,
      flightDuration: flightDuration,
      airline: airline,
      bestSeason: bestSeason,
    }

    props.addDestination(newDestination)

    // vider le formulaire
    setTitle('')
    setDescription('')
    setImage('')
    setPrice('')
    setRating(5)
    setCountry('')
    setFlightDuration('')
    setAirline('')
    setBestSeason('')
    props.handleClose()
  }

  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add a new destination</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group className="mb-2">
            <Form.Label>Title</Form.Label>
            <Form.Control value={title} onChange={(e) => setTitle(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={2} value={description} onChange={(e) => setDescription(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Image URL</Form.Label>
            <Form.Control value={image} onChange={(e) => setImage(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Price (DT)</Form.Label>
            <Form.Control type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Rating</Form.Label>
            <Form.Select value={rating} onChange={(e) => setRating(e.target.value)}>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Country</Form.Label>
            <Form.Control value={country} onChange={(e) => setCountry(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Flight duration</Form.Label>
            <Form.Control value={flightDuration} onChange={(e) => setFlightDuration(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Airline</Form.Label>
            <Form.Control value={airline} onChange={(e) => setAirline(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Best season</Form.Label>
            <Form.Control value={bestSeason} onChange={(e) => setBestSeason(e.target.value)} />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>Cancel</Button>
          <Button variant="success" type="submit">Add</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default AddDestination
