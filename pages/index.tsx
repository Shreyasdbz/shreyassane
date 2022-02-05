import { useContext } from 'react'

import { SanityContext } from '../graphql/SanityContext'

import About from '../components/views/About'
import Contact from '../components/views/Contact'
import Hero from '../components/views/Hero'
import Photography from '../components/views/Photography'
import Projects from '../components/views/Projects'
import Modal from '../components/base/Modal'
import ModalExperience from '../components/util/ModalExperience'
import ModalProject from '../components/util/ModalProject'

export default function Home() {
  const modalActive = useContext(SanityContext).modalActive
  const activeExperience = useContext(SanityContext).activeExperience
  const activeProject = useContext(SanityContext).activeProject

  return (
    <>
      {/* Modals */}
      {modalActive && activeExperience && !activeProject && (
        <Modal>
          <ModalExperience />
        </Modal>
      )}
      {modalActive && !activeExperience && activeProject && (
        <Modal>
          <ModalProject />
        </Modal>
      )}
      {/* Blur layer */}
      {modalActive && (activeExperience || activeProject) && <div className="blur-layer" />}
      {/* Views */}
      <div className="page-container z-0 bg-slate-100 dark:bg-slate-800">
        <Hero />
        <About />
        <Projects />
        <Photography />
        <Contact />
      </div>
    </>
  )
}
