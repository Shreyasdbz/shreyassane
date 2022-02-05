import { gql } from '@apollo/client'

export const GET_EXPERIENCE = gql`
  query {
    allExperience {
      _id
      _createdAt
      company
      position
      dateFrom
      dateTill
      location
      descRaw
      logo {
        asset {
          url
        }
      }
      technologies {
        _id
        name
        icon {
          _key
          asset {
            url
          }
        }
      }
    }
  }
`

export const GET_SKILLS = gql`
  query {
    allTechnology(where: { displaySkill: { eq: true } }) {
      _id
      name
      icon {
        _key
        asset {
          url
        }
      }
    }
  }
`
