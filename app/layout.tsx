import type { Metadata } from "next"
import "./globals.css"
import Header from "@/components/header"
import type React from "react"

export const metadata: Metadata = {
  title: "Ahmad Seayar Sroosh - Portfolio",
  description: "Showcasing data science projects and skills",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans bg-gray-900 text-gray-100 min-h-screen">
        <div className="fixed inset-0 z-[-1] opacity-30">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
        <Header />
        <main className="container mx-auto px-4 py-8">{children}</main>
      </body>
    </html>
  )
}

