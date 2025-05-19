import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Contact />
      <Footer />
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
