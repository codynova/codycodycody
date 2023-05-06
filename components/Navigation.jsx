import Link from 'next/link'

export const Navigation = () => (
  <nav>
    <Link href="/weather">
      <span>Weather</span> ☀️
    </Link>
    <Link href="/fox-hollow">
      4. <span>Fox Hollow</span>
    </Link>
    <Link href="/bike-trail">
      5. <span>Bike Trail</span>
    </Link>
    <Link href="/og-swope">
      9. <span>OG Swope</span>
    </Link>
  </nav>
)
