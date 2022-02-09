import { useContext } from 'react'
import { PortableText } from '@portabletext/react'

import { SanityContext } from '../../graphql/SanityContext'

import ErrorSection from './ErrorSection'
import ModalCloseButton from './ModalCloseButton'

const ModalProject = () => {
  const activeProject = useContext(SanityContext).activeProject
  const handleProject = useContext(SanityContext).handleProject

  let link_exists: boolean = false
  let descRaw_exists: boolean = false
  let images_exists: boolean = false
  let technologies_exists: boolean = false

  try {
    if (activeProject?.link) link_exists = true
  } catch (err) {}
  try {
    if (activeProject?.descRaw) descRaw_exists = true
  } catch (err) {}
  try {
    if (activeProject?.images) images_exists = true
  } catch (err) {}
  try {
    if (activeProject?.technologies) technologies_exists = true
  } catch (err) {}

  if (activeProject === null) return <ErrorSection />

  return (
    <div className="modal-content">
      <div className="main-content">
        <p className="text-3xl font-semibold">{activeProject.title}</p>
        <p className="text-lg font-semibold italic text-slate-600 dark:text-slate-400">{activeProject.caption}</p>
        {link_exists && (
          <div className="flex flex-col items-center justify-center gap-2 md:flex-row">
            <p className="font-bold">Project Link:</p>
            <a
              href={activeProject.link}
              target={'_blank'}
              rel="noreferrer"
              className="hover-bounce rounded-xl  bg-primary-500 px-10 py-2 text-lg font-light text-slate-100 shadow-lg"
            >
              {activeProject.title}
            </a>
          </div>
        )}

        {images_exists && (
          <div className="images flex flex-row items-center justify-start gap-2 overflow-x-scroll py-5">
            {activeProject.images.map((i) => {
              return (
                <img
                  key={i.asset.url}
                  src={i.asset.url}
                  alt={`${activeProject.title} image`}
                  className="h-auto w-full max-w-sm shadow-xl"
                />
              )
            })}
          </div>
        )}

        {technologies_exists && (
          <>
            <p className="text-lg font-light">Technologies Used:</p>
            <div className="flex flex-wrap gap-2">
              {activeProject.technologies.map((t) => {
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
          </>
        )}

        {descRaw_exists && (
          <>
            <hr className="w-full max-w-lg  rounded-full border-slate-400" />
            <div className="flex w-full flex-col items-start justify-center gap-2 text-lg text-slate-800 dark:text-slate-100">
              <PortableText value={activeProject.descRaw} />
            </div>
          </>
        )}
      </div>
      <ModalCloseButton
        onClick={() => {
          handleProject({ action: 'CLOSE' })
        }}
      />
    </div>
  )
}
export default ModalProject
