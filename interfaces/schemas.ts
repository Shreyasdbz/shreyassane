type SanityImageType = {
  _key: string
  asset: {
    url: string
  }
}

export type SiteTextType = {
  _id: string
  textName: string
  textContentRaw: any // Portable Text
}

export type SiteImageType = {
  _id: string
  imageName: string
  imageContent: SanityImageType
}

export type TechnologyType = {
  _id: string
  name: string
  icon: SanityImageType
}

export type ExperienceType = {
  _id: string
  _createdAt: string
  company: string
  position: string
  dateFrom: string
  dateTill: string
  location: string
  logo: SanityImageType
  technologies: TechnologyType[]
  descRaw: any // Portable Text
}

export type ProjectType = {
  _id: string
  title: string
  caption: string
  link: string
  descRaw: any
  images: SanityImageType[]
  technologies: TechnologyType[]
}

export type PhotographyPhotoType = {
  _id: string
  title: string
  photo: SanityImageType
}
