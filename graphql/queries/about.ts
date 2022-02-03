import { gql } from '@apollo/client'

export const GET_EXPERIENCE = gql`
  query {
    allExperience {
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
