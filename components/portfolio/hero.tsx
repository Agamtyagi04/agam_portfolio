"use client"

import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden px-6 lg:px-12">
      {/* Bold geometric background shapes */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col gap-8">
          {/* Overline */}
          <div className="flex items-center gap-3">
            <div className="h-px w-12 bg-primary" />
            <span className="text-sm font-medium tracking-widest uppercase text-primary">
              Aspiring Software Developer
            </span>
          </div>

          {/* Main heading with bold typography */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight text-balance">
            <span className="block">Hi, I&apos;m</span>
            <span className="block text-primary">Agam</span>
            <span className="block">Tyagi</span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed">
            A Computer Science Engineering student with strong interest in software development, 
            cybersecurity, and data structures & algorithms. I enjoy solving real-world problems 
            through programming and building efficient applications.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Button 
              size="lg" 
              className="text-base px-8 py-6 rounded-full"
              onClick={scrollToProjects}
            >
              View My Work
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-base px-8 py-6 rounded-full border-2"
              asChild
            >
              <a href="/AgamCV.2.pdf" download="Agam Tyagi CV">Download CV</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <button 
          onClick={scrollToProjects}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Scroll to projects"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-5 h-5" />
        </button>
      </div>
    </section>
  )
}
