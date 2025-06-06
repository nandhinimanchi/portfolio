import { ChevronDown, Mail, FileText, Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import ProjectCard from "@/components/project-card"
import ExperienceTimeline from "@/components/experience-timeline"
import SkillsSection from "@/components/skills-section"
import ContactForm from "@/components/contact-form"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-semibold text-xl">Jane Smith</div>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </Link>
            <Link href="#experience" className="text-muted-foreground hover:text-foreground transition-colors">
              Experience
            </Link>
            <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </nav>
          <Button asChild size="sm" className="hidden md:flex">
            <Link href="#contact">
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-muted/50 to-background">
          <div className="container flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Product Manager & <span className="text-primary">Strategic Thinker</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-[700px] mb-8">
              Transforming ideas into successful products through user-centered design, strategic planning, and
              cross-functional leadership.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="#projects">View My Work</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/resume.pdf" target="_blank">
                  <FileText className="mr-2 h-4 w-4" />
                  Download Resume
                </Link>
              </Button>
            </div>
            <div className="mt-16 animate-bounce">
              <Link href="#about" className="text-muted-foreground hover:text-foreground">
                <ChevronDown className="h-8 w-8" />
              </Link>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-background">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="aspect-square relative rounded-xl overflow-hidden">
                <img src="/placeholder.svg?height=600&width=600" alt="Jane Smith" className="object-cover" />
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">Hi, I'm Jane Smith</h3>
                <p className="text-muted-foreground">
                  I'm a passionate product manager with 7+ years of experience building digital products that users
                  love. My approach combines strategic thinking with a deep understanding of user needs and business
                  objectives.
                </p>
                <p className="text-muted-foreground">
                  Throughout my career, I've successfully led cross-functional teams to deliver products that drive
                  growth and create exceptional user experiences. I thrive in collaborative environments and enjoy
                  solving complex problems through innovative solutions.
                </p>
                <div className="flex gap-4 pt-4">
                  <Button variant="outline" size="icon" asChild>
                    <Link href="https://linkedin.com" target="_blank">
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <Link href="https://twitter.com" target="_blank">
                      <Twitter className="h-5 w-5" />
                      <span className="sr-only">Twitter</span>
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <Link href="https://github.com" target="_blank">
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-muted/30">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">My Skills & Expertise</h2>
            <SkillsSection />
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-background">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ProjectCard
                title="E-commerce Platform Redesign"
                description="Led the redesign of a major e-commerce platform, resulting in a 35% increase in conversion rate and 28% increase in average order value."
                image="/placeholder.svg?height=400&width=600"
                tags={["UX Research", "Product Strategy", "A/B Testing"]}
              />
              <ProjectCard
                title="Mobile Banking App"
                description="Managed the development of a mobile banking application from concept to launch, achieving 500K downloads in the first quarter."
                image="/placeholder.svg?height=400&width=600"
                tags={["Fintech", "Mobile", "User Testing"]}
              />
              <ProjectCard
                title="SaaS Analytics Dashboard"
                description="Developed a comprehensive analytics dashboard for a SaaS platform, enabling data-driven decision making and increasing user retention by 22%."
                image="/placeholder.svg?height=400&width=600"
                tags={["Data Analytics", "SaaS", "User Engagement"]}
              />
              <ProjectCard
                title="Healthcare Patient Portal"
                description="Spearheaded the creation of a patient portal for a healthcare provider, improving patient satisfaction scores by 40%."
                image="/placeholder.svg?height=400&width=600"
                tags={["Healthcare", "UX Design", "Accessibility"]}
              />
              <ProjectCard
                title="AI-Powered Recommendation Engine"
                description="Led the implementation of an AI recommendation engine that increased user engagement by 45% and boosted revenue by 30%."
                image="/placeholder.svg?height=400&width=600"
                tags={["AI/ML", "Personalization", "Data Science"]}
              />
              <ProjectCard
                title="Enterprise Workflow Solution"
                description="Designed and launched an enterprise workflow solution that reduced process time by 60% and saved the company $2M annually."
                image="/placeholder.svg?height=400&width=600"
                tags={["B2B", "Process Optimization", "Enterprise"]}
              />
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 bg-muted/30">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">Work Experience</h2>
            <ExperienceTimeline />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-background">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <Card>
                <CardContent className="pt-6">
                  <ContactForm />
                </CardContent>
              </Card>
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">Let's Connect</h3>
                <p className="text-muted-foreground">
                  I'm always open to discussing new projects, opportunities, or partnerships. Whether you have a
                  question or just want to say hi, I'll try my best to get back to you!
                </p>
                <div className="space-y-4 pt-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>jane.smith@example.com</span>
                  </div>
                  <div className="flex gap-4">
                    <Button variant="outline" asChild>
                      <Link href="https://linkedin.com" target="_blank">
                        <Linkedin className="h-5 w-5 mr-2" />
                        LinkedIn
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="https://twitter.com" target="_blank">
                        <Twitter className="h-5 w-5 mr-2" />
                        Twitter
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Jane Smith. All rights reserved.
          </div>
          <div className="flex gap-4">
            <Link href="https://linkedin.com" target="_blank" className="text-muted-foreground hover:text-foreground">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="https://twitter.com" target="_blank" className="text-muted-foreground hover:text-foreground">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="https://github.com" target="_blank" className="text-muted-foreground hover:text-foreground">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
