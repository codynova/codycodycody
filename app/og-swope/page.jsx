import { Back } from '../../components/Back'
import { Section } from '../../components/Section'
import { BouldersByGrade } from '../../components/BouldersByGrade'
import { Gallery } from '../../components/Gallery'
import { MapPin } from '../../components/MapPin'

export default function Page() {
  return (
    <>
      <Back />
      <Section className="og-swope">
        <h1>OG Swope</h1>
        <BouldersByGrade
          data={{
            v0: 9,
            v1: 9,
            v2: 20,
            v3: 10,
            v4: 6,
            v5: 2,
            v6: 1,
            v7: 1,
            v8: 0,
          }}
        />
        <MapPin href="https://maps.apple.com/?address=7557%E2%80%937573%20Blue%20River%20Rd,%20Kansas%20City,%20MO%20%2064132,%20United%20States&auid=14498827317347731207&ll=38.985043,-94.534486&lsp=9902&q=Blue%20River%20Rail%20Trail&t=m" />
        <p>
          From the intersection of 71-HWY (I-49) head 0.9 miles north on Blue
          River Road and park at the pullout on the side of the road. If you are
          coming from Oldham Road it is 0.7 miles past the golf course. Follow a
          trail south along the drainage for approximately 200 feet. Take a
          steep trail up the hillside to the left. This will lead you to the
          Pocket Boulder.
        </p>
        <Gallery
          data={[
            '/og-swopes/map.webp',
            '/og-swopes/boulders/1.webp',
            '/og-swopes/boulders/2.webp',
            '/og-swopes/boulders/3.webp',
          ]}
        />
      </Section>
    </>
  )
}
