function Contact() {
    return (
      <section id="contact" className="py-16 bg-[#f8f9fa]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#003366] text-center mb-12">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Form */}
            <form className="bg-white p-6 rounded-lg shadow-md">
              <input type="text" placeholder="Name" className="w-full p-3 mb-4 border border-gray-300 rounded" />
              <input type="email" placeholder="Email" className="w-full p-3 mb-4 border border-gray-300 rounded" />
              <textarea placeholder="Message" className="w-full p-3 mb-4 border border-gray-300 rounded h-32"></textarea>
              <button className="bg-[#ffc107] text-white px-6 py-3 rounded w-full hover:bg-[#e0a800] transition">
                Send Message
              </button>
            </form>
            {/* Contact Info */}
            <div className="text-[#003366]">
              <p className="mb-4"><span className="text-2xl mr-2">📞</span> 020 1234 5678</p>
              <p className="mb-4"><span className="text-2xl mr-2">✉️</span> info@selectelectric.co.uk</p>
              <p><span className="text-2xl mr-2">📍</span> South East London</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Contact;