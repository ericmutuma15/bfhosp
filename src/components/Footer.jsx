export default function Footer() {
  return (
    <footer className="w-full bg-blue-900 text-white border-t border-blue-100 mt-12">
      <div className="w-full mx-auto px-4 py-10 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Community Partner Card */}
        <div className="md:col-span-3 mb-6">
          <div className="bg-blue-100 text-blue-900 rounded-lg p-4 flex flex-col sm:flex-row items-center justify-center gap-2 shadow">
            <span className="font-semibold">In partnership with</span>
            <a
              href="https://brookeofhealing.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-3 py-1 bg-blue-700 text-white text-xs rounded hover:bg-blue-600 transition ml-2"
            >
              Brook of Healing (Community Based Organisation)
            </a>
          </div>
        </div>
        {/* Contact Info */}
        <div>
          <h4 className="font-bold text-lg mb-2">Contact Us</h4>
          <p className="mb-1">British Family Hospital, Magadi Road</p>
          <a href="tel:+254113678958" className="block hover:underline">+254 113 678 958 </a>
          <a href="tel:0704478783" className="block hover:underline">0704 478 783</a>
          <a href="mailto:britishfh21@gmail.com " className="block hover:underline">britishfh21@gmail.com </a>
        </div>
        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-lg mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li><a href="#services" className="hover:underline">Clinical Services</a></li>
            <li><a href="#outpatient" className="hover:underline">Outpatient Clinics</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer" className="hover:underline">Careers</a></li>
          </ul>
        </div>
        {/* Social Media */}
        <div>
          <h4 className="font-bold text-lg mb-2">Stay Connected</h4>
          <div className="flex gap-4 mb-2">
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg className="w-6 h-6 fill-white hover:fill-blue-300" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.406.595 24 1.326 24H12.82v-9.294H9.692v-3.622h3.127V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <svg className="w-6 h-6 fill-white hover:fill-blue-300" viewBox="0 0 24 24"><path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195A4.916 4.916 0 0 0 16.616 3c-2.717 0-4.92 2.206-4.92 4.924 0 .386.045.763.127 1.124C7.728 8.807 4.1 6.884 1.671 3.965c-.423.722-.666 1.561-.666 2.475 0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.057 0 14.009-7.496 14.009-13.986 0-.213-.005-.425-.014-.636A9.936 9.936 0 0 0 24 4.557z"/></svg>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg className="w-6 h-6 fill-white hover:fill-blue-300" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.13 4.602.388 3.635 1.355 2.668 2.322 2.41 3.495 2.352 4.772.013 8.332 0 8.741 0 12c0 3.259.013 3.668.072 4.948.058 1.277.316 2.45 1.283 3.417.967.967 2.14 1.225 3.417 1.283C8.332 23.987 8.741 24 12 24c3.259 0 3.668-.013 4.948-.072 1.277-.058 2.45-.316 3.417-1.283.967-.967 1.225-2.14 1.283-3.417.059-1.28.072-1.689.072-4.948 0-3.259-.013-3.668-.072-4.948-.058-1.277-.316-2.45-1.283-3.417-.967-.967-2.14-1.225-3.417-1.283C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-xs py-4 bg-blue-950 bg-opacity-80">
        &copy; 2025 British Family Hospital. All Rights Reserved
      </div>
    </footer>
  )
}
