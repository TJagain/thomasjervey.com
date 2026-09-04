import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import { Header } from "@/components/header"

const geist = localFont({
  src: "./fonts/GeistVF.woff",
  display: "swap",
  weight: "100 900",
})

export const metadata: Metadata = {
  title: "Thomas Jervey - Game Developer Portfolio",
  description: "Portfolio of Thomas Jervey, an aspiring game developer showcasing projects and skills.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={geist.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
