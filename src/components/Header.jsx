export default function Header() {
    return (
      <header className="w-full bg-blue-800 text-white">
        <div className="max-w-screen-2xl mx-auto flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
            British Clinic Machakos
          </h1>
          <nav className="space-x-4 text-sm sm:text-base">
            <a href="#services" className="hover:text-red-400">
              Services
            </a>
            <a href="#contact" className="hover:text-red-400">
              Contact
            </a>
          </nav>
        </div>
      </header>
    )
  }
  