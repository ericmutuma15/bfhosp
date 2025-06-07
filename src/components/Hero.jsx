import React, { useEffect, useState } from 'react'
import IMG1 from '../assets/hero.jpeg'
import IMG2 from '../assets/clinic.jpeg'
import IMG3 from '../assets/ward.jpeg'

const slides = [
	{
		image: IMG1,
		content: (
			<>
				<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-4 drop-shadow-lg">
					Welcome to British Family Hospital
				</h2>
				<div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
					<a
						href="#services"
						className="inline-block px-8 py-3 bg-blue-900 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
					>
						View Clinical Services
					</a>
					<a
						href="#contact"
						className="inline-block px-8 py-3 border-2 border-blue-900 text-blue-900 font-semibold rounded-lg shadow hover:bg-blue-900 hover:text-white transition"
					>
						Contact Us
					</a>
				</div>
			</>
		),
	},
	{
		image: IMG2,
		content: (
			<>
				<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-4 drop-shadow-lg">
					Your Health, Our Priority
				</h2>
				<div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
					<a
						href="#contact"
						className="inline-block px-8 py-3 bg-blue-900 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
					>
						Consult a Doctor
					</a>
					<a
						href="#contact"
						className="inline-block px-8 py-3 border-2 border-blue-900 text-blue-900 font-semibold rounded-lg shadow hover:bg-blue-900 hover:text-white transition"
					>
						Patient Registration
					</a>
				</div>
			</>
		),
	},
	{
		image: IMG3,
		content: null, // Will be set in component for geolocation
	},
]

const MACH_LOCATION = {
	lat: -1.5201,
	lng: 37.2636,
	name: 'British Family Hospital, Machakos',
	address: 'Kanyi Apartments, Kenya Israel, Machakos',
}

export default function Hero() {
	const [slide, setSlide] = useState(0)
	const [mapUrl, setMapUrl] = useState('')
	const [showMap, setShowMap] = useState(false)
	const [mapTimeout, setMapTimeout] = useState(null)

	useEffect(() => {
		let interval
		if (!showMap) {
			interval = setInterval(() => {
				setSlide((s) => (s + 1) % slides.length)
			}, 5000)
		}
		return () => interval && clearInterval(interval)
	}, [showMap])

	// Set up directions button for slide 3
	useEffect(() => {
		if (slide === 2) {
			slides[2].content = (
				<>
					<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-4 drop-shadow-lg">
						Find Us Easily
					</h2>
					<div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
						<button
							className="inline-block px-8 py-3 bg-blue-900 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
							onClick={() => {
								if (navigator.geolocation) {
									navigator.geolocation.getCurrentPosition(
									(pos) => {
										const { latitude, longitude } = pos.coords
										const url = `https://www.google.com/maps/dir/?api=1&origin=${latitude},${longitude}&destination=${encodeURIComponent(MACH_LOCATION.address)}&destination_place_id=&travelmode=driving`
										window.open(url, '_blank')
									},
									() => {
										const url = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(MACH_LOCATION.address)}&destination_place_id=&travelmode=driving`
										window.open(url, '_blank')
									}
								)
								} else {
									const url = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(MACH_LOCATION.address)}&destination_place_id=&travelmode=driving`
									window.open(url, '_blank')
								}
							}}
						>
							Directions to the Hospital
						</button>
					</div>
				</>
			)
		}
		// eslint-disable-next-line
	}, [slide])

	// When map closes, resume slide auto-advance
	useEffect(() => {
		if (!showMap && mapTimeout) {
			clearTimeout(mapTimeout)
			setMapTimeout(null)
		}
	}, [showMap])

	return (
		<section className="relative w-full h-[420px] sm:h-[500px] md:h-[600px] bg-gradient-to-br from-blue-50 to-white overflow-hidden flex items-center justify-center mt-[92px]">
			<img
				src={slides[slide].image}
				alt="Hospital Slide"
				className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none select-none transition-all duration-700"
				aria-hidden="true"
			/>
			<div className="relative z-10 w-full flex flex-col items-center justify-center text-center px-4">
				{showMap ? null : slides[slide].content}
			</div>
			<div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
				{slides.map((_, idx) => (
					<button
						key={idx}
						className={`w-3 h-3 rounded-full border border-blue-900 ${slide === idx ? 'bg-blue-900' : 'bg-white'}`}
						onClick={() => setSlide(idx)}
						aria-label={`Go to slide ${idx + 1}`}
						disabled={showMap}
					/>
				))}
			</div>
		</section>
	)
}
