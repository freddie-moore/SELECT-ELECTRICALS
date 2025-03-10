function Testimonials() {
    const testimonials = [
      { quote: "Amazing service! Fixed my issue quickly.", name: "John Doe", rating: 5 },
      { quote: "Professional and affordable. Highly recommend!", name: "Jane Smith", rating: 5 },
    ];
  
    return (
      <section id="testimonials" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#003366] text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg">
                <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                <p className="font-bold text-[#003366]">- {testimonial.name}</p>
                <div className="text-[#ffc107] mt-2">★★★★★</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default Testimonials;