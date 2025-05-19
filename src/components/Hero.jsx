import IMG from '../assets/clinic.jpeg'

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
      </div>
    </section>
  )
}
