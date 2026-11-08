import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

function Home() {
  return (
    <div className="home">
      <div className="home-content">
        <h1>Explore the World 🌍</h1>
        <p>Find your next travel destination and plan your dream trip.</p>
        <Link to="/destinations">
          <Button variant="warning" size="lg">See Destinations</Button>
        </Link>
      </div>
    </div>
  )
}

export default Home
