import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Source_Sans_3 } from "next/font/google"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Taxmate - Smart, Transparent, and Secure Tax Management",
  description:
    "Reinventing tax collection with blockchain transparency. Taxmate simplifies tax payments, ensures accountability, and provides trust through decentralized systems.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans ${inter.variable} ${sourceSans.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        {/* Analytics component removed */}
      </body>
    </html>
  )
}
