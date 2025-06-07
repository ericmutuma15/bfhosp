import React from 'react'
import placeholder from '../assets/clinic.jpeg'

const clinics = [
  {
    name: 'Main Hospital, Ongata Rongai',
    location: 'Ongata Rongai',
    image: placeholder,
    desc: 'Our main hospital branch serving Ongata Rongai and surrounding areas.'
  },
  {
    name: 'Gatutha House, Nairobi',
    location: 'Gatutha House, Ground Floor',
    image: placeholder,
    desc: 'Satellite clinic in Nairobi at Gatutha House, Ground Floor.'
  },
  {
    name: 'Machakos Clinic, Kenya Israel Kanyi Apartments',
    location: 'Machakos',
    image: placeholder,
    desc: 'Satellite clinic in Machakos, Kenya Israel Kanyi Apartments.'
  },
  {
    name: 'Meru Runogone',
    location: 'Meru',
    image: placeholder,
    desc: 'Satellite clinic in Meru, Runogone.'
  },
]

export default function Outpatient() {
  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">Our Outpatient Clinics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {clinics.map((clinic) => (
            <div key={clinic.name} className="bg-blue-50 border border-blue-100 rounded-lg shadow flex flex-col items-center p-6">
              <img src={clinic.image} alt={clinic.name} className="w-full h-32 object-cover rounded mb-4" />
              <h4 className="font-bold text-blue-900 text-lg mb-1 text-center">{clinic.name}</h4>
              <p className="text-sm text-gray-700 text-center mb-2">{clinic.desc}</p>
              <span className="text-xs text-blue-700">{clinic.location}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
