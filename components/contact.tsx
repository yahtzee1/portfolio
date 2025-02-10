"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin } from "lucide-react"
import { toast } from "sonner"

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const circles: { x: number; y: number; radius: number; dx: number; dy: number }[] = []

    for (let i = 0; i < 20; i++) {
      circles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 20 + 10,
        dx: (Math.random() - 0.5) * 2,
        dy: (Math.random() - 0.5) * 2,
      })
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      circles.forEach((circle) => {
        ctx.beginPath()
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(100, 100, 255, 0.1)"
        ctx.fill()

        circle.x += circle.dx
        circle.y += circle.dy

        if (circle.x + circle.radius > canvas.width || circle.x - circle.radius < 0) circle.dx *= -1
        if (circle.y + circle.radius > canvas.height || circle.y - circle.radius < 0) circle.dy *= -1
      })

      requestAnimationFrame(animate)
    }

    animate()
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    }

    try {
      const mailtoLink = `mailto:seayar3@gmail.com?subject=Portfolio Contact from ${data.name}&body=${encodeURIComponent(
        `From: ${data.name}\nEmail: ${data.email}\n\n${data.message}`,
      )}`
      window.location.href = mailtoLink
      formRef.current?.reset()
      toast.success("Message prepared in your default email client!")
    } catch (error) {
      toast.error("There was an error preparing your message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="scroll-mt-14 relative">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <h2 className="text-3xl font-bold mb-6 relative inline-block group z-10">
        Contact & Resume
        <span className="absolute -bottom-1 left-0 w-0 h-1 bg-primary transition-all duration-300 group-hover:w-full"></span>
      </h2>
      <div className="grid gap-6 md:grid-cols-2 relative z-10">
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Get in Touch</CardTitle>
            <CardDescription>Feel free to reach out for collaborations or just a chat.</CardDescription>
          </CardHeader>
          <CardContent>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <Input name="name" placeholder="Your Name" required />
              <Input name="email" type="email" placeholder="Your Email" required />
              <Textarea name="message" placeholder="Your Message" required />
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </CardContent>
        </Card>
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Connect & Download</CardTitle>
            <CardDescription>Find me on professional networks or download my resume.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex space-x-4">
              <Button variant="outline" asChild>
                <a
                  href="https://www.linkedin.com/in/seayar-sroosh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a
                  href="https://github.com/yahtzee1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <Github className="mr-2 h-4 w-4" /> GitHub
                </a>
              </Button>
            </div>
            <Button asChild>
              <a href="/path-to-your-resume.pdf" download>
                Download Resume
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

