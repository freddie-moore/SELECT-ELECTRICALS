function Services() {
    const services = [
      { icon: "house", title: "Residential Wiring", desc: "Expert wiring services for your home." },
      { icon: "building", title: "Commercial Electrical Work", desc: "Tailored solutions for businesses." },
      { icon: "tools", title: "Repairs", desc: "Fast and reliable electrical fixes." },
      { icon: "plug", title: "Installations", desc: "Professional setups for any need." },
    ];
  
    return (
      <section id="services" className="py-16 bg-[#f8f9fa]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#003366] text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
                <div className="text-[#003366] text-4xl mb-4">{/* Icon placeholder */}</div>
                <h3 className="text-xl font-bold text-[#003366] mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default Services;