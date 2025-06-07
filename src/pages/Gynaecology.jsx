import React from 'react'
import heroImg from '../assets/lab.jpeg'

export default function Gynaecology() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-64 md:h-80 flex items-end bg-blue-50 overflow-hidden">
        <img src={heroImg} alt="Lab technician smiling" className="absolute inset-0 w-full h-full object-cover object-center opacity-70" />
        <div className="relative z-10 w-full text-left px-6 py-8 bg-gradient-to-t from-blue-900/80 to-transparent">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">The Nairobi Hospital Gynaecology Services</h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-3xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Gynaecology/Family Planning/Postnatal Clinic</h2>
        <p className="mb-6 text-gray-700">This clinic provides treatment to young girls and women with health problems related to the female reproductive system. We also offer family planning services.</p>
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">Clinic Schedule:</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Monday: 12pm - 4pm</li>
            <li>Tuesday: 8am - 4pm</li>
            <li>Wednesday: 8am - 12 pm</li>
            <li>Thursday: 1pm - 4pm</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-blue-800 mb-2">Clinic Operation Hours</h3>
          <ul className="list-disc list-inside text-blue-900">
            <li><a href="https://thenairobihosp.org/outpatient-center/galleria-mall" className="hover:underline" target="_blank" rel="noopener noreferrer">Galleria Outpatient Centre</a></li>
            <li><a href="https://thenairobihosp.org/outpatient-center/warwick-centre" className="hover:underline" target="_blank" rel="noopener noreferrer">Warwick Outpatient Centre</a></li>
            <li><a href="https://thenairobihosp.org/outpatient-center/capital-centre" className="hover:underline" target="_blank" rel="noopener noreferrer">Capital Centre</a></li>
            <li><a href="https://thenairobihosp.org/outpatient-center/southfield-mall%20" className="hover:underline" target="_blank" rel="noopener noreferrer">Southfield Mall</a></li>
            <li><a href="https://thenairobihosp.org/outpatient-center/kiambu-mall" className="hover:underline" target="_blank" rel="noopener noreferrer">Kiambu Mall</a></li>
            <li><a href="https://thenairobihosp.org/outpatient-center/rosslyn-riviera" className="hover:underline" target="_blank" rel="noopener noreferrer">Rosslyn Riviera</a></li>
            <li><a href="https://thenairobihosp.org/clinical-services/accident-and-emergency-services" className="hover:underline" target="_blank" rel="noopener noreferrer">Chandaria Accident & Emergency Centre</a></li>
          </ul>
        </div>
      </section>
    </main>
  )
}
