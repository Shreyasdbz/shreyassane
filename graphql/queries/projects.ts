import { gql } from '@apollo/client'

export const GET_PROJECTS = gql`
  query {
    allProject {
      _id
      _createdAt
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
          _key
          asset {
            url
          }
        }
      }
    }
  }
`
