import "./globals.css"

import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Nav } from "@/components/nav"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    default: "Ziad Teama - Engineer. Developer. Triathlete.",
    template: "%s | Ziad Teama",
  },
  description: "Electrical Engineering student with a passion for software development and embedded systems. From full-stack web apps to automotive software — always in motion.",
  keywords: [
    "Ziad Teama",
    "Software Developer",
    "Embedded Systems",
    "Full-Stack Developer",
    "Electrical Engineering",
    "Triathlete",
    "Next.js",
    "React",
    "TypeScript",
  ],
  authors: [
    {
      name: "Ziad Teama",
      url: "https://github.com/ziadteama",
    },
  ],
  creator: "Ziad Teama",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com",
    title: "Ziad Teama - Engineer. Developer. Triathlete.",
    description: "Electrical Engineering student with a passion for software development and embedded systems.",
    siteName: "Ziad Teama Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ziad Teama - Engineer. Developer. Triathlete.",
    description: "Electrical Engineering student with a passion for software development and embedded systems.",
  },
  icons: {
    icon: "/favicon.ico",
  },
}

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>
        <Nav />
        {children}
      </body>
    </html>
  )
}

export default RootLayout