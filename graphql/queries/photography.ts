import { gql } from '@apollo/client'

export const GET_PHOTOGRAPHY_PHOTOS = gql`
  query {
    allPhotographyPhoto {
      _id
      title
      photo {
        _key
        asset {
          url
        }
      }
    }
  }
`
