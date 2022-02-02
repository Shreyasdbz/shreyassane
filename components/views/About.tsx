import { useEffect, useState } from 'react'
import { client } from '../../graphql/apollo-client'

import { GET_BIO } from '../../graphql/queries/siteText'
import { SiteText } from '../../interfaces/schemas'

import SectionContainer from '../base/SectionContainer'

const About = () => {
  const [bio, setBio] = useState<SiteText | null>(null)

  const getData = async () => {
    const data_bio = await client.query({
      query: GET_BIO,
    })
    setBio(data_bio.data.allSiteText[0])
  }

  useEffect(() => {
    getData()
  })

  if (bio === null) return <h1>Ran into an error :(</h1>

  return (
    <SectionContainer>
      <div>
        <p>About!</p>
      </div>
    </SectionContainer>
  )
}

export default About
