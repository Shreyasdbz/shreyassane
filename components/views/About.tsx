import { PortableText } from '@portabletext/react'
import { useContext } from 'react'
import { SanityContext } from '../../graphql/SanityContext'

const About = () => {
  const bio = useContext(SanityContext).bio
  const experience = useContext(SanityContext).experience

  if (bio === null || experience === null) return <h1>Ran into an error :(</h1>

  return (
    <section id="section-about" style={{ backgroundImage: 'url(/svgBackgrounds/bottomWave1.svg)' }}>
      <main>
        <PortableText value={bio.textContentRaw} />
      </main>
    </section>
  )
}

export default About
