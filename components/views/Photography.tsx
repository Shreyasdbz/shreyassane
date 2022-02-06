import { useContext } from 'react'
import { RiUnsplashFill } from 'react-icons/ri'
import { RiInstagramFill } from 'react-icons/ri'
import { RiYoutubeFill } from 'react-icons/ri'

import { SanityContext } from '../../graphql/SanityContext'

import SectionHeader from '../base/SectionHeader'
import ErrorSection from '../util/ErrorSection'

const Photography = () => {
  const photos = useContext(SanityContext).photographyPhotos

  if (photos === null) return <ErrorSection />

  return (
    <section
      className="section-photography"
      id="section-photography"
      style={{ backgroundImage: 'url(/svgBackgrounds/bottomWave2.svg)' }}
    >
      <main>
        <SectionHeader>
          <span className="text-shadow text-secondary-500">Photography</span>
        </SectionHeader>
        <div className="flex w-full flex-row flex-wrap items-center justify-start gap-1 md:gap-3">
          {photos.map((p) => {
            try {
              if (p.photo.asset.url) {
                return (
                  <img
                    key={p._id}
                    src={p.photo.asset.url}
                    alt={p.title}
                    title={p.title}
                    className="h-auto w-full max-w-3xs rounded-md md:max-w-2xs md:hover:scale-110"
                  />
                )
              }
            } catch (err) {
              console.log("Couldn't find url for: ", p.title)
            }
          })}
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-4 md:flex-row">
          <p className="text-xl font-bold text-slate-600 dark:text-slate-300">
            Check out my entire Unsplash portfolio here:
          </p>
          <a href="https://unsplash.com/@shreyasdbz" target={'_blank'} rel="noreferrer">
            <button className="hover-bounce flex flex-row  items-center justify-center gap-2 rounded-xl bg-slate-100 px-6 py-2 font-semibold shadow-xl">
              <RiUnsplashFill /> Unsplash
            </button>
          </a>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-4 md:flex-row">
          <p className="text-xl font-bold text-slate-600 dark:text-slate-300">Check out my Instagram feed here: </p>
          <a href="https://www.instagram.com/itShreyas/" target={'_blank'} rel="noreferrer">
            <button className="hover-bounce flex flex-row  items-center justify-center gap-2 rounded-xl bg-slate-100 px-6 py-2 font-semibold shadow-xl">
              <RiInstagramFill /> Instagram
            </button>
          </a>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-4 md:flex-row">
          <p className="text-xl font-bold text-slate-600 dark:text-slate-300">And my YouTube channel: </p>
          <a href="https://www.youtube.com/c/ShreyasSane" target={'_blank'} rel="noreferrer">
            <button className="hover-bounce flex flex-row  items-center justify-center gap-2 rounded-xl bg-slate-100 px-6 py-2 font-semibold shadow-xl">
              <RiYoutubeFill /> Youtube
            </button>
          </a>
        </div>
      </main>
    </section>
  )
}

export default Photography
