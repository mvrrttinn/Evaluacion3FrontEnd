// src/App.jsx
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Barbers from './components/Barbers'
import Booking from './components/Booking'
import Reviews from './components/Reviews'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Barbers />
        <Booking />
        <Reviews />
      </main>
      <Footer />
    </>
  )
}