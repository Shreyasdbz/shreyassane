import { ExperienceType, ProjectType } from './schemas'

type ModalCloseType = {
  action: 'CLOSE'
}

type ModalOpenExperienceType = {
  action: 'OPEN'
  exp: ExperienceType
}

type ModalOpenProjectType = {
  action: 'OPEN'
  proj: ProjectType
}

export type ModalExperienceType = ModalCloseType | ModalOpenExperienceType
export type ModalProjectType = ModalCloseType | ModalOpenProjectType
