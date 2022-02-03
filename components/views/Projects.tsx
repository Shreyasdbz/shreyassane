import { useContext } from 'react'
// import { PortableText } from '@portabletext/react'
import { SanityContext } from '../../graphql/SanityContext'
import SectionHeader from '../base/SectionHeader'

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
        <SectionHeader>
          <span className="text-slate-900 dark:text-slate-100">Projects</span>
        </SectionHeader>
      </main>
    </section>
  )
}

export default Projects
