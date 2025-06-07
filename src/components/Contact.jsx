import contactImage from '../assets/hero0.jpeg';
export default function Contact() {
  return (
    <section id="contact" className="w-full bg-gray-100 flex justify-center items-center py-12">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md flex flex-col items-center">
        <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-4">
          <img src={contactImage} alt="Hospital" className="w-20 h-20 object-cover rounded-full" />
        </div>
        <h3 className="text-2xl font-bold text-blue-800 mb-2 text-center">Visit Any of Our Outpatient Clinics</h3>
        <p className="text-base text-gray-700 mb-4 text-center">
          Main Hospital, Ongata Rongai<br />
          Gatutha House, Nairobi<br />
          Machakos Clinic, Kenya Israel Kanyi Apartments<br />
          Meru Runogone
        </p>
        <div className="mb-2 text-center">
          <span className="block text-blue-900 font-semibold">Phone:</span>
          <span className="block">+254 113 678 958</span>
          <span className="block">0704 478 783</span>
        </div>
        <div className="mb-2 text-center">
          <span className="block text-blue-900 font-semibold">Email:</span>
          <span className="block">britishfh21@gmail.com </span>
        </div>
      </div>
    </section>
  );
}
