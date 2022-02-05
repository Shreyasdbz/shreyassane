import { useEffect, useState } from 'react'

import { client } from '../../graphql/apollo-client'
import { GET_PHOTOGRAPHY_PHOTOS } from '../../graphql/queries/photography'
import { PhotographyPhotoType } from '../../interfaces/schemas'
import SectionHeader from '../base/SectionHeader'

const Photography = () => {
  const [photos, setPhotos] = useState<PhotographyPhotoType[] | null>(null)

  const getData = async () => {
    const data_photography = await client.query({
      query: GET_PHOTOGRAPHY_PHOTOS,
    })
    setPhotos(data_photography.data.allPhotographyPhoto)
  }

  useEffect(() => {
    getData()
  }, [])

  if (photos === null) return <h1>Ran into an error :(</h1>

  return (
    <section
      className="section-photography"
      id="section-photography"
      style={{ backgroundImage: 'url(/svgBackgrounds/bottomWave2.svg)' }}
    >
      <main>
        <SectionHeader>
          <span className="text-shadow text-secondary-500">Photography</span>
        </SectionHeader>
      </main>
    </section>
  )
}

export default Photography
