import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ExperienceTimeline() {
  const experiences = [
    {
      title: "Senior Product Manager",
      company: "TechCorp Inc.",
      period: "2021 - Present",
      description:
        "Leading product strategy and roadmap development for the company's flagship SaaS platform. Managing a cross-functional team of designers, engineers, and marketers to deliver innovative solutions.",
      achievements: [
        "Increased user retention by 35% through data-driven product improvements",
        "Led the successful launch of 3 major features that generated $2M in additional revenue",
        "Implemented agile methodologies that improved team velocity by 40%",
      ],
    },
    {
      title: "Product Manager",
      company: "InnovateSoft",
      period: "2018 - 2021",
      description:
        "Managed the full product lifecycle for a B2B enterprise solution. Collaborated with stakeholders to define product vision and prioritize features based on business impact.",
      achievements: [
        "Grew monthly active users from 10K to 50K through strategic product enhancements",
        "Reduced customer churn by 25% by implementing a customer feedback loop",
        "Spearheaded the redesign of core features resulting in 60% improvement in user satisfaction",
      ],
    },
    {
      title: "Associate Product Manager",
      company: "StartupXYZ",
      period: "2016 - 2018",
      description:
        "Assisted in the development and launch of a mobile application. Conducted market research and competitive analysis to identify opportunities for product differentiation.",
      achievements: [
        "Contributed to product strategy that led to 1M+ app downloads in the first year",
        "Managed user testing sessions that identified critical UX improvements",
        "Created comprehensive product documentation and user guides",
      ],
    },
  ]

  return (
    <div className="space-y-8">
      {experiences.map((exp, index) => (
        <Card key={index} className="relative overflow-hidden">
          <div className="absolute top-0 left-8 bottom-0 w-0.5 bg-muted-foreground/20"></div>
          <div className="absolute top-8 left-8 w-4 h-4 rounded-full bg-primary transform -translate-x-2"></div>
          <CardHeader className="pb-2 pl-16">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
              <CardTitle className="text-xl">{exp.title}</CardTitle>
              <Badge variant="outline" className="w-fit">
                {exp.period}
              </Badge>
            </div>
            <p className="text-primary font-medium">{exp.company}</p>
          </CardHeader>
          <CardContent className="pl-16">
            <p className="text-muted-foreground mb-4">{exp.description}</p>
            <div className="space-y-2">
              <p className="font-medium">Key Achievements:</p>
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                {exp.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
