"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Radar } from "react-chartjs-2"
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from "chart.js"

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend)

const skills = [
  { name: "Python", level: 90 },
  { name: "R", level: 85 },
  { name: "SQL", level: 95 },
  { name: "Power BI", level: 88 },
  { name: "Tableau", level: 92 },
  { name: "Machine Learning", level: 85 },
]

const chartData = {
  labels: skills.map((skill) => skill.name),
  datasets: [
    {
      label: "Skill Level",
      data: skills.map((skill) => skill.level),
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 2,
    },
  ],
}

const chartOptions = {
  scales: {
    r: {
      angleLines: {
        display: false,
      },
      suggestedMin: 0,
      suggestedMax: 100,
    },
  },
}

export default function Skills() {
  const [scale, setScale] = useState(1)
  const animationRef = useRef<number>()

  useEffect(() => {
    const animate = () => {
      setScale((prevScale) => {
        const newScale = prevScale + Math.sin(Date.now() / 1000) * 0.01
        return Math.max(0.95, Math.min(1.05, newScale))
      })
      animationRef.current = requestAnimationFrame(animate)
    }
    animationRef.current = requestAnimationFrame(animate)
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <section id="skills" className="scroll-mt-14">
      <h2 className="text-3xl font-bold mb-6">Skills & Technologies</h2>
      <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Technical Proficiency</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="w-full max-w-xl mx-auto" style={{ transform: `scale(${scale})` }}>
            <Radar data={chartData} options={chartOptions} />
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

