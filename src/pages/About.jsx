import React from 'react'
import hospitalImg from '../assets/hero.jpeg'

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative w-full h-64 md:h-80 flex items-end bg-blue-50 overflow-hidden">
        <img src={hospitalImg} alt="British Family Hospital" className="absolute inset-0 w-full h-full object-cover object-center opacity-70" />
        <div className="relative z-10 w-full text-left px-6 py-8 bg-gradient-to-t from-blue-900/80 to-transparent">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Who We Are</h1>
        </div>
      </section>
      <section className="max-w-3xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">About British Family Hospital</h2>
        <p className="mb-6 text-gray-700">British Family Hospital is a non-profit organization leading in medical expertise and service provision, with deservedly earned recognition throughout East Africa and beyond as an advanced diagnostic, treatment and referral centre. Investment in the latest technology and medical equipment has seen us establish leadership in medical procedures both in Kenya and beyond.</p>
        <h3 className="text-lg font-semibold text-blue-800 mb-2">Mission</h3>
        <p className="mb-6 text-gray-700">To offer exceptional multi-specialty healthcare services by harnessing innovative, dynamic & integrational patient-centered strategies, towards achieving sustainable growth.</p>
        <h3 className="text-lg font-semibold text-blue-800 mb-2">Vision</h3>
        <p className="mb-6 text-gray-700">The renowned modern patient-centered healthcare facility in an atmosphere of trust, safety and comfort.</p>
        <h3 className="text-lg font-semibold text-blue-800 mb-2">Values</h3>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li><b>Dedication:</b> We are dedicated to offering patients and their families efficient service and great value for their money.</li>
          <li><b>Empathy:</b> We are devoted to providing a warm, friendly and caring environment in which patients can recover.</li>
          <li><b>Inspiration:</b> We inspire our staff to achieve the extraordinary and develop the best careers.</li>
          <li><b>Quality:</b> We pursue superior performance and quality in all we do, to build and preserve the Hospital’s clinical, organizational and financial strength.</li>
          <li><b>Partnerships:</b> We recognize the value of strong internal and external partnerships to accomplish our goals.</li>
          <li><b>Integrity & Accountability:</b> We ensure to do what we say we will do, and hold up well under high levels of accountability.</li>
        </ul>
        <h3 className="text-lg font-semibold text-blue-800 mb-2">Our Quality Statements</h3>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li><a href="/" className="text-blue-700 hover:underline">Patients & Visitors</a></li>
          <li><a href="/" className="text-blue-700 hover:underline">Clinical Services</a></li>
          <li><a href="/" className="text-blue-700 hover:underline">Other Services</a></li>
          <li><a href="/" className="text-blue-700 hover:underline">Careers</a></li>
          <li><a href="/" className="text-blue-700 hover:underline">Contact Us</a></li>
        </ul>
      </section>
    </main>
  )
}
