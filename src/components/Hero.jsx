import React from 'react'
import IMG from '../assets/hero.jpeg'

export default function Hero() {
  return (
    <section className="w-full bg-blue-50">
      <div className="max-w-screen-2xl mx-auto text-center px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-800 mb-4">
          Welcome to British Clinic Machakos
        </h2>
        <p className="text-base sm:text-lg md:text-xl mb-6">
          Holistic, accessible healthcare—“Until everyone is well.”
        </p>
        <img
          src={IMG}
          alt="Hospital Building"
          className="w-full max-w-4xl h-auto mx-auto rounded-lg shadow-lg"
        />

        {/* Call-to-action buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://brookeofhealing.vercel.app/waiting"
            className="inline-block px-6 py-3 bg-primary text-black font-medium rounded-lg shadow hover:bg-blue-700 hover:text-black focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition"
          >
            Book Appointment
          </a>
          <a
            href="https://brookeofhealing.vercel.app/waiting"
            className="inline-block px-6 py-3 border-2 border-primary bg-primary text-black font-medium rounded-lg shadow hover:bg-blue-700 hover:text-black focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition"
          >
            Consult a Doctor
          </a>
        </div>
      </div>
    </section>
  )
}
