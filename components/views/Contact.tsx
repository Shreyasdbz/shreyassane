import SectionHeader from '../base/SectionHeader'
import SectionCaption from '../base/SectionCaption'

const Contact = () => {
  return (
    <section
      className="section section-contact"
      id="section-contact"
      style={{ backgroundImage: 'url(/svgBackgrounds/topWave3.svg)' }}
    >
      <main>
        <SectionHeader>
          <span className="text-shadow text-slate-100">About</span>
        </SectionHeader>
        <SectionCaption>
          <span className="font-semibold">And lastly, I can be reached out to on all these platforms :)</span>
        </SectionCaption>
      </main>
    </section>
  )
}

export default Contact
