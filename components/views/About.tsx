import { useContext } from 'react'
import { PortableText } from '@portabletext/react'

import { ExperienceType } from '../../interfaces/schemas'
import { SanityContext } from '../../graphql/SanityContext'

import ErrorSection from '../util/ErrorSection'
import SectionHeader from '../base/SectionHeader'
import SectionCaption from '../base/SectionCaption'

const About = () => {
  const bio = useContext(SanityContext).bio
  const experience_context = useContext(SanityContext).experience
  const skills = useContext(SanityContext).skills
  const handleExperience = useContext(SanityContext).handleExperience

  let experience: ExperienceType[] = []
  if (experience_context) {
    for (let e of experience_context) experience.push(e)
  }

  function compareCreatedAt(a: ExperienceType, b: ExperienceType) {
    if (a._createdAt > b._createdAt) {
      return -1
    }
    if (a._createdAt < b._createdAt) {
      return +1
    }
    return 0
  }
  experience?.sort(compareCreatedAt)

  if (bio === null || experience === null || skills === null) return <ErrorSection />

  return (
    <section id="section-about" style={{ backgroundImage: 'url(/svgBackgrounds/bottomWave1.svg)' }}>
      <main style={{ backgroundImage: 'url(/svgBackgrounds/randomDots.svg)' }}>
        <SectionHeader>
          <span className="text-secondary-500">About</span>
        </SectionHeader>
        <div className="flex w-full flex-col items-start justify-center gap-2 text-lg font-semibold text-slate-800 dark:text-slate-100">
          <PortableText value={bio.textContentRaw} />
        </div>
        <SectionCaption>
          <span>My Experience</span>
        </SectionCaption>
        <div className="experiences flex w-full flex-row flex-wrap items-center justify-center gap-3 lg:justify-start lg:gap-5">
          {experience.map((e) => {
            return (
              <div
                key={e._id}
                className="experience-card hover-bounce flex w-full flex-row items-center justify-start gap-2 rounded-2xl bg-slate-200 px-4 py-2 shadow-xl dark:bg-slate-600 dark:text-slate-100 md:gap-4 md:px-6 lg:w-fit  lg:flex-row "
                onClick={() => {
                  handleExperience({ action: 'OPEN', exp: e })
                }}
              >
                <div className="left">
                  <img
                    src={e.logo.asset.url}
                    alt={`e.company logo`}
                    className=" h-12 w-12 rounded-full bg-slate-100 object-cover shadow-xl md:h-16 md:w-16"
                  />
                </div>
                <div className="vertical-divider"></div>
                <div className="right flex flex-col items-start justify-center">
                  <p className="float-left text-xl font-semibold">{e.company}</p>
                  <p className="float-left text-lg font-semibold text-slate-600 dark:text-slate-400">{e.position}</p>
                  <p className="float-left font-bold text-slate-800 dark:text-slate-200">📍 {e.location}</p>
                  <p className="float-left font-light text-slate-700 dark:text-slate-300">
                    {e.dateFrom} - {e.dateTill}
                  </p>
                </div>
                <div className="technologies hidden max-w-sm flex-wrap gap-2">
                  {e.technologies.map((t) => {
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
        </div>{' '}
        <SectionCaption>
          <span>My Core Skills</span>
        </SectionCaption>
        <div className="flex w-full flex-row flex-wrap items-center justify-start gap-2">
          {skills.map((s) => {
            return (
              <div key={s._id}>
                <img
                  src={s.icon.asset.url}
                  title={s.name}
                  alt={s.name}
                  className="h-12 w-12 rounded-xl bg-slate-200 p-2 shadow-lg md:hover:-translate-y-0.5"
                />
              </div>
            )
          })}
        </div>
      </main>
    </section>
  )
}

export default About
