import { useContext } from 'react';
import Image from 'next/image';

import { SanityContext } from '../../graphql/SanityContext';

const Hero = () => {
  const profilePicture = useContext(SanityContext).profilePicture;

  if (profilePicture === null) return null;

  return (
    <main className="grid min-h-screen w-screen grid-rows-2 overflow-hidden lg:grid-cols-2">
      <div className="flex w-full items-center justify-center lg:min-h-screen">
        <div className="relative w-32 rounded-full border-l-8 border-r-8 border-primary-300 outline-none lg:w-64">
          <Image
            src={profilePicture.imageContent.asset.url}
            alt="profile picture"
            layout="responsive"
            width={300}
            height={804}
            objectFit="contain"
            className="profilePictureImage"
            priority
          />
        </div>
      </div>
      <div className="flex h-full w-full flex-col items-center justify-center lg:items-start ">
        <div className="flex flex-col items-start justify-center">
          <div className="text-2xl font-light lg:text-6xl">Hi there!</div>
          <div className="text-4xl font-extrabold lg:text-8xl">I'm Shreyas</div>
        </div>
        <div className="flex flex-col items-start justify-center text-lg">
          <div className="my-2">
            I{' '}
            <button className="cursor-pointer rounded-xl border-2 border-secondary-500 px-2 py-0.5 font-bold outline-none">
              CODE
            </button>{' '}
            Applications
          </div>
          <div>
            &{' '}
            <button className="cursor-pointer rounded-xl border-2 border-tertiary-500 px-2 py-0.5 font-bold outline-none">
              CAPTURE
            </button>{' '}
            Adventures
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
