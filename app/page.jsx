import { Section } from '../components/Section'
import { BouldersByGrade } from '../components/BouldersByGrade'
import { Gallery } from '../components/Gallery'
import { Navigation } from '../components/Navigation'
import { MapPin } from '../components/MapPin'
import { MountainProjectLink } from '../components/MountainProjectLink'

export default function Page() {
  return (
    <Section className="swope-park">
      <h1>Swope Park</h1>
      <BouldersByGrade
        data={{
          v0: 52,
          v1: 70,
          v2: 80,
          v3: 85,
          v4: 21,
          v5: 8,
          v6: 4,
          v7: 4,
          v8: 1,
        }}
      />
      <MapPin href="https://maps.apple.com/?address=6500%E2%80%936532%20Riverside%20Dr,%20Kansas%20City,%20MO%2064132,%20United%20States&auid=17641115911366345289&ll=38.996641,-94.521046&lsp=9902&q=Swope%20Park&t=m" />
      <MountainProjectLink href="https://www.mountainproject.com/area/112205804/swope-park-bouldering" />
      <Navigation />
      <Gallery data={['/map-marked.webp', '/ios-map.webp']} />
    </Section>
  )
}
