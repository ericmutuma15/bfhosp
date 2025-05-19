const services = [
  'Consultation','Triaging','Dental','Minor theatre',
  'Physiotherapy','Specialist Doctors','Medical camps/outreaches',
  'General check up packages','X-ray','Laboratory','Outpatient',
  'Counseling services','Emergency care','Home based care',
  'Telephonic consultations','Dental braces','Ultrasound',
]

export default function Services() {
  return (
    <section id="services" className="w-full bg-white">
      <div className="max-w-screen-2xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <h3 className="text-2xl sm:text-3xl font-bold text-center text-blue-800 mb-8">
          Our Services
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map(name => (
            <div
              key={name}
              className="flex items-center border-l-4 border-red-500 bg-gray-50 p-4 shadow-sm"
            >
              <span className="mr-2 text-red-500">✔️</span>
              <span className="text-sm sm:text-base">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
