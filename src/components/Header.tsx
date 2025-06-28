import { SlEnvolope } from "react-icons/sl";
import { paleta } from "../App";
import { useEffect, useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`w-11/12 xl:w-8/12 md:w-8/12  mx-auto flex justify-between gap-10 items-center px-4  transition-all duration-300 ${scrolled ? 'border-b border-gray-300 py-2' : 'py-4'}`} >

      {/* Logo */}
      <div className="font-extrabold text-3xl md:text-xl xl:text-4xl hover:scale-105 duration-75" style={{ color: paleta.text }}>
        <a href="/">{"<DEVAC />"}</a>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-6" style={{ color: paleta.text }}>
        <ul className="flex space-x-6">
          <li className="text-xl hover:scale-105 transition-transform duration-75"><a href="#about">Sobre mí</a></li>
          <li className="text-xl hover:scale-105 transition-transform duration-75"><a href="#projects">Proyectos</a></li>
          <li className="text-xl hover:scale-105 transition-transform duration-75"><a href="#resume">Resumen</a></li>
          <li className="text-xl hover:scale-105 transition-transform duration-75"><a href="#contact">Contacto</a></li>
        </ul>
        <a href="#contact" className="border p-2 border-gray-900 rounded-xl flex items-center gap-1 transition-all duration-75 hover:scale-105">
          <SlEnvolope size={18} /> Contactame
        </a>
      </div>

      {/* Mobile menu toggle */}
      <div className="md:hidden z-20">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-3xl text-black">
          {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center py-6 gap-4 text-center z-10" style={{ color: paleta.text }}>
          <a href="#about" className="text-xl hover:scale-105 transition-transform duration-75">Sobre mí</a>
          <a href="#projects" className="text-xl hover:scale-105 transition-transform duration-75">Proyectos</a>
          <a href="#resume" className="text-xl hover:scale-105 transition-transform duration-75">Resumen</a>
          <a href="#contact" className="text-xl hover:scale-105 transition-transform duration-75">Contacto</a>
          <a href="#contact" className="border mt-2 px-4 py-2 border-gray-900 rounded-xl flex items-center gap-1 transition-all duration-75 hover:scale-105">
            <SlEnvolope size={18} /> Contactame
          </a>
        </div>
      )}
    </nav>
  );
}
