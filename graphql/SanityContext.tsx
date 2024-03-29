import { useState, createContext, useEffect } from 'react'

import {
  SiteTextType,
  SiteImageType,
  ExperienceType,
  TechnologyType,
  ProjectType,
  PhotographyPhotoType,
  ContactType,
} from '../interfaces/schemas'
import { ModalExperienceType, ModalProjectType } from '../interfaces/modal'
import { client } from './apollo-client'
import { GET_PROFILE_PICTURE } from './queries/siteImage'
import { GET_BIO } from './queries/siteText'
import { GET_EXPERIENCE, GET_SKILLS } from './queries/about'
import { GET_PROJECTS } from './queries/projects'
import { GET_PHOTOGRAPHY_PHOTOS } from './queries/photography'
import { GET_CONTACT } from './queries/contact'

type ShortsContextType = {
  profilePicture: SiteImageType | null
  bio: SiteTextType | null
  experience: ExperienceType[] | null
  skills: TechnologyType[] | null
  projects: ProjectType[] | null
  photographyPhotos: PhotographyPhotoType[] | null
  contact: ContactType[] | null
  modalActive: boolean
  activeExperience: ExperienceType | null
  activeProject: ProjectType | null
  handleExperience: (payload: ModalExperienceType) => void
  handleProject: (payload: ModalProjectType) => void
  //   hanndlePhotographyPhoto: () => void
}
export const SanityContext = createContext({} as ShortsContextType)

type SanityContextProviderProps = {
  children: React.ReactElement | React.ReactElement[]
}
export const SanityContextProvider = ({ children }: SanityContextProviderProps) => {
  // Fetched data
  const [profilePicture, setProfilePicture] = useState<SiteImageType | null>(null)
  const [bio, setBio] = useState<SiteTextType | null>(null)
  const [experience, setExperience] = useState<ExperienceType[] | null>(null)
  const [skills, setSkills] = useState<TechnologyType[] | null>(null)
  const [projects, setProjects] = useState<ProjectType[] | null>(null)
  const [photographyPhotos, setPhotographyPhotos] = useState<PhotographyPhotoType[] | null>(null)
  const [contact, setContact] = useState<ContactType[] | null>(null)

  // Modal data
  const [modalActive, setModalActive] = useState<boolean>(false)
  const [activeExperience, setActiveExperience] = useState<ExperienceType | null>(null)
  const [activeProject, setActiveProject] = useState<ProjectType | null>(null)

  async function getData() {
    const _profilePicture = await client.query({
      query: GET_PROFILE_PICTURE,
    })
    setProfilePicture(_profilePicture.data.allSiteImage[0])

    const _bio = await client.query({
      query: GET_BIO,
    })
    setBio(_bio.data.allSiteText[0])

    const _experience = await client.query({
      query: GET_EXPERIENCE,
    })
    setExperience(_experience.data.allExperience)

    const _skills = await client.query({
      query: GET_SKILLS,
    })
    setSkills(_skills.data.allTechnology)

    const _projects = await client.query({
      query: GET_PROJECTS,
    })
    setProjects(_projects.data.allProject)

    const _photographyPhotos = await client.query({
      query: GET_PHOTOGRAPHY_PHOTOS,
    })
    setPhotographyPhotos(_photographyPhotos.data.allPhotographyPhoto)

    const _contact = await client.query({
      query: GET_CONTACT,
    })
    setContact(_contact.data.allContact)
  }

  function handleExperience(payload: ModalExperienceType) {
    if (payload.action === 'OPEN') {
      setActiveExperience(payload.exp)
      setModalActive(true)
    } else if (payload.action === 'CLOSE') {
      setModalActive(false)
      setActiveExperience(null)
    }
  }

  function handleProject(payload: ModalProjectType) {
    if (payload.action === 'OPEN') {
      setActiveProject(payload.proj)
      setModalActive(true)
    } else if (payload.action === 'CLOSE') {
      setModalActive(false)
      setActiveProject(null)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <SanityContext.Provider
      value={{
        profilePicture,
        bio,
        experience,
        skills,
        projects,
        photographyPhotos,
        contact,
        modalActive,
        activeExperience,
        activeProject,
        handleExperience,
        handleProject,
      }}
    >
      {children}
    </SanityContext.Provider>
  )
}
