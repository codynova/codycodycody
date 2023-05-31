import { Back } from '../../components/Back'
import { Section } from '../../components/Section'
import { BouldersByGrade } from '../../components/BouldersByGrade'
import { Gallery } from '../../components/Gallery'
import { MapPin } from '../../components/MapPin'
import { MountainProjectLink } from '../../components/MountainProjectLink'
// import path from 'node:path'
// import fs from 'node:fs'

import data from '../../data.json'

const swopeParkAreas = data[0].areas

export async function generateStaticParams() {
  const params = swopeParkAreas.map(({ slug }) => ({
    slug: `/${slug}`,
  }))
  return params
}

function getArea(slug) {
  return swopeParkAreas.find((area) => area.slug === slug)
}

export default function AreaPage({ params: { areaSlug } }) {
  console.log('params', areaSlug)
  const {
    area,
    order,
    grades,
    mapPinHref,
    mountainProjectHref,
    directions,
    images,
  } = getArea('fox-hollow')

  return (
    <>
      <Back />
      <Section className={params.slug}>
        <h1>
          {order}. {area}
        </h1>
        <BouldersByGrade data={grades} />
        <MapPin href={mapPinHref} />
        <MountainProjectLink href={mountainProjectHref} />
        <p>{directions}</p>
        <Gallery data={images} />
      </Section>
    </>
  )
}
