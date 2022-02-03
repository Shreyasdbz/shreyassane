import { gql } from '@apollo/client'

export const GET_PROFILE_PICTURE = gql`
  query {
    allSiteImage(where: { imageName: { eq: "profilePicture" } }) {
      _id
      imageName
      imageContent {
        _key
        asset {
          url
        }
      }
    }
  }
`
