"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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
    title: "Senior Data Analyst",
    company: "Tech Solutions Inc.",
    period: "2020 - Present",
    description: "Lead data analysis projects and develop predictive models for business optimization.",
  },
  {
    title: "Data Analyst",
    company: "Data Insights Co.",
    period: "2018 - 2020",
    description: "Conducted statistical analysis and created data visualizations for client reports.",
  },
  {
    title: "IT Support Specialist",
    company: "Tech Support Services",
    period: "2016 - 2018",
    description: "Provided technical support and maintained database systems.",
  },
]

const education = [
  {
    degree: "M.S. in Data Science",
    institution: "Worcester Polytechnic Institute",
    year: "2018",
  },
  {
    degree: "B.S. in Computer Science",
    institution: "Worcester Polytechnic Institute",
    year: "2016",
  },
]

export default function ExperienceEducation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const particles: { x: number; y: number; radius: number; speed: number }[] = []

    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1 + 0.5,
        speed: Math.random() * 0.5 + 0.1,
      })
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(100, 100, 255, 0.5)"
        ctx.fill()

        particle.y -= particle.speed

        if (particle.y < 0) {
          particle.y = canvas.height
          particle.x = Math.random() * canvas.width
        }
      })

      requestAnimationFrame(animate)
    }

    animate()
  }, [])

  return (
    <section id="experience" className="scroll-mt-14 relative">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <h2 className="text-3xl font-bold mb-6 relative z-10">Experience & Education</h2>
      <div className="grid gap-6 md:grid-cols-2 relative z-10">
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Work Experience</CardTitle>
          </CardHeader>
          <CardContent>
            <Timeline>
              {experiences.map((exp, index) => (
                <TimelineItem key={index}>
                  <TimelineItemIndicator />
                  <TimelineItemContent>
                    <TimelineItemTitle>{exp.title}</TimelineItemTitle>
                    <p className="text-sm text-muted-foreground">
                      {exp.company} | {exp.period}
                    </p>
                    <p className="mt-2">{exp.description}</p>
                  </TimelineItemContent>
                </TimelineItem>
              ))}
            </Timeline>
          </CardContent>
        </Card>
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Education</CardTitle>
          </CardHeader>
          <CardContent>
            <Timeline>
              {education.map((edu, index) => (
                <TimelineItem key={index}>
                  <TimelineItemIndicator />
                  <TimelineItemContent>
                    <TimelineItemTitle>{edu.degree}</TimelineItemTitle>
                    <p className="text-sm text-muted-foreground">
                      {edu.institution} | {edu.year}
                    </p>
                  </TimelineItemContent>
                </TimelineItem>
              ))}
            </Timeline>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

