import { useContext } from 'react'
// import { PortableText } from '@portabletext/react'
import { SanityContext } from '../../graphql/SanityContext'

const Projects = () => {
  const projects = useContext(SanityContext).projects

  if (projects === null) return <h1>Ran into an error :(</h1>

  return (
    <section
      className="section section-projects"
      id="section-projects"
      style={{ backgroundImage: 'url(/svgBackgrounds/topWave2.svg)' }}
    >
      <main>
        <div>
          <h1>Projects!!</h1>
        </div>
      </main>
    </section>
  )
}

export default Projects
