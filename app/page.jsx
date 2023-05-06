import { Section } from '../components/Section'
import { BouldersByGrade } from '../components/BouldersByGrade'
import { Gallery } from '../components/Gallery'
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
      <Gallery data={['/map-marked.webp', '/ios-map.webp']} />
    </Section>
  )
}
