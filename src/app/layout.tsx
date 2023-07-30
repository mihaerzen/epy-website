import './globals.css'
import {Inter} from 'next/font/google'

const inter = Inter({subsets: ['latin']})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sl">
    <body
      className={`${inter.className} text-white bg-black bg-[url(/back.jpg)] bg-no-repeat bg-fixed bg-[center_top] min-h-screen flex flex-col`}>{children}</body>
    </html>
  )
}
