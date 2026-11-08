import { Container } from 'react-bootstrap'

function About() {
  return (
    <Container className="page">
      <h2>About Us</h2>
      <p>
        Travel Destinations is a React application that helps users discover
        beautiful places around the world.
      </p>
      <p>Our objectives :</p>
      <ul>
        <li>Show the best touristic destinations with their prices and ratings.</li>
        <li>Search and filter destinations easily.</li>
        <li>Give useful information about each trip (airline, flight duration, best season).</li>
        <li>Let users add their own destinations.</li>
      </ul>
    </Container>
  )
}

export default About
