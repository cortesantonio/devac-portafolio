import React from 'react';
import '../styles/About.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SlEnvolope } from 'react-icons/sl';


const herramientas = [
  "Transformo ideas en productos digitales funcionales",
  "Experto en interfaces modernas y accesibles",
  "Automatizo procesos para ahorrar tiempo y recursos",
  "Apasionado por la innovación y el aprendizaje continuo",
  "Trabajo en equipo y comunicación efectiva",
  "Soluciones a medida con tecnología de punta",
];

const About: React.FC = () => (
  <section id="about" className='w-full mt-25 mb-20 ' aria-labelledby="about-title">

    {/* Usamos flex-row por defecto, grid solo desde xl */}
    <div className="flex flex-col xl:grid xl:grid-cols-5 xl:grid-rows-5 gap-7">

      {/* Profile Card */}
      <div className="bg-white rounded-2xl p-5 shadow-lg flex flex-col items-center justify-center pt-10 pb-10 
                      xl:col-span-2 xl:row-span-5">
        <div className='rounded-full mb-4 border-dashed border-2 border-amber-600 size-60 xl:size-72 flex items-center justify-center p-4'>
          <img src='/perfil.jpg'
            loading='lazy' className='rounded-full size-full' alt="Foto de perfil de Antonio Cortés, desarrollador full stack" />
        </div>
        <div className='text-center max-w-4/5 mt-4'>
          <h1 id="about-title" className='text-3xl font-bold text-red-950'>Antonio Cortés</h1>
          <p className='text-lg text-gray-700 mt-2 leading-tight'>
            Desarrollador Full Stack con experiencia en React, Node.js y bases de datos relacionales.
          </p>
          <div className='flex justify-center items-center mt-4 gap-4' role="list" aria-label="Redes sociales">
            <a
              href="https://www.linkedin.com/in/antoniocortessotelo/"
              target="_blank"
              rel="noopener noreferrer"
              className='border p-2 rounded-md transition-transform duration-75 cursor-pointer hover:scale-110 flex items-center justify-center'
              aria-label="LinkedIn de Antonio Cortés"
            >
              <FaLinkedin size={22} className="text-blue-700" />
            </a>
            <a
              href="https://github.com/cortesantonio"
              target="_blank"
              rel="noopener noreferrer"
              className='border p-2 rounded-md transition-transform duration-75 cursor-pointer hover:scale-110 flex items-center justify-center'
              aria-label="GitHub de Antonio Cortés"
            >
              <FaGithub size={22} className="text-gray-800" />
            </a>
            <a
              href="mailto:cortesotelo@gmail.com"
              className='border p-2 rounded-md transition-transform duration-75 cursor-pointer hover:scale-110 flex items-center justify-center'
              aria-label="Enviar correo a Antonio Cortés"
            >
              <SlEnvolope size={22} className="text-amber-600" />
            </a>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="bg-white rounded-2xl p-5 shadow-lg flex flex-col justify-around mt-6 xl:mt-0 
                      xl:col-span-3 xl:row-span-4 xl:col-start-3 py-8">
        <div className="text-gray-700 text-xl font-semibold mb-2">
          ¡Hola! 👋</div>
        <div>
          <h2 className="text-4xl font-extrabold text-gray-900 leading-snug mb-4">
            Soy <span className="text-white" style={{ WebkitTextStrokeWidth: 1, WebkitTextStrokeColor: "black" }}>Antonio Cortés</span>, Ingeniero en Informática
            con enfoque en <span className="text-white" style={{ WebkitTextStrokeWidth: 1, WebkitTextStrokeColor: "black" }}>Desarrollo Web</span>.
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            Apasionado por la creación de experiencias digitales modernas y eficientes. Tengo experiencia
            construyendo interfaces atractivas con <strong>React</strong> y <strong>Tailwind CSS</strong>,
            además de desarrollar APIs sólidas en <strong>Node.js</strong> y <strong>ASP.NET</strong>.
            <br className="hidden md:block" />
            Domino bases de datos como <strong>PostgreSQL</strong> y <strong>SQL Server</strong>,
            y disfruto automatizar procesos con herramientas modernas.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            Siempre busco cosas nuevas que aprender y mejorar mis habilidades. Me encanta trabajar en equipo. ¡Me motiva!
          </p>

        </div>
        <a
          href="/cv_Antonio.pdf"
          download
          className="w-fit mt-4 px-5 py-2 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors text-sm"
          aria-label="Descargar currículum de Antonio Cortés"
        >
          Descargar CV
        </a>
      </div>

      {/* Skills Scroll */}
      <div className="bg-white rounded-2xl p-5 shadow-lg w-full overflow-hidden relative mt-6 xl:mt-0 
                      xl:col-span-3 xl:col-start-3 xl:row-start-5 items-center flex justify-center">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white via-transparent to-white z-10 pointer-events-none"></div>
        <ul className="flex gap-1 animate-infinite-scroll whitespace-nowrap" aria-label="Herramientas y tecnologías">
          {[...Array(2)].flatMap(() => herramientas).map((tech, index) => (
            <li key={index} className="text-lg font-semibold text-gray-700">{tech} · </li>
          ))}
        </ul>
      </div>

    </div>
  </section>
);

export default About;
