import React from 'react'
import heroImg from '../assets/about.jpeg'

export default function Counseling() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative w-full h-64 md:h-80 flex items-end bg-blue-50 overflow-hidden">
        <img src={heroImg} alt="Counseling" className="absolute inset-0 w-full h-full object-cover object-center opacity-70" />
        <div className="relative z-10 w-full text-left px-6 py-8 bg-gradient-to-t from-blue-900/80 to-transparent">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Counseling Services</h1>
        </div>
      </section>
      <section className="max-w-3xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Counseling</h2>
        <p className="mb-6 text-gray-700">Our counseling services provide emotional and psychological support for individuals and families, helping them cope with life's challenges.</p>
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">Clinic Schedule:</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Monday - Friday: 9am - 5pm</li>
            <li>Saturday: 9am - 1pm</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-blue-800 mb-2">Clinic Operation Hours</h3>
          <ul className="list-disc list-inside text-blue-900">
            <li>Galleria Outpatient Centre</li>
            <li>Warwick Outpatient Centre</li>
            <li>Capital Centre</li>
            <li>Southfield Mall</li>
            <li>Kiambu Mall</li>
            <li>Rosslyn Riviera</li>
            <li>Chandaria Accident & Emergency Centre</li>
          </ul>
        </div>
      </section>
    </main>
  )
}
