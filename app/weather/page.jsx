import { Back } from '../../components/Back'
import { Section } from '../../components/Section'
import { Gallery } from '../../components/Gallery'

export default function Page() {
  return (
    <>
      <Back />
      <Section className="weather">
        <h1>Weather</h1>
        <p>Looks good my dude 👍</p>
        <Gallery data={['/weather/1.webp', '/weather/2.webp']} />
      </Section>
    </>
  )
}
