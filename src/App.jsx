import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import OutpatientClinics from './components/OutpatientClinics'
import Contact from './components/Contact'
import Footer from './components/Footer'
// Service pages
import Dentistry from './pages/Dentistry'
import Pharmacy from './pages/Pharmacy'
import Gynaecology from './pages/Gynaecology'
import AntenatalClinic from './pages/AntenatalClinic'
import AccidentEmergency from './pages/AccidentEmergency'
import Laboratory from './pages/Laboratory'
import Radiology from './pages/Radiology'
import Outpatient from './pages/Outpatient'
import Counseling from './pages/Counseling'
import SpecialistClinics from './pages/SpecialistClinics'
import Physiotherapy from './pages/Physiotherapy'
import HomeBasedCare from './pages/HomeBasedCare'
import Triaging from './pages/Triaging'
import MedicalCamps from './pages/MedicalCamps'
import GeneralCheckup from './pages/GeneralCheckup'
import MinorTheatre from './pages/MinorTheatre'
import About from './pages/About'

export default function App() {
  return (
    <div className="overflow-x-hidden w-full min-h-screen bg-white">
      <div className="w-full mx-auto px-0 sm:px-0 lg:px-0">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Services />
              <OutpatientClinics />
              <Contact />
            </>
          } />
          <Route path="/services/dentistry" element={<Dentistry />} />
          <Route path="/services/pharmacy" element={<Pharmacy />} />
          <Route path="/services/gynaecology" element={<Gynaecology />} />
          <Route path="/services/antenatal-clinic" element={<AntenatalClinic />} />
          <Route path="/services/accident-emergency" element={<AccidentEmergency />} />
          <Route path="/services/laboratory" element={<Laboratory />} />
          <Route path="/services/radiology" element={<Radiology />} />
          <Route path="/services/outpatient" element={<Outpatient />} />
          <Route path="/services/counseling" element={<Counseling />} />
          <Route path="/services/specialist-clinics" element={<SpecialistClinics />} />
          <Route path="/services/physiotherapy" element={<Physiotherapy />} />
          <Route path="/services/home-based-care" element={<HomeBasedCare />} />
          <Route path="/services/triaging" element={<Triaging />} />
          <Route path="/services/medical-camps" element={<MedicalCamps />} />
          <Route path="/services/general-checkup" element={<GeneralCheckup />} />
          <Route path="/services/minor-theatre" element={<MinorTheatre />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </div>
  )
}
