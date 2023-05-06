import { Poppins, Raleway } from 'next/font/google'

import '../styles.css'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-raleway',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export default function Layout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${raleway.variable}`}>
      <body>{children}</body>
    </html>
  )
}
