"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Customer Churn Prediction",
    description: "Developed a machine learning model to predict customer churn for a telecom company.",
    technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
    insights: "Identified key factors contributing to customer churn, leading to a 15% reduction in churn rate.",
    demoUrl: "#",
  },
  {
    title: "Sales Dashboard",
    description: "Created an interactive sales dashboard using Power BI for a retail client.",
    technologies: ["Power BI", "DAX", "SQL"],
    insights: "Provided real-time insights into sales performance, resulting in a 10% increase in quarterly revenue.",
    demoUrl: "#",
  },
  {
    title: "Sentiment Analysis",
    description: "Implemented a sentiment analysis model for social media data.",
    technologies: ["Python", "NLTK", "TensorFlow", "Keras"],
    insights: "Achieved 85% accuracy in sentiment classification, enabling better customer feedback analysis.",
    demoUrl: "#",
  },
  {
    title: "Supply Chain Optimization",
    description: "Developed an optimization algorithm for a manufacturing company's supply chain.",
    technologies: ["Python", "OR-Tools", "Pandas", "Plotly"],
    insights: "Reduced inventory costs by 20% while maintaining 99% order fulfillment rate.",
    demoUrl: "#",
  },
  {
    title: "Fraud Detection System",
    description: "Built a real-time fraud detection system for an e-commerce platform.",
    technologies: ["Python", "Apache Spark", "Scikit-learn", "Kafka"],
    insights: "Reduced fraudulent transactions by 40% within the first month of deployment.",
    demoUrl: "#",
  },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="projects" className="scroll-mt-14">
      <h2 className="text-3xl font-bold mb-6 relative inline-block group">
        Projects
        <span className="absolute -bottom-1 left-0 w-0 h-1 bg-primary transition-all duration-300 group-hover:w-full"></span>
      </h2>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Project</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Technologies</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {projects.map((project, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{project.title}</TableCell>
                <TableCell>{project.description}</TableCell>
                <TableCell>{project.technologies.join(", ")}</TableCell>
                <TableCell>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" onClick={() => setSelectedProject(project)}>
                        Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>{selectedProject?.title}</DialogTitle>
                        <DialogDescription>{selectedProject?.description}</DialogDescription>
                      </DialogHeader>
                      <div className="mt-4">
                        <h4 className="font-semibold mb-2">Key Insights:</h4>
                        <p>{selectedProject?.insights}</p>
                      </div>
                      <div className="mt-4">
                        <Button asChild>
                          <a href="#" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                            View on GitHub
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </a>
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  )
}

