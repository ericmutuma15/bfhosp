const services = [
    'Consultation','Triaging','Dental','Minor theatre',
    'Physiotherapy','Specialist Doctors','Medical camps/outreaches',
    'General check up packages','X-ray','Laboratory','Outpatient',
    'Counseling services','Emergency care','Home based care',
    'Telephonic consultations','Dental braces','Ultrasound',
  ]
  
  export default function Services() {
    return (
      <section id="services" className="py-12 px-6 bg-white">
        <h3 className="text-2xl font-bold text-center text-blue-800 mb-6">Our Services</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map(name => (
            <div key={name} className="border-l-4 border-red-500 bg-gray-50 p-4 shadow">
              {name}
            </div>
          ))}
        </div>
      </section>
    )
  }
  