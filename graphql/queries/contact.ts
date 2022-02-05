import { gql } from '@apollo/client'

export const GET_CONTACT = gql`
  query {
    allContact {
      _id
      siteName
      link
      icon {
        asset {
          url
        }
      }
    }
  }
`
