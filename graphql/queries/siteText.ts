import { gql } from '@apollo/client'

export const GET_BIO = gql`
  query {
    allSiteText(where: { textName: { eq: "bio" } }) {
      textName
      textContentRaw
    }
  }
`
