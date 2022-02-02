import { gql } from '@apollo/client'

export const GET_PROJECTS = gql`
  query {
    allProject {
      _id
      title
      caption
      link
      descRaw
      images {
        _key
        asset {
          url
        }
      }
      technologies {
        _id
        name
        icon {
          asset {
            url
          }
        }
      }
    }
  }
`
