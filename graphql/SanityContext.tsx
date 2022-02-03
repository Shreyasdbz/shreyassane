import { useState, createContext, useEffect } from 'react'

import { SiteTextType, SiteImageType, ExperienceType, ProjectType, PhotographyPhotoType } from '../interfaces/schemas'
import { client } from './apollo-client'
import { GET_PROFILE_PICTURE } from './queries/siteImage'
import { GET_BIO } from './queries/siteText'
import { GET_EXPERIENCE } from './queries/about'
import { GET_PROJECTS } from './queries/projects'
import { GET_PHOTOGRAPHY_PHOTOS } from './queries/photography'

type ShortsContextType = {
  profilePicture: SiteImageType | null
  bio: SiteTextType | null
  experience: ExperienceType[] | null
  projects: ProjectType[] | null
  photographyPhotos: PhotographyPhotoType[] | null
  //   handleExperience: () => void
  //   handleProject: () => void
  //   hanndlePhotographyPhoto: () => void
}
export const SanityContext = createContext({} as ShortsContextType)

type SanityContextProviderProps = {
  children: React.ReactElement | React.ReactElement[]
}
export const SanityContextProvider = ({ children }: SanityContextProviderProps) => {
  const [profilePicture, setProfilePicture] = useState<SiteImageType | null>(null)
  const [bio, setBio] = useState<SiteTextType | null>(null)
  const [experience, setExperience] = useState<ExperienceType[] | null>(null)
  const [projects, setProjects] = useState<ProjectType[] | null>(null)
  const [photographyPhotos, setPhotographyPhotos] = useState<PhotographyPhotoType[] | null>(null)

  async function getData() {
    const _profilePicture = await client.query({
      query: GET_PROFILE_PICTURE,
    })
    const _bio = await client.query({
      query: GET_BIO,
    })
    const _experience = await client.query({
      query: GET_EXPERIENCE,
    })
    const _projects = await client.query({
      query: GET_PROJECTS,
    })
    const _photographyPhotos = await client.query({
      query: GET_PHOTOGRAPHY_PHOTOS,
    })

    setBio(_bio.data.allSiteText[0])
    setExperience(_experience.data.allExperience)
    setProfilePicture(_profilePicture.data.allSiteImage[0])
    setProjects(_projects.data.allProject)
    setPhotographyPhotos(_photographyPhotos.data.allPhotographyPhoto)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <SanityContext.Provider value={{ profilePicture, bio, experience, projects, photographyPhotos }}>
      {children}
    </SanityContext.Provider>
  )
}
