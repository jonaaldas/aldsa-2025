import "@/styles/globals.css"
import { JetBrains_Mono, Inter } from "next/font/google"
import type React from "react"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
})

export const metadata = {
  title: "ALDAS | Developer",
  description: "Frontend Developer and Digital Creator",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-[#0e0e20] text-white font-sans flex justify-center items-center  px-4 py-8">{children}</body>
    </html>
  )
}

