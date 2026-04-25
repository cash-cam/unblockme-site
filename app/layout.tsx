import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'UnblockMe Ltd | Auckland Drainage Specialists',
  description: 'Auckland\'s trusted drainage company. Emergency drain unblocking, CCTV inspection, high-pressure jetting and drain repairs across Auckland. Call us 24/7.',
  keywords: 'drain unblocking Auckland, drainage company Auckland, blocked drains, CCTV drain inspection, plumber Auckland, UnblockMe',
  openGraph: {
    title: 'UnblockMe Ltd | Auckland Drainage Specialists',
    description: 'Auckland\'s trusted drainage company. Emergency drain unblocking, CCTV inspection, high-pressure jetting and drain repairs across Auckland.',
    type: 'website',
    locale: 'en_NZ',
  },
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
