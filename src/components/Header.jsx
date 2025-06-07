import React from 'react'
import LogoImage from '../assets/bfhlogo.png'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="w-full bg-white shadow border-b border-blue-100 fixed top-0 left-0 z-50" style={{position:'fixed',top:0,left:0,right:0}}>
      {/* Top bar with contact info */}
      <div className="bg-blue-900 text-white text-xs sm:text-sm py-1 px-4 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center gap-4">
          <span className="font-semibold">Call:</span>
          <a href="tel:+254113678958 " className="hover:underline">+254 113 678 958 </a>
          <span className="hidden sm:inline">|</span>
          <a href="mailto:britishfh21@gmail.com" className="hover:underline">britishfh21@gmail.com</a>
        </div>
        <div className="flex gap-2 mt-1 sm:mt-0">
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <svg className="w-4 h-4 fill-white hover:fill-blue-300" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.406.595 24 1.326 24H12.82v-9.294H9.692v-3.622h3.127V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <svg className="w-4 h-4 fill-white hover:fill-blue-300" viewBox="0 0 24 24"><path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195A4.916 4.916 0 0 0 16.616 3c-2.717 0-4.92 2.206-4.92 4.924 0 .386.045.763.127 1.124C7.728 8.807 4.1 6.884 1.671 3.965c-.423.722-.666 1.561-.666 2.475 0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.057 0 14.009-7.496 14.009-13.986 0-.213-.005-.425-.014-.636A9.936 9.936 0 0 0 24 4.557z"/></svg>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg className="w-4 h-4 fill-white hover:fill-blue-300" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.13 4.602.388 3.635 1.355 2.668 2.322 2.41 3.495 2.352 4.772.013 8.332 0 8.741 0 12c0 3.259.013 3.668.072 4.948.058 1.277.316 2.45 1.283 3.417.967.967 2.14 1.225 3.417 1.283C8.332 23.987 8.741 24 12 24c3.259 0 3.668-.013 4.948-.072 1.277-.058 2.45-.316 3.417-1.283.967-.967 1.225-2.14 1.283-3.417.059-1.28.072-1.689.072-4.948 0-3.259-.013-3.668-.072-4.948-.058-1.277-.316-2.45-1.283-3.417-.967-.967-2.14-1.225-3.417-1.283C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
          </a>
        </div>
      </div>
      {/* Main nav */}
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-3">
          <Link to="/">
            <img
              src={LogoImage}
              alt="British Family Hospital Logo"
              className="h-10 w-auto cursor-pointer"
            />
          </Link>
          <span className="hidden lg:inline text-xl sm:text-2xl font-bold text-blue-900 tracking-wide">
            British Family Hospital
          </span>
        </div>
        <nav className="flex items-center space-x-6">
          <a href="#services" className="text-blue-900 hover:text-blue-600 transition flex items-center" aria-label="Clinical Services">
            <svg className="w-6 h-6 block lg:hidden" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2a4 4 0 0 1 8 0v2M5 21h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2h-1.586a1 1 0 0 1-.707-.293l-2.414-2.414A2 2 0 0 0 13.172 7H10.828a2 2 0 0 0-1.414.586L7 10.293A1 1 0 0 1 6.293 10H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2z"/></svg>
            <span className="hidden lg:inline">Clinical Services</span>
          </a>
          <a href="#outpatient" className="text-blue-900 hover:text-blue-600 transition flex items-center" aria-label="Outpatient Clinics">
            <svg className="w-6 h-6 block lg:hidden" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 17v-1a4 4 0 0 1 8 0v1M12 7a4 4 0 1 1 0 8 4 4 0 0 1 0-8z"/></svg>
            <span className="hidden lg:inline">Outpatient Clinics</span>
          </a>
          <a href="#contact" className="text-blue-900 hover:text-blue-600 transition flex items-center" aria-label="Contact">
            <svg className="w-6 h-6 block lg:hidden" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 10.5a8.38 8.38 0 0 1-1.9.5 4.48 4.48 0 0 0 2-2.5 8.5 8.5 0 0 1-2.7 1A4.48 4.48 0 0 0 12 8a4.5 4.5 0 0 0-4.5 4.5c0 .35.04.7.1 1.03A12.94 12.94 0 0 1 3 9.5s-4 9 5 13c-1.38 1.5-2.5 2-2.5 2s9-1 13-8.5a8.38 8.38 0 0 0 2-5.5c0-.34-.03-.67-.08-.99z"/></svg>
            <span className="hidden lg:inline">Contact</span>
          </a>
        </nav>
      </div>
    </header>
  )
}
