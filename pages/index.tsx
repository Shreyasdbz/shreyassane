// External lib

// Base UI Components

// Extracted UI Components
import About from '../components/views/About'
import Contact from '../components/views/Contact'
import Hero from '../components/views/Hero'
import Photography from '../components/views/Photography'
import Projects from '../components/views/Projects'

export default function Home() {
  return (
    <div className="page-container">
      <Hero />
      <About />
      <Projects />
      <Photography />
      <Contact />
    </div>
  )
}
