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
      <Section className="bike-trail">
        <h1>Bike Trail</h1>
        <BouldersByGrade
          data={{
            v0: 12,
            v1: 17,
            v2: 12,
            v3: 9,
            v4: 0,
            v5: 0,
            v6: 0,
            v7: 0,
            v8: 0,
          }}
        />
        <MapPin href="https://maps.apple.com/?address=Kansas%20City,%20MO%20%2064138,%20United%20States&auid=10468586071561053211&ll=38.986759,-94.514183&lsp=9902&q=Swope%20Park%20Bike%20Trails&t=m" />
        <MountainProjectLink href="https://www.mountainproject.com/area/107829008/wudchuk-boulders" />
        <p>
          The main parking for the trails is at the intersection of Oldham and
          Oakwood as you enter the <em>Camp Lake of The Woods</em> area. The
          various boulders can be parked under at pullouts on Oldham, or hike in
          from the trailhead. Approach times can vary 5 to 30 minutes depending
          on where you leave the car. See map for general locations of boulders.
          The entire trail follows a limestone cliff.
        </p>
        <Gallery
          data={[
            '/bike-trail/map.webp',
            '/bike-trail/boulders/1.webp',
            '/bike-trail/boulders/2.webp',
            '/bike-trail/boulders/3.webp',
            '/bike-trail/boulders/4.webp',
            '/bike-trail/boulders/5.webp',
          ]}
        />
      </Section>
    </>
  )
}
