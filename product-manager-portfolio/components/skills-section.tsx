import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
  LineChart,
  Users,
  Presentation,
  Lightbulb,
  BarChart3,
  Kanban,
  Megaphone,
  Puzzle,
  Briefcase,
} from "lucide-react"

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Product Strategy",
      icon: <LineChart className="h-5 w-5" />,
      skills: [
        { name: "Market Research", level: 90 },
        { name: "Competitive Analysis", level: 85 },
        { name: "Product Roadmapping", level: 95 },
        { name: "Go-to-Market Strategy", level: 80 },
      ],
    },
    {
      title: "User Experience",
      icon: <Users className="h-5 w-5" />,
      skills: [
        { name: "User Research", level: 85 },
        { name: "Usability Testing", level: 80 },
        { name: "Wireframing", level: 75 },
        { name: "User Journey Mapping", level: 90 },
      ],
    },
    {
      title: "Technical Skills",
      icon: <Puzzle className="h-5 w-5" />,
      skills: [
        { name: "Agile Methodologies", level: 95 },
        { name: "SQL & Data Analysis", level: 75 },
        { name: "API Understanding", level: 80 },
        { name: "Technical Documentation", level: 85 },
      ],
    },
  ]

  const softSkills = [
    { name: "Leadership", icon: <Presentation className="h-5 w-5" /> },
    { name: "Communication", icon: <Megaphone className="h-5 w-5" /> },
    { name: "Problem Solving", icon: <Lightbulb className="h-5 w-5" /> },
    { name: "Data-Driven Decision Making", icon: <BarChart3 className="h-5 w-5" /> },
    { name: "Project Management", icon: <Kanban className="h-5 w-5" /> },
    { name: "Stakeholder Management", icon: <Briefcase className="h-5 w-5" /> },
  ]

  return (
    <div className="space-y-12">
      <div className="grid md:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <Card key={index}>
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 mb-6">
                <div className="p-2 rounded-full bg-primary/10 text-primary">{category.icon}</div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-6 text-center">Soft Skills & Competencies</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {softSkills.map((skill, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6 flex flex-col items-center">
                <div className="p-3 rounded-full bg-primary/10 text-primary mb-3">{skill.icon}</div>
                <span className="text-sm font-medium">{skill.name}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
