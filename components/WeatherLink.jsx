import Link from 'next/link'

export const WeatherLink = () => (
  <div className="pin">
    <Link href="/weather">
      ☀️ <span>Weather</span>
    </Link>
  </div>
)
