import { Badge } from "@/components/ui/badge"

const languages = [
  "Lua", "Java", "Python", "JavaScript", "C++", "TypeScript", "SQL"
]
const skills2 = [
  "3D Modeling", "Game Design", "Level Design", "AI Programming",
  "Version Control (Git)", "Agile Development"
]

const skills = {
  professional: ["Game Design", "Game Development", "Programming"],
  languages: ["Lua", "Java", "Python", "JavaScript", "C++", "TypeScript", "SQL"],
  personal: ["Teamwork", "Communcation", "Organization", "Analytics", "Creativity"],
}

export function SkillsSection() {
  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Skills</h2>
        <div className="flex flex-col items-center justify-center gap-4">
          {/* {languages.map((language, index) => (
            <Badge key={index} variant="secondary" className="text-lg py-2 px-4">
              {language}
            </Badge>
          ))}
          {skills2.map((skill, index) => (
            <Badge key={index} variant="secondary" className="text-lg py-2 px-4">
              {skill}
            </Badge>
          ))} */}
          {Object.entries(skills).map(([skillType, skillList]) => (
            <div>
            {skillList.map((skill, index) => (
              <Badge key={index} variant="secondary" className="text-lg py-2 px-4">
                {skill}
              </Badge>
            ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

