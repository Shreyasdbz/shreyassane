import { useContext } from 'react'

import { SanityContext } from '../../graphql/SanityContext'

import SectionHeader from '../base/SectionHeader'
import SectionCaption from '../base/SectionCaption'
import ErrorSection from '../util/ErrorSection'

const Contact = () => {
  const contact = useContext(SanityContext).contact

  if (contact === null) return <ErrorSection />

  console.log(contact)

  return (
    <section
      className="section-contact"
      id="section-contact"
      style={{ backgroundImage: 'url(/svgBackgrounds/topWave3.svg)' }}
    >
      <main className="main-contact justify-center">
        <SectionHeader>
          <span className="text-shadow text-slate-100">Contact</span>
        </SectionHeader>
        <SectionCaption>
          <span className="font-semibold">And lastly, I can be reached out to on all these platforms :)</span>
        </SectionCaption>
        <div className="flex w-full flex-col items-center justify-center gap-4 md:flex-row">
          {contact.map((c) => {
            return (
              <a
                key={c._id}
                href={c.link}
                target={'_blank'}
                rel="noreferrer"
                className="hover-bounce flex w-full flex-row items-center justify-start gap-4 rounded-xl bg-slate-100 px-2 py-2 shadow-xl md:flex-col"
              >
                <img src={c.icon.asset.url} alt={`${c.siteName} logo`} className="h-12 w-12" />
                <p className="text-md font-semibold">{c.siteName}</p>
              </a>
            )
          })}
        </div>
      </main>
    </section>
  )
}

export default Contact
