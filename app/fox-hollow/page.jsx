import { Back } from '../../components/Back'
import { Section } from '../../components/Section'
import { BouldersByGrade } from '../../components/BouldersByGrade'
import { Gallery } from '../../components/Gallery'
import { MapPin } from '../../components/MapPin'
import { MountainProjectLink } from '../../components/MountainProjectLink'

export default function Page() {
  return (
    <>
      <Back />
      <Section className="fox-hollow">
        <h1>Fox Hollow</h1>
        <BouldersByGrade
          data={{
            v0: 1,
            v1: 8,
            v2: 10,
            v3: 10,
            v4: 5,
            v5: 1,
            v6: 0,
            v7: 0,
            v8: 0,
          }}
        />
        <MapPin href="https://maps.apple.com/?ll=38.995808,-94.532158&q=Dropped%20Pin&t=m" />
        <MountainProjectLink href="https://www.mountainproject.com/area/119946748/fox-hollow-trail" />
        <p>
          The Fox Hollow area is located behind the Lakeside Nature Center. From
          I-435, take Exit 67 and head west on Gregory Boulevard for 1.8 miles.
          Park in the lot for the Nature Center and walk around the left side of
          the building south-bound, and follow the trail that leads to the
          boulders. Approach time is 5 minutes.
        </p>
        <Gallery
          data={[
            '/fox-hollow/map.webp',
            '/fox-hollow/boulders/1.webp',
            '/fox-hollow/boulders/2.webp',
            '/fox-hollow/boulders/3.webp',
            '/fox-hollow/boulders/4.webp',
          ]}
        />
      </Section>
    </>
  )
}
