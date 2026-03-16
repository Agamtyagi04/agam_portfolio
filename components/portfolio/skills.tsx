"use client"

import { cn } from "@/lib/utils"

const skillCategories = [
  {
    title: "Programming",
    color: "bg-primary",
    skills: ["C", "C++", "Java", "Python", "DSA"],
  },
  {
    title: "Web Technologies",
    color: "bg-secondary",
    skills: ["HTML", "CSS", "JavaScript", "Flask"],
  },
  {
    title: "Tools & Platforms",
    color: "bg-accent",
    skills: ["Git", "GitHub", "Cisco Packet Tracer", "Wireshark"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 lg:px-12 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col gap-4 mb-16">
          <div className="flex items-center gap-3">
            <div className="h-px w-12 bg-primary" />
            <span className="text-sm font-medium tracking-widest uppercase text-primary">
              Expertise
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Skills & Technologies
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {skillCategories.map((category) => (
            <div key={category.title} className="group">
              {/* Category Header */}
              <div className={cn(
                "p-6 rounded-t-2xl",
                category.color
              )}>
                <h3 className="text-xl font-bold text-primary-foreground">
                  {category.title}
                </h3>
              </div>
              
              {/* Skills List */}
              <div className="bg-card rounded-b-2xl p-6 border border-t-0">
                <ul className="space-y-4">
                  {category.skills.map((skill, index) => (
                    <li 
                      key={skill}
                      className="flex items-center gap-3 group/skill"
                    >
                      <div className={cn(
                        "w-2 h-2 rounded-full transition-transform group-hover/skill:scale-150",
                        category.color
                      )} />
                      <span className="font-medium text-foreground group-hover/skill:text-primary transition-colors">
                        {skill}
                      </span>
                      <div className="flex-1 h-px bg-border ml-auto" />
                      <span className="text-xs text-muted-foreground opacity-0 group-hover/skill:opacity-100 transition-opacity">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Additional skills marquee */}
        <div className="mt-16 overflow-hidden">
          <div className="flex gap-8 animate-marquee">
            {["Leadership", "Problem Solving", "Communication", "Teamwork", "Algorithm Design", "Code Optimization", "Leadership", "Problem Solving", "Communication", "Teamwork", "Algorithm Design", "Code Optimization"].map((skill, i) => (
              <span 
                key={`${skill}-${i}`}
                className="text-2xl sm:text-3xl font-bold text-muted-foreground/30 whitespace-nowrap"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
