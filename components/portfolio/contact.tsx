"use client"

import { Mail, Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

const socialLinks = [
  { icon: Github, href: "https://github.com/Agamtyagi04", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/agam-tyagi-1965112a2/", label: "LinkedIn" },
]

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 lg:px-12 bg-foreground text-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - CTA */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-primary" />
              <span className="text-sm font-medium tracking-widest uppercase text-primary">
                Get In Touch
              </span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance">
              Let&apos;s Create Something{" "}
              <span className="text-primary">Amazing</span> Together
            </h2>
            
            <p className="text-lg text-background/70 mb-8 leading-relaxed max-w-lg">
              Have a project in mind or just want to chat? I&apos;m always open to discussing 
              new opportunities, creative ideas, or ways to bring your vision to life.
            </p>

            <Button 
              size="lg" 
              className="rounded-full text-base px-8 py-6"
              asChild
            >
              <a href="mailto:agamtyagi2345@gmail.com">
                <Mail className="w-5 h-5 mr-2" />
                agamtyagi2345@gmail.com
              </a>
            </Button>
          </div>

          {/* Right side - Social & Info */}
          <div className="lg:pl-16">
            <div className="space-y-8">
              {/* Social Links */}
              <div>
                <h3 className="text-sm font-medium tracking-widest uppercase text-background/50 mb-4">
                  Connect With Me
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full border border-background/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors group"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5 text-background/70 group-hover:text-primary-foreground transition-colors" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div>
                <h3 className="text-sm font-medium tracking-widest uppercase text-background/50 mb-2">
                  Based In
                </h3>
                <p className="text-xl font-medium">India</p>
              </div>

              {/* Availability */}
              <div>
                <h3 className="text-sm font-medium tracking-widest uppercase text-background/50 mb-2">
                  Availability
                </h3>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <p className="text-xl font-medium">Open for opportunities</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-background/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/50">
            {new Date().getFullYear()} Agam Tyagi. All rights reserved.
          </p>
          <p className="text-sm text-background/50">
            Designed & Built with care
          </p>
        </div>
      </div>
    </section>
  )
}
