import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const skills = [
  {
    category: "Game Engines",
    items: ["Unity", "Unreal Engine", "Godot"]
  },
  {
    category: "Programming Languages",
    items: ["C#", "C++", "Python", "JavaScript"]
  },
  {
    category: "3D Modeling & Animation",
    items: ["Blender", "Maya", "3ds Max"]
  },
  {
    category: "Version Control",
    items: ["Git", "Perforce"]
  }
]

export function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-muted/50">
      <h2 className="text-3xl font-bold text-center mb-10">My Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {skills.map((skillCategory, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{skillCategory.category}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5">
                {skillCategory.items.map((skill, skillIndex) => (
                  <li key={skillIndex}>{skill}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

