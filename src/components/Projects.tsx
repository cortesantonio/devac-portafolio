import { useState, useEffect } from 'react';
import { paleta } from '../App';
import { createPortal } from 'react-dom';

interface Proyecto {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  status: string;
  link?: string;
}

const proyectos = [
  {
    title: "Ruta Accesible",
    description: `Aplicación web inclusiva que permite a los usuarios encontrar rutas accesibles para personas con movilidad reducida.
            Utiliza React, TypeScript, Supabase y Google Maps para ofrecer una experiencia intuitiva y eficiente.
            La plataforma permite a los usuarios registrar y consultar rutas, asegurando que las personas con discapacidades puedan
            navegar por la ciudad de manera segura y cómoda con información actualizada sobre la accesibilidad de los espacios públicos.`,
    image: "/rutaaccesible.png",
    technologies: ["React", "TypeScript", "Supabase", "Google Maps"],
    status: "Online",
    link: "https://rutaaccesible.site",
  },
  {
    title: "Quality Scout Movil",
    description: `Aplicación móvil innovadora diseñada para optimizar el control de calidad en la industria vinícola.
            Utiliza inteligencia artificial para identificar errores en etiquetas de vino con precisión y rapidez, 
            ademas de ser utilizada para generar informes y un chatbot de assitencia para el ususario.
            Además, permite escanear códigos de barras para consultar información detallada de los productos y realizar
            controles de manera ágil y eficiente.
            Su interfaz intuitiva y su enfoque automatizado garantizan un proceso de inspección más rápido, preciso y
            sin complicaciones.`,
    image: "/QualityScout.png",
    technologies: ["React Native", "TensorFlow", "ChartKit", "Stack AI", "Expo"],
    status: "Offline",
  },
  {
    title: "Quality Scout Web",
    description: `
            Plataforma web avanzada diseñada para optimizar la gestión de inventario y el control de calidad en la
            industria.
            Permite registrar, monitorear y administrar productos de manera eficiente, integrando inteligencia
            artificial para la generación automática de informes.
            Además, su sistema de análisis por cámara facilita la detección de errores en productos, agilizando los
            procesos de inspección y asegurando la precisión en los controles.
            Cuenta con un dashboard intuitivo que proporciona una visión completa y en tiempo real de los datos clave,
            mejorando la toma de decisiones y la trazabilidad de la información.
          `,
    image: "/QualityScoutWeb.png",
    technologies: ["HTML/CSS", "Javascript", "ASP.NET MVC", "ChartJS", "Stack AI", "TensorFlow"],
    status: "Offline",
  },

  {
    title: "Bolsa de Trabajo",
    description: `Plataforma web diseñada para conectar empleadores con trabajadores de manera rápida y eficiente.
            Facilita la publicación de ofertas de trabajo y la búsqueda de oportunidades laborales en un entorno
            accesible y dinámico.
            Con un diseño intuitivo y fácil de usar, garantiza una experiencia fluida tanto para empresas como para
            postulantes,
            convirtiéndola en una solución eficaz para agilizar el proceso de contratación.`
    ,
    image: "/bolsa.png",
    technologies: ["HTML/CSS", "Javascript", "ASP.NET MVC"],
    status: "Oflline",
  },
]

export default function Projects() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Partial<Proyecto>>({});

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden'; // Desactiva scroll
    } else {
      document.body.style.overflow = 'auto'; // Reactiva scroll
    }

    // Limpieza al desmontar o si showModal cambia
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showModal]);
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowModal(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);


  return (
    <>
      {showModal && createPortal(
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 backdrop-blur-sm animate-fade-in"
          onClick={() => setShowModal(false)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedProject.title ? `Detalles del proyecto ${selectedProject.title}` : 'Detalles del proyecto'}
        >
          <div
            className="relative w-full max-w-3xl mx-4 bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row border-2 animate-modal-pop"
            style={{ borderColor: paleta.primary }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Imagen */}
            <div
              className="md:w-1/2 w-full bg-gray-50 flex items-center justify-center p-6 border-b-2 md:border-b-0 md:border-r-2"
              style={{ backgroundColor: paleta.background, borderColor: paleta.primary }}
            >
              <img
                src={selectedProject.image}
                alt={selectedProject.title ? `Imagen del proyecto ${selectedProject.title}` : 'Imagen del proyecto'}
                className="object-contain max-h-80 rounded-2xl shadow-md border border-gray-200 bg-white"
              />
            </div>
            {/* Información */}
            <div className="md:w-1/2 w-full flex flex-col p-6 relative">
              {/* Cabecera */}
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-2xl font-bold text-gray-900">{selectedProject.title}</h3>
                <button
                  onClick={() => setShowModal(false)}
                  className="ml-2 p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors text-xl font-bold text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  aria-label="Cerrar modal"
                >
                  ×
                </button>
              </div>
              {/* Estado y tecnologías */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span
                  className={`px-3 py-1 rounded-2xl border text-xs font-semibold ${selectedProject.status === 'Online'
                    ? 'bg-green-100 text-green-800 border-green-400'
                    : 'bg-red-100 text-red-700 border-red-400'}`}
                >
                  {selectedProject.status === 'Online' ? (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 underline hover:text-green-900"
                      aria-label="Ver proyecto online"
                    >
                      Online
                    </a>
                  ) : (
                    'Offline'
                  )}
                </span>
                {selectedProject.technologies?.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-blue-50 rounded-2xl border border-blue-300 text-blue-700 text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {/* Descripción */}
              <div className="overflow-auto text-gray-700 text-sm leading-relaxed pr-2" style={{ maxHeight: '220px' }}>
                {selectedProject.description}
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
      <section id="projects" aria-labelledby="projects-title">
        <section className="w-full mx-auto my-5 p-5 bg-white rounded-2xl shadow-lg ">
          <h2 id="projects-title" className="text-4xl font-extrabold text-center mt-4 mb-5">MIS TRABAJOS</h2>
          <div className="xl:grid flex flex-col xl:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-5" role="list">
            {proyectos.slice(0, showAllProjects ? proyectos.length : 3).map((proyecto, index) => (
              <article key={index} className="relative bg-gray-100 border-2 border-amber-500 rounded-lg shadow-md overflow-hidden text-center" role="listitem">
                <img src={proyecto.image} className='max-h-96 w-full object-cover ' alt={`Imagen del proyecto ${proyecto.title}`} />
                <h3 className="text-xl font-bold py-2 text-white" style={{ backgroundColor: paleta.primary }}>{proyecto.title}</h3>
                <div className='flex justify-center items-center gap-2 text-sm mt-4 flex-wrap pointer-events-none'>
                  <p className={`px-3 rounded-2xl border ${proyecto.status == "Online" ? "bg-green-200 text-green-800 border-green-800 hover:scale-105 duration-75 " : "bg-red-200 text-red-700"}`} >{proyecto.status == "Online" ? (<a href={proyecto.link} className='flex items-center gap-1 cursor-pointer pointer-events-auto' aria-label={`Ver proyecto ${proyecto.title} online`}>Online  </a>) : "Offline"}</p>
                  {proyecto.technologies.map((tech, techIndex) => (
                    <p key={techIndex} className='px-3 bg-gray-200 rounded-2xl border border-blue-400 text-blue-400'>
                      {tech}
                    </p>
                  ))}
                </div>
                <p className="text-gray-700 mt-4 mb-12 px-4 text-justify truncate">{proyecto.description}</p>
                <button onClick={() => {
                  setSelectedProject(proyecto)
                  setShowModal(true);
                }}
                  className='text-white px-4 py-1 absolute right-0 bottom-0 cursor-pointer ' style={{ backgroundColor: paleta.primary }} aria-label={`Leer más sobre el proyecto ${proyecto.title}`}>Leer mas...</button>
              </article>
            ))}
            {!showAllProjects ? (
              <button
                onClick={() => setShowAllProjects(true)}
                className="col-span-3 bg-orange-400 text-white py-2 rounded-lg hover:bg-orange-500 transition duration-200 cursor-pointer"
                aria-label="Ver más proyectos"
              >
                Ver más proyectos
              </button>
            ) : (
              <button
                onClick={() => setShowAllProjects(false)}
                className="col-span-3 bg-orange-400 text-white py-2 rounded-lg hover:bg-orange-500 transition duration-200 cursor-pointer"
                aria-label="Ver menos proyectos"
              >
                Ver menos proyectos
              </button>)
            }
          </div>
        </section>
      </section>
    </>

  )


}
