import { Link } from 'react-router-dom'
import React, { useState } from 'react'

const services = [
  { name: 'Dentistry', icon: '🦷', path: '/services/dentistry' },
  { name: 'Pharmacy', icon: '💊', path: '/services/pharmacy' },
  { name: 'Gynaecology', icon: '👩‍⚕️', path: '/services/gynaecology' },
  { name: 'Antenatal Clinic', icon: '🤰', path: '/services/antenatal-clinic' },
  { name: 'Accident & Emergency', icon: '🚑', path: '/services/accident-emergency' },
  { name: 'Laboratory', icon: '🧪', path: '/services/laboratory' },
  { name: 'Radiology', icon: '🩻', path: '/services/radiology' },
  { name: 'Outpatient', icon: '🏥', path: '/services/outpatient' },
  { name: 'Counseling', icon: '🗣️', path: '/services/counseling' },
  { name: 'Specialist Clinics', icon: '🩺', path: '/services/specialist-clinics' },
  { name: 'Physiotherapy', icon: '🏃‍♂️', path: '/services/physiotherapy' },
  { name: 'Home Based Care', icon: '🏡', path: '/services/home-based-care' },
  { name: 'Triaging', icon: '🩹', path: '/services/triaging' },
  { name: 'Medical Camps/Outreaches', icon: '🏕️', path: '/services/medical-camps' },
  { name: 'General Check Up', icon: '🩺', path: '/services/general-checkup' },
  { name: 'Minor Theatre', icon: '🏥', path: '/services/minor-theatre' },
]

export default function Services() {
  const [showAll, setShowAll] = useState(false)
  const visibleServices = showAll ? services : services.slice(0, 4)
  return (
    <section id="services" className="w-full bg-white border-t border-blue-100">
      <div className="max-w-screen-2xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h3 className="text-2xl sm:text-3xl font-bold text-center text-blue-900 mb-10">
          Clinical Services
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {visibleServices.map(({ name, icon, path }) => (
            <Link
              key={name}
              to={path}
              className="flex flex-col items-center bg-blue-50 border border-blue-100 rounded-lg p-6 shadow hover:shadow-lg transition hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <span className="text-4xl mb-3">{icon}</span>
              <span className="text-base sm:text-lg font-medium text-blue-900 text-center">{name}</span>
            </Link>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          {showAll ? (
            <button
              className="px-6 py-2 bg-blue-900 text-white rounded hover:bg-blue-700 transition"
              onClick={() => setShowAll(false)}
            >
              View Less
            </button>
          ) : (
            <button
              className="px-6 py-2 bg-blue-900 text-white rounded hover:bg-blue-700 transition"
              onClick={() => setShowAll(true)}
            >
              View More Services
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
