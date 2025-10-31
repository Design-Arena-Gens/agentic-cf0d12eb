import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Somu Cars - Quality Second Hand Cars',
  description: 'Find your perfect second-hand car at Somu Cars. Wide selection, competitive prices, and trusted service.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
