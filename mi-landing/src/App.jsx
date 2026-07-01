// src/App.jsx
import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Barbers from './components/Barbers'       
import Booking from './components/Booking'
import MyReservations from './components/MyReservations'
import Reviews from './components/Reviews'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  const [refreshKey, setRefreshKey] = useState(0)
  const recargarReservas = () => setRefreshKey(prev => prev + 1)

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Barbers />                                
        <Booking onReservaCreada={recargarReservas} />
        <MyReservations refreshKey={refreshKey} />
        <Reviews />
      </main>
      <Footer />
    </>
  )
}