export default function Header() {
    return (
      <header className="w-full bg-blue-800 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">British Clinic Machakos</h1>
        <nav className="space-x-4">
          <a href="#services" className="hover:text-red-500">Services</a>
          <a href="#contact" className="hover:text-red-500">Contact</a>
        </nav>
      </header>
    )
  }
  