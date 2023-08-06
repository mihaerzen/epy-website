import './globals.css'
import {Inter} from 'next/font/google'
import {Navigation} from "@/components/Navigation/Navigation";
import {Footer} from "@/components/Footer/Footer";

const inter = Inter({subsets: ['latin']})

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
    <html lang="sl">
    <body
      className={`${inter.className} text-white bg-black bg-[url(/back.jpg)] bg-no-repeat bg-fixed bg-[center_top] min-h-screen flex flex-col`}>
    <Navigation/>

    {children}

    <Footer/>
    </body>
    </html>
  )
}
