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

const events = [
  { title: 'Free Medical Camp', date: '2025-07-10', desc: 'Join us for a free medical camp at Machakos Clinic.' },
  { title: 'Blood Donation Drive', date: '2025-08-05', desc: 'Participate in our blood donation event at Ongata Rongai.' },
  { title: 'Wellness Seminar', date: '2025-09-15', desc: 'Attend our wellness seminar at Gatutha House, Nairobi.' },
]

export default function OutpatientClinics() {
  return (
    <section id="outpatient" className="w-full bg-blue-50 border-t border-blue-100">
      <div className="w-full mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h3 className="text-2xl sm:text-3xl font-bold text-center text-blue-900 mb-10">
          Outpatient Clinics & News
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Clinics Cards */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {clinics.map((clinic, idx) => (
              <div key={clinic.name} className="bg-white border border-blue-100 rounded-lg shadow hover:shadow-lg transition flex flex-col items-center p-5">
                <img src={clinic.image} alt={clinic.name} className="w-full h-32 object-cover rounded mb-4" />
                <h4 className="font-bold text-blue-900 text-lg mb-1 text-center">{clinic.name}</h4>
                <p className="text-sm text-gray-700 text-center mb-2">{clinic.desc}</p>
                <span className="text-xs text-blue-700">{clinic.location}</span>
              </div>
            ))}
          </div>
          {/* News & About Cards */}
          <div className="flex flex-col gap-6">
            {/* News & Events Card */}
            <div className="bg-white border border-blue-100 rounded-lg shadow p-5">
              <h4 className="font-bold text-blue-900 text-lg mb-2">News & Events</h4>
              <ul className="list-disc list-inside text-sm text-gray-800">
                {events.map(e => (
                  <li key={e.title} className="mb-1">
                    <span className="font-semibold">{e.title}</span> <span className="text-xs text-gray-500">({e.date})</span>
                    <div className="text-xs text-gray-600">{e.desc}</div>
                  </li>
                ))}
              </ul>
            </div>
            {/* About Card */}
            <div className="bg-white border border-blue-100 rounded-lg shadow p-5 flex flex-col items-center">
              <div className="w-full h-24 bg-gray-200 rounded mb-3 flex items-center justify-center">
                <span className="text-gray-400">[Hospital Image]</span>
              </div>
              <h4 className="font-bold text-blue-900 text-lg mb-2 text-center">About British Family Hospital</h4>
              <p className="text-sm text-gray-700 text-center mb-3">British Family Hospital is a non-profit organization leading in medical expertise and service provision, recognized throughout East Africa and beyond as an advanced diagnostic, treatment, and referral centre.</p>
              <a href="/about" className="inline-block px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-700 transition text-sm">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
