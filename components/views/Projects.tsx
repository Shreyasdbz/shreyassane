import { useContext } from 'react'
// import { PortableText } from '@portabletext/react'

import { ProjectType } from '../../interfaces/schemas'
import { SanityContext } from '../../graphql/SanityContext'

import ErrorSection from '../util/ErrorSection'
import SectionHeader from '../base/SectionHeader'

const Projects = () => {
  const projects_context = useContext(SanityContext).projects
  const handleProject = useContext(SanityContext).handleProject

  let projects: ProjectType[] = []
  if (projects_context) {
    for (let p of projects_context) projects.push(p)
  }
  function compareCreatedAt(a: ProjectType, b: ProjectType) {
    if (a._createdAt > b._createdAt) {
      return -1
    }
    if (a._createdAt < b._createdAt) {
      return +1
    }
    return 0
  }
  projects?.sort(compareCreatedAt)

  if (projects === null) return <ErrorSection />

  return (
    <section
      className="section section-projects"
      id="section-projects"
      style={{ backgroundImage: 'url(/svgBackgrounds/topWave2.svg)' }}
    >
      <main>
        <SectionHeader>
          <span className="text-shadow text-slate-100">Projects</span>
        </SectionHeader>
        <div className="flex w-full flex-row flex-wrap items-center justify-center gap-3 lg:justify-start lg:gap-5">
          {projects.map((p) => {
            return (
              <div
                key={p._id}
                className="hover-bounce flex w-full flex-col items-center justify-center gap-2 rounded-2xl bg-slate-200 px-4 py-2 shadow-xl dark:bg-slate-600 dark:text-slate-100 md:gap-4 md:px-6 lg:w-fit"
                onClick={() => {
                  handleProject({ action: 'OPEN', proj: p })
                }}
              >
                <p className="text-xl font-semibold">{p.title}</p>
                <p className="text-lg font-semibold italic text-slate-600 dark:text-slate-400">{p.caption}</p>
                <div className="flex flex-wrap gap-2">
                  {p.technologies.map((t) => {
                    return (
                      <img
                        key={t._id}
                        src={t.icon.asset.url}
                        alt={t.name}
                        title={t.name}
                        className="h-10 w-10 rounded-xl px-2 py-2"
                      />
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </main>
    </section>
  )
}

export default Projects
