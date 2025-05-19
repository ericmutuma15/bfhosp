export default function Contact() {
  return (
    <section id="contact" className="w-full bg-gray-100">
      <div className="max-w-screen-2xl mx-auto text-center px-4 py-12 sm:px-6 lg:px-8">
        <h3 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-6">
          Contact Us
        </h3>
        <p className="text-base sm:text-lg mb-4">
          📍 Kanyi Apartments, Kenya Israel<br />
          (Next to National Oil Petrol Station)
        </p>
        <p className="text-base sm:text-lg mb-6">
          📞 0113678958 / 0704478783
        </p>
        <img
          src="https://via.placeholder.com/800x300?text=Map+Placeholder"
          alt="Map"
          className="w-full max-w-3xl mx-auto rounded-lg shadow"
        />
      </div>
    </section>
  )
}
