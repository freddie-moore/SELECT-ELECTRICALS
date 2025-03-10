import { useState } from 'react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#003366] text-white py-4 fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="text-2xl font-bold flex items-center">
          <img src="/assets/logo.png" alt="SELECT Logo" className="h-10 mr-2" />
          SELECT
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-[#ffc107]">Home</a>
          <a href="#services" className="hover:text-[#ffc107]">Services</a>
          <a href="#about" className="hover:text-[#ffc107]">About</a>
          <a href="#contact" className="hover:text-[#ffc107]">Contact</a>
        </nav>
        {/* Mobile Hamburger */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#003366] px-4 py-2">
          <a href="#home" className="block py-2 hover:text-[#ffc107]">Home</a>
          <a href="#services" className="block py-2 hover:text-[#ffc107]">Services</a>
          <a href="#about" className="block py-2 hover:text-[#ffc107]">About</a>
          <a href="#contact" className="block py-2 hover:text-[#ffc107]">Contact</a>
        </div>
      )}
    </header>
  );
}

export default Header;