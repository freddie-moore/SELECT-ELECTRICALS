function Hero() {
    return (
      <section id="home" className="h-[60vh] md:h-[70vh] bg-cover bg-center relative" style={{ backgroundImage: "url('/assets/hero electrician.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative container mx-auto h-full flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Your Trusted Local Electrician</h1>
          <p className="text-lg md:text-xl mb-6">Reliable electrical services for your home and business</p>
          <a href="#contact" className="bg-[#ffc107] text-white px-6 py-3 rounded hover:bg-[#e0a800] transition">
            Get a Free Quote
          </a>
        </div>
      </section>
    );
  }
  
  export default Hero;