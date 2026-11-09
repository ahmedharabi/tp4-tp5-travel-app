import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MyNavbar from './components/MyNavbar'
import Home from './components/Home'
import Destinations from './components/Destinations'
import About from './components/About'
import Contact from './components/Contact'
import Details from './components/Details'
import data from './data'

function App() {
  const [destinations, setDestinations] = useState(data)

  return (
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/destinations"
          element={<Destinations destinations={destinations} setDestinations={setDestinations} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/destinations/:id" element={<Details destinations={destinations} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
