"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import type * as React from "react"

// Timeline components integrated directly
const Timeline = ({ children }: { children: React.ReactNode }) => {
  return <ul className="flex flex-col space-y-4">{children}</ul>
}

const TimelineItem = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <li className={cn("flex items-center space-x-4", className)}>{children}</li>
}

const TimelineItemIndicator = ({ className }: { className?: string }) => {
  return (
    <span className={cn("flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-primary", className)}>
      <span className="h-2 w-2 rounded-full bg-primary" />
    </span>
  )
}

const TimelineItemContent = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>
}

const TimelineItemTitle = ({ children }: { children: React.ReactNode }) => {
  return <h3 className="text-lg font-medium">{children}</h3>
}

const experiences = [
  {
    title: "Administrative Support/ Instructor",
    company: "English Zone",
    location: "Bishkek, Kyrgyzstan",
    period: "Jan 2023 – Jun 2023",
    description: [
      "Assisted office members in their daily tasks and monitoring workflow e.g. preparing for events",
      "Delivered English curriculum guidance to over 50 students, leading to a 20% improvement in their course performance",
      "Actively shared information about the organization with visitors and students, providing a welcoming and informative environment",
      "Managed and updated organizational data in the internal database, achieving a 10% increase in data accuracy and enhancing information accessibility for non-technical staff",
    ],
  },
  {
    title: "IT Help Desk Associate",
    company: "Shaiq Network",
    location: "Kabul, Afghanistan",
    period: "Jan 2021 – Aug 2021",
    description: [
      "Effectively communicated innovative solutions to over 150 technical issues, achieving a 90% satisfaction rate",
      "Trained users in technology use as well as developed written guides for users to be able to solve their own issues",
      "Analyzed patterns in support tickets to identify common technical issues, improving support efficiency and user satisfaction by 15%",
      "Created comprehensive user guides and trained individuals, showcasing an ability to convey complex information effectively",
    ],
  },
  {
    title: "Entry Level Data Analyst",
    company: "Heela Organization",
    location: "Kabul, Afghanistan",
    period: "Jun 2020 – Dec 2020",
    description: [
      "Analyzed datasets from three departments, applying statistical models to deliver insights that improved decision-making and contributed to a 25% business impact increase",
      "Applied statistical tools to identify and communicate key business trends, resulting in a 20% improvement in operational efficiency",
      "Designed and managed databases that reduced data retrieval time by 40% for data analysis",
      "Utilized data visualization tools to produce reports that communicated findings effectively to both technical and non-technical stakeholders",
      "Defined key performance metrics and collaborated with product teams to tailor data analysis for specific business questions",
    ],
  },
]

export default function WorkExperience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <section id="experience" className="scroll-mt-14">
      <h2 className="text-3xl font-bold mb-6 relative inline-block group">
        Work Experience
        <span className="absolute -bottom-1 left-0 w-0 h-1 bg-primary transition-all duration-300 group-hover:w-full"></span>
      </h2>
      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"></div>
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.2 }}
            className="relative mb-8"
          >
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4 w-4 h-4 bg-primary rounded-full"></div>
            <Card className={`w-5/6 ${index % 2 === 0 ? "ml-auto" : "mr-auto"} hover:shadow-lg transition-shadow`}>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold hover:text-primary transition-colors">{exp.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {exp.company} | {exp.location} | {exp.period}
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                  className="mt-2"
                >
                  {expandedIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  {expandedIndex === index ? "Hide Details" : "Show Details"}
                </Button>
                {expandedIndex === index && (
                  <motion.ul
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="mt-2 space-y-2 list-disc list-inside"
                  >
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-sm hover:text-primary transition-colors cursor-default">
                        {item}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

