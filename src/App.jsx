import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    // App container forced to full width
    <div className="w-full">
      <Header />

      {/* Hero already uses responsive padding */}
      <Hero />

      {/* Services grid will adapt: 1 column on mobile, 2 on sm, 3 on md, 4 on lg+ */}
      <Services />

      {/* Contact section full-width by default */}
      <Contact />

      <Footer />
    </div>
  )
}
