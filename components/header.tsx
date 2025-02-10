"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-700 bg-gray-800/95 backdrop-blur supports-[backdrop-filter]:bg-gray-800/60">
      <div className="container flex h-14 items-center">
        <nav className="flex flex-1 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-white">Portfolio</span>
          </Link>
          <div className="flex items-center space-x-6">
            <Button
              variant="ghost"
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              About
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("experience")}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              Experience
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("education")}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              Education
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("projects")}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              Projects
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}

