import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Resume from './components/Resume'
import RevealOnScroll from './components/RevealOnScroll'
import "./App.css"

export const paleta = {
  primary: '#FF971D', // naranja 
  secondary: '#F9F6F7', // blanco-crema
  background: '#FFE8D6', // naranja claro-crema
  text: '#111827', // gris oscuro
  border: '#D1D5DB', // gris medio
  accent: '#2563EB' // azul
}


function App() {

  return (
    <div className='flex flex-col items-center  min-h-scree' style={{ backgroundColor: paleta.background }}>
      <div className="w-full fixed top-0 z-50" style={{ backgroundColor: paleta.background }}>
        <Header />
      </div>
      <main className="xl:w-8/12 w-11/12">
        <RevealOnScroll>
          <About />
        </RevealOnScroll>
        <RevealOnScroll>
          <Projects />
        </RevealOnScroll>
        <RevealOnScroll>
          <Resume />
        </RevealOnScroll>
        <RevealOnScroll>
          <Contact />
        </RevealOnScroll>
      </main>
    </div>
  )
}

export default App 
