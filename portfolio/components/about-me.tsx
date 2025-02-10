"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { motion } from "framer-motion"

export default function AboutMe() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const particles: { x: number; y: number; radius: number; dx: number; dy: number }[] = []

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5,
      })
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(100, 100, 255, 0.5)"
        ctx.fill()

        particle.x += particle.dx
        particle.y += particle.dy

        if (particle.x < 0 || particle.x > canvas.width) particle.dx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.dy *= -1
      })

      requestAnimationFrame(animate)
    }

    animate()
  }, [])

  return (
    <section id="about" className="scroll-mt-14 relative">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <Card className="relative z-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-3xl">About Me</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col md:flex-row gap-8 items-center">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-64 h-64 rounded-full overflow-hidden border-2 border-gray-200 dark:border-gray-700 shadow-lg group hover:border-primary/50 transition-all duration-300"
            style={{
              background: "linear-gradient(145deg, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0.1) 100%)",
            }}
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic4-seayar-3dTEW091smLM0DDcFjcku7ghAqaaRR.jpeg"
              alt="Ahmad Seayar Sroosh"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
              style={{ objectPosition: "center 20%" }}
            />
          </motion.div>
          <div className="space-y-4 group">
            <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
              <h3 className="text-3xl font-bold mb-2 relative">
                Ahmad Seayar Sroosh
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </h3>
              <p className="text-lg">
                Data Science professional with expertise in analytics, machine learning, and data-driven
                decision-making. Currently pursuing a Master's in Data Science with hands-on experience in statistical
                modeling, experimentation, and collaboration across product and engineering teams.
              </p>
            </motion.div>
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <div className="flex items-center gap-2">
                <span className="font-semibold">Location:</span>
                <span>Worcester, MA</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold">Email:</span>
                <a href="mailto:seayar3@gmail.com" className="hover:text-primary transition-colors">
                  seayar3@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold">LinkedIn:</span>
                <a
                  href="https://www.linkedin.com/in/seayar-sroosh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  /in/seayar-sroosh
                </a>
              </div>
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

