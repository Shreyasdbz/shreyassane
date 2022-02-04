import { useContext } from 'react'
import { Link } from 'react-scroll'
import { HiArrowCircleDown } from 'react-icons/hi'
import { SanityContext } from '../../graphql/SanityContext'

import ErrorSection from '../util/ErrorSection'

const Hero = () => {
  const profilePicture = useContext(SanityContext).profilePicture

  if (profilePicture === null) return <ErrorSection />
  return (
    <section style={{ backgroundImage: 'url(/svgBackgrounds/topWave1.svg)' }}>
      <main className="main-hero">
        <div className="picture">
          <img
            src={profilePicture.imageContent.asset.url}
            alt={profilePicture.imageName}
            className="h-56 w-56 rounded-full object-cover shadow-xl md:h-72 md:w-72 xl:h-104 xl:w-104"
          />
        </div>
        <div className="actions mt-10 flex max-w-lg flex-col gap-2 dark:text-slate-100 md:gap-5">
          <p className="text-4xl font-semibold">Hi there!</p>
          <p className="text-6xl font-extrabold">I'm Shreyas</p>
          <p className="text-2xl font-light leading-loose">
            I{' '}
            <Link
              to="section-projects"
              smooth={true}
              className="action-link-btn whitespace-nowrap border-primary-500 bg-primary-500 shadow-lg shadow-primary-500/25 hover:text-primary-500 hover:shadow-none"
            >
              <span className="text-shadow">CODE 🖥</span>
            </Link>{' '}
            applications
          </p>
          <p className="text-2xl font-light leading-loose">
            and{' '}
            <Link
              to="section-photography"
              smooth={true}
              className="action-link-btn whitespace-nowrap border-secondary-500 bg-secondary-500 shadow-lg shadow-secondary-500/25 hover:text-secondary-500 hover:shadow-none"
            >
              <span className="text-shadow">CAPTURE 📸</span>
            </Link>{' '}
            adventures
          </p>
          <div className="mt-10 flex w-full items-center justify-center">
            <Link to="section-about" smooth={true} className="hover-bounce cursor-pointer">
              <HiArrowCircleDown className="text-4xl text-tertiary-500" />
            </Link>
          </div>
        </div>
      </main>
    </section>
  )
}

export default Hero
