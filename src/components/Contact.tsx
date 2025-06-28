import React from 'react';
import { paleta } from '../App';
import { SlEnvolope } from 'react-icons/sl';
import { FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';

const Contact: React.FC = () => (
  <section id="contact" className="w-full my-10 flex justify-center" aria-labelledby="contact-title">
    <div className="bg-white rounded-2xl shadow-lg p-8 flex items-center justify-center w-full max-w-xl">
      {/* Información de contacto */}
      <div className="flex flex-col items-center gap-4 text-center w-full">
        <div className="rounded-full border-4 border-amber-400 size-24 mb-2 flex items-center justify-center bg-gray-100">
          <SlEnvolope size={40} color={paleta.primary} aria-label="Ícono de sobre, contacto por correo" />
        </div>
        <h2 id="contact-title" className="text-2xl font-bold text-gray-900 mb-1">Contacto</h2>
        <p className="text-lg text-gray-700 max-w-md mb-2">
          ¿Tienes una idea, proyecto o simplemente quieres saludar? <strong>¡Estoy disponible para nuevas oportunidades y colaboraciones!</strong> No dudes en escribirme, responderé lo antes posible.
        </p>
        <div className="flex flex-col gap-2 text-gray-700 text-base items-center w-full">
          <div className="flex items-center gap-2 justify-center"><FaMapMarkerAlt className="text-amber-600" aria-label="Ubicación" />Curicó, Chile</div>
          <div className="flex items-center gap-2 justify-center"><SlEnvolope className="text-amber-600" aria-label="Correo electrónico" /><a className='hover:underline' href="mailto:cortesotel@gmail.com">cortesotel@gmail.com</a></div>
        </div>
        <div className="flex gap-3 mt-3 justify-center" role="list" aria-label="Redes sociales">
          <a href="https://linkedin.com/in/antoniocortessotelo/" target="_blank" rel="noopener noreferrer" className="border p-2 rounded-full hover:scale-110 transition-transform" style={{ borderColor: paleta.primary }} aria-label="LinkedIn de Antonio Cortés"><FaLinkedin size={22} color="#0A66C2" /></a>
          <a href="https://github.com/cortesantonio" target="_blank" rel="noopener noreferrer" className="border p-2 rounded-full hover:scale-110 transition-transform" style={{ borderColor: paleta.primary }} aria-label="GitHub de Antonio Cortés"><FaGithub size={22} color="#111827" /></a>
        </div>
      </div>
    </div>
  </section>
);

export default Contact; 