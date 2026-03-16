"use client"

import { cn } from "@/lib/utils"

const experiences = [
  {
    year: "2023 - Present",
    title: "B.Tech Computer Science & Engineering",
    company: "Lovely Professional University",
    description: "Currently pursuing Bachelor of Technology in CSE with focus on software development, algorithm design, and practical programming applications. CGPA: 6.0",
    color: "bg-primary",
  },
  {
    year: "Aug 2025",
    title: "C++ Programming Training - OOPS & DSA",
    type:"certification",
    link:"https://files.lpu.in/umsweb/skilldevcourse/SkillDevelopmentCertificates/12311748_842_20_08_2025.pdf?_gl=1*4566i3*_gcl_au*MTg3ODY4NTMyMC4xNzczNjYyMTE3",
    company: "CSE Pathshala",
    description: "Comprehensive training in Object-Oriented Programming, Data Structures, Arrays, Pointers, Linked Lists, Stacks, Queues, Sorting, Searching, and code optimization.",
    color: "bg-secondary",
  },
  {
    year: "Jun - Aug 2025",
    title: "Cybersecurity Job Simulations",
    type:"certification",
    link:"https://drive.google.com/file/d/1Upi5wLf8KXCLKCNu6JxzB-HJMiGBEpxa/view?pli=1",
    company: "Tata & Deloitte",
    description: "Completed Cybersecurity Analyst simulation at Tata and Cybersecurity simulation at Deloitte involving practical cybersecurity scenarios and analysis tasks.",
    color: "bg-accent",
  },
  
  {
    year: "2022 - 2023",
    title: "Intermediate Education",
    company: "Presidium School, Ghaziabad",
    description: "Completed intermediate education with 68% marks",
    color: "bg-secondary",
  },
  {
    year: "2020 - 2021",
    title: "Matriculation",
    company: "Narayana E Techno, Ghaziabad",
    description: "Completed matriculation with 85% marks",
    color: "bg-primary",
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col gap-4 mb-16">
          <div className="flex items-center gap-3">
            <div className="h-px w-12 bg-primary" />
            <span className="text-sm font-medium tracking-widest uppercase text-primary">
              Career Path
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Education & Certifications
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={exp.year}
                className={cn(
                  "relative grid md:grid-cols-2 gap-8 md:gap-16",
                  index % 2 === 0 ? "md:text-right" : ""
                )}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-0 md:-translate-x-1/2 z-10">
                  <div className={cn(
                    "w-4 h-4 rounded-full border-4 border-background",
                    exp.color
                  )} />
                </div>

                {/* Content - alternates sides on desktop */}
                <div className={cn(
                  "pl-8 md:pl-0",
                  index % 2 === 0 ? "md:pr-16" : "md:col-start-2 md:pl-16 md:text-left"
                )}>
                  {/* Year badge */}
                  <span className={cn(
                    "inline-block px-4 py-1 rounded-full text-sm font-medium text-primary-foreground mb-4",
                    exp.color
                  )}>
                    {exp.year}
                  </span>
                  
                  <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                  
                  <div>
                    <p className="text-primary font-medium mb-3 inline-block">{exp.company}</p>
                    
                {exp.type==="certification"?(   <a href={exp.link}>  <p className="text-primary font-medium mb-3">Certificate</p></a>):""}
                    </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </div>

                {/* Empty column for grid alignment */}
                {index % 2 === 0 && <div className="hidden md:block" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
