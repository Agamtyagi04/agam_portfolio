"use client"

import { useState } from "react"
import { ExternalLink, Github } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const projects = [
  {
    id: 1,
    title: "Smart City Complaint Prioritization System",
    description: "A menu-driven civic complaint management system using C++ that prioritizes complaints based on urgency and type. Uses priority queues and max-heap structure to ensure time-sensitive issues like fire hazards or water leakages are addressed first.",
    image: "/project1img.png",
    tags: ["C++", "Data Structures", "Priority Queue", "Max Heap"],
    color: "bg-primary",
    liveUrl: "#",
    githubUrl: "https://github.com/Agamtyagi04/Smart-City-Complaint-Prioritization-System",
  },
  {
    id: 2,
    title: "Mercy Dental Hospital",
    description: "The hospital itself is a very successful hospital. Remove the pains. But when there is no resilience to assume the things, is there anyone who succeeds? He runs away from the pain, he runs away from the pains he wants them to provide.",
    image: "/project2img.png",
    tags: ["Python", "Flask", "HTML", "CSS", "JavaScript"],
    color: "bg-secondary",
    liveUrl: "https://health-and-wellness-tracker-delta.vercel.app/",
    githubUrl: "https://github.com/Agamtyagi04/Health-and-Wellness-Tracker",
  },
]

export function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="projects" className="py-24 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col gap-4 mb-16">
          <div className="flex items-center gap-3">
            <div className="h-px w-12 bg-primary" />
            <span className="text-sm font-medium tracking-widest uppercase text-primary">
              Featured Work
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Selected Projects
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className={cn(
  "group relative overflow-hidden border-0 transition-all duration-500",
  hoveredId && hoveredId !== project.id && "opacity-50"
)}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Project Image Placeholder */}
              <div className="aspect-[16/10] w-full relative overflow-hidden">
  <img
    src={project.image}
    alt={project.title}
    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
  />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-foreground/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <Button size="sm" variant="secondary" className="rounded-full" asChild>
                    {index===0?(""):<a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>}
                  </Button>
                  <Button size="sm" variant="outline" className="rounded-full bg-transparent border-white text-white hover:bg-white hover:text-foreground" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 bg-card">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="secondary" 
                      className="rounded-full font-medium"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
