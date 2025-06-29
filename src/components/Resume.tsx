export default function Resume() {
    const stack = [
        { name: 'React', icon: 'react' },
        { name: 'TypeScript', icon: 'typescript' },
        { name: 'JavaScript', icon: 'javascript' },
        { name: 'Python', icon: 'python' },
        { name: 'HTML5', icon: 'html5' },
        { name: 'CSS3', icon: 'css3' },
        { name: 'TailwindCSS', icon: 'tailwindcss' },
        { name: 'SASS', icon: 'sass' },
        { name: 'Node.js', icon: 'nodejs' },
        { name: 'NestJS', icon: 'nestjs' },
        { name: 'ASP.NET MVC', icon: 'aspnet' },
        { name: 'Edge Functions (Supabase)', icon: 'supabase' },
        { name: 'PostgreSQL', icon: 'postgresql' },
        { name: 'MySQL', icon: 'mysql' },
        { name: 'SQL Server', icon: 'sqlserver' },
        { name: 'Supabase', icon: 'supabase' },
        { name: 'Git', icon: 'git' },
        { name: 'GitHub', icon: 'github' },
        { name: 'VS Code', icon: 'vscode' },
        { name: 'Postman', icon: 'postman' },
        { name: 'Figma', icon: 'figma' },
        { name: 'Canva', icon: 'canva' },

    ];
    return (
        <section id="resume" className="w-full my-10" aria-labelledby="resume-title">
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-8 md:flex-row md:gap-12 items-center">
                {/* Bloque de Presentación */}
                <div className="flex flex-col items-center md:items-start md:w-1/3">
                    <div className="rounded-full border-4 border-amber-400 size-40 mb-4 flex items-center justify-center overflow-hidden">
                        <img src="/perfil.jpg" alt="Foto de perfil de Antonio Cortés, desarrollador full stack" className="object-cover w-full h-full" />
                    </div>
                    <h2 id="resume-title" className="text-2xl font-bold text-gray-900">Antonio Cortés Sotelo</h2>
                    <p className="text-lg text-gray-700 mt-1">Desarrollador Full Stack</p>
                    <p className="text-sm text-gray-500 mt-2 text-center md:text-left">
                        Ingeniero en Informática con experiencia en proyectos web freelance y académicos. Apasionado por la tecnología, el aprendizaje constante y la construcción de soluciones eficientes con tecnologías modernas. Motivado para crecer en entornos colaborativos y enfocado en buenas prácticas.
                    </p>
                    <div className="mt-4 w-full">
                        <h3 className="text-md font-semibold text-amber-600 mb-1">Stack Tecnológico</h3>
                        <ul className="text-xs text-gray-700 list-disc list-inside" aria-label="Stack tecnológico">
                            <li>Frontend: React, TypeScript, JavaScript, HTML5, CSS3, TailwindCSS, SASS</li>
                            <li>Backend: Node.js, NestJS, ASP.NET MVC, Edge Functions (Supabase)</li>
                            <li>Bases de datos: PostgreSQL, MySQL, SQL Server, Supabase</li>
                            <li>Herramientas: Git, GitHub, VS Code, Postman, Figma, Canva</li>
                        </ul>
                    </div>
                    <a
                        href="/cv_Antonio.pdf"
                        download
                        className="mt-4 px-5 py-2 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors text-sm"
                        aria-label="Descargar currículum de Antonio Cortés"
                    >
                        Descargar CV
                    </a>
                </div>

                {/* Bloque de Experiencia y Educación */}
                <div className="flex-1 flex flex-col gap-6 w-full">
                    {/* Experiencia */}
                    <div>
                        <h3 className="text-xl font-semibold text-amber-600 mb-2">Experiencia</h3>
                        <ul className="space-y-2" aria-label="Experiencia profesional">
                            <li>
                                <span className="font-bold">Práctica Profesional – Ilustre Municipalidad de Curicó</span> (Mar 2025 - Jun 2025)
                                <p className="text-gray-600 text-sm">Proyecto "Ruta Accesible": Lideré el desarrollo de una aplicación web inclusiva para mapear lugares accesibles en Curicó, usando React, TypeScript, Supabase y Google Maps.</p>
                            </li>
                            <li>
                                <span className="font-bold">Soporte TI y Desarrollador Full Stack Freelance</span> (Ene 2020 - Nov 2024)
                                <p className="text-gray-600 text-sm">Desarrollo de aplicaciones web (e-commerce y sitios estáticos), automatización de procesos y soporte técnico a empresas y particulares.</p>
                            </li>
                        </ul>
                    </div>
                    {/* Educación */}
                    <div>
                        <h3 className="text-xl font-semibold text-amber-600 mb-2">Formación Académica</h3>
                        <ul className="space-y-2" aria-label="Formación académica">
                            <li>
                                <span className="font-bold">Ingeniería en Informática</span> - Instituto Profesional INACAP, Curicó (2021 - 2024)
                                <br />Tesis: Quality Scout Multiplatform (React Native + ASP.NET MVC + SQL SERVER)
                            </li>
                        </ul>
                    </div>
                    {/* Certificaciones */}
                    <div>
                        <h3 className="text-xl font-semibold text-amber-600 mb-2">Certificaciones</h3>
                        <ul className="space-y-2" aria-label="Certificaciones obtenidas">
                            <li>
                                <a href="https://www.credly.com/users/antonio-cortes.4d869495/badges#credly" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline font-bold">JavaScript Essentials 2</a> – Cisco (Enero 2025)
                            </li>
                            <li>
                                <a href="https://www.credly.com/users/antonio-cortes.4d869495/badges#credly" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline font-bold">AWS Academy Graduate - AWS Academy Machine Learning Foundations</a> – Amazon Web Services Training and Certification (Diciembre 2024)
                            </li>
                            <li>
                                <a href="https://www.credly.com/users/antonio-cortes.4d869495/badges#credly" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline font-bold">Python Essentials 2</a> – Cisco (Junio 2023)
                            </li>
                            <li>
                                <a href="https://www.credly.com/users/antonio-cortes.4d869495/badges#credly" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline font-bold">Computer Hardware Basics</a> – Cisco (Junio 2023)
                            </li>
                            <li>
                                <a href="https://www.credly.com/users/antonio-cortes.4d869495/badges#credly" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline font-bold">Networking Basics</a> – Cisco (Mayo 2023)
                            </li>
                            <li>
                                <a href="https://www.credly.com/users/antonio-cortes.4d869495/badges#credly" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline font-bold">Networking Academy Learn-A-Thon 2023</a> – Cisco (Mayo 2023)
                            </li>
                            <li>
                                <a href="https://www.credly.com/users/antonio-cortes.4d869495/badges#credly" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline font-bold">Operating Systems Basics</a> – Cisco (Mayo 2023)
                            </li>
                            <li>
                                <a href="https://www.credly.com/users/antonio-cortes.4d869495/badges#credly" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline font-bold">Python Essentials 1</a> – Cisco (Mayo 2023)
                            </li>
                            <li>
                                <a href="https://www.credly.com/users/antonio-cortes.4d869495/badges#credly" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline font-bold">Introduction to IoT</a> – Cisco (Mayo 2023)
                            </li>
                        </ul>
                    </div>
                    {/* Habilidades */}
                    <div>
                        <h3 className="text-xl font-semibold text-amber-600 mb-2">Habilidades</h3>
                        <div className="flex flex-wrap gap-2" aria-label="Habilidades técnicas">
                            {stack.map((tech, idx) => (
                                <span key={idx} className="px-3 py-1 bg-gray-200 rounded-2xl text-blue-700 text-sm font-medium border border-blue-300">
                                    {tech.name}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}