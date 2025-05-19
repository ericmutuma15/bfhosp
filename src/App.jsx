import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    // Hide any accidental horizontal overflow
    <div className="overflow-x-hidden">
      {/* 
        Center the content, add horizontal padding:
        - px-4 on all screens
        - sm:px-6 once ≥640px
        - lg:px-8 once ≥1024px
        Constrain max width to ultra-wide monitors
      */}
      <div className="w-full mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <Header />

        <Hero />

        <Services />

        <Contact />

        <Footer />
      </div>
    </div>
  )
}
