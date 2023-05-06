import { Section } from '../components/Section'
import { BouldersByGrade } from '../components/BouldersByGrade'
import { Gallery } from '../components/Gallery'
// import { MapPin } from '../components/MapPin'
import { Navigation } from '../components/Navigation'

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
      <Navigation />
      {/* <MapPin href="https://maps.apple.com/?ll=38.995808,-94.532158&q=Dropped%20Pin&t=m">
        4. Fox Hollow
      </MapPin>
      <MapPin href="https://maps.apple.com/?address=Kansas%20City,%20MO%20%2064138,%20United%20States&auid=10468586071561053211&ll=38.986759,-94.514183&lsp=9902&q=Swope%20Park%20Bike%20Trails&t=m">
        5. Bike Trail
      </MapPin>
      <MapPin href="https://maps.apple.com/?address=7557%E2%80%937573%20Blue%20River%20Rd,%20Kansas%20City,%20MO%20%2064132,%20United%20States&auid=14498827317347731207&ll=38.985043,-94.534486&lsp=9902&q=Blue%20River%20Rail%20Trail&t=m">
        9. OG Swopes
      </MapPin> */}
      <Gallery data={['/map-marked.webp', '/ios-map.webp']} />
    </Section>
  )
}
