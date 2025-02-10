"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { School, ExternalLink } from "lucide-react"
import Link from "next/link"

const education = [
  {
    degree: "Masters in Data Science",
    institution: "Worcester Polytechnic Institute - WPI",
    location: "Worcester, MA",
    period: "Aug 2023 – May 2025",
    gpa: "3.83",
    highlights: [
      "Awarded the Qatar merit-based Scholarship for Afghan Students by the Department of State",
      "Coursework: Statistical data analysis, Business Analysis, Machine learning",
    ],
    website: "https://www.wpi.edu/",
  },
  {
    degree: "Masters in Business Administration",
    institution: "American University of Central Asia - AUCA",
    location: "Bishkek, Kyrgyzstan",
    period: "Aug 2022 – Present(Hiatus)",
    gpa: "3.20",
    highlights: [
      "Coursework: Marketing Analysis, Financial Accounting, Information Systems Management, Organizational Decision making",
    ],
    website: "https://www.auca.kg/",
  },
  {
    degree: "Bachelors in Information Technology and Computer Science",
    institution: "American University of Afghanistan - AUAF",
    location: "Kabul, Afghanistan",
    period: "Jan 2019 – May 2022",
    gpa: "3.55",
    highlights: [
      "President's High Honor List: 4 times",
      "Coursework: Discrete math, Expository writing, Database management, Software development",
    ],
    website: "https://www.auaf.edu.af/",
  },
]

export default function Education() {
  return (
    <section id="education" className="scroll-mt-14">
      <h2 className="text-3xl font-bold mb-6 relative inline-block group">
        Education
        <span className="absolute -bottom-1 left-0 w-0 h-1 bg-primary transition-all duration-300 group-hover:w-full"></span>
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.2 }}
          >
            <Card className="h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <School className="w-5 h-5 text-primary" />
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">{edu.degree}</CardTitle>
                </div>
                <Link
                  href={edu.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {edu.institution}
                  <ExternalLink className="w-4 h-4 ml-1" />
                </Link>
                <p className="text-sm text-muted-foreground">{edu.location}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm">
                    <span className="font-semibold">Period:</span> {edu.period}
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold">GPA:</span> {edu.gpa}
                  </p>
                  <div className="mt-4">
                    <h4 className="font-semibold text-sm mb-2">Highlights:</h4>
                    <ul className="list-disc list-inside text-sm space-y-1">
                      {edu.highlights.map((highlight, i) => (
                        <li key={i} className="hover:text-primary transition-colors cursor-default">
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

