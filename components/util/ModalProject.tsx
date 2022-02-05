import { useContext } from 'react'
import { SanityContext } from '../../graphql/SanityContext'

import ErrorSection from './ErrorSection'

const ModalProject = () => {
  const activeProject = useContext(SanityContext).activeProject
  const handleProject = useContext(SanityContext).handleProject

  if (activeProject === null) return <ErrorSection />

  return (
    <div className="modal-content">
      <div>{activeProject.title}</div>
      <div>{activeProject.caption}</div>
      <button
        onClick={() => {
          handleProject({ action: 'CLOSE' })
        }}
      >
        close
      </button>
    </div>
  )
}
export default ModalProject
