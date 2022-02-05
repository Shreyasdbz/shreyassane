import { useContext } from 'react'
import { PortableText } from '@portabletext/react'

import { SanityContext } from '../../graphql/SanityContext'

import ErrorSection from './ErrorSection'
import ModalCloseButton from './ModalCloseButton'

const ModalExperience = () => {
  const activeExperience = useContext(SanityContext).activeExperience
  const handleExperience = useContext(SanityContext).handleExperience

  if (activeExperience === null) return <ErrorSection />

  return (
    <div className="modal-content">
      <div className="main-content">
        <p className="text-3xl font-semibold">{activeExperience.company}</p>
        <img
          src={activeExperience.logo.asset.url}
          alt={`${activeExperience.company} logo`}
          className="h-20 w-auto rounded-md bg-slate-100 object-cover p-2 shadow-md"
        />
        <p className="text-xl font-semibold">{activeExperience.position}</p>
        <p className="text-lg font-light">📍 {activeExperience.location}</p>
        <p className="text-xl font-semibold">
          {activeExperience.dateFrom} - {activeExperience.dateTill}
        </p>
        <p className="text-lg font-light">Technologies Used:</p>
        <div className="flex flex-wrap gap-2">
          {activeExperience.technologies.map((t) => {
            return (
              <img
                key={t._id}
                src={t.icon.asset.url}
                alt={t.name}
                title={t.name}
                className="h-12 w-12 rounded-full bg-slate-100 p-2 shadow-md"
              />
            )
          })}
        </div>
        <hr className="w-full max-w-lg  rounded-full border-slate-400" />
        <div className="flex w-full flex-col items-start justify-center gap-2 text-lg text-slate-800 dark:text-slate-100">
          <PortableText value={activeExperience.descRaw} />
        </div>
      </div>
      <ModalCloseButton
        onClick={() => {
          handleExperience({ action: 'CLOSE' })
        }}
      />
    </div>
  )
}
export default ModalExperience
