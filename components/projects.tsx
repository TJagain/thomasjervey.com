import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
const projects = [
  {
    title: "Star Wars: Heroes vs Villains",
    description: "A Star Wars MOBA inspired by Battlefront 1 & 2's Heroes vs Villains modes",
    // image: "/images/HVVThumbnail.png",
    image: "/images/yavin_thumbnail.png",
    tags: ["Roblox Studio", "Lua", "Design", "Programming", "UI"],
    link: "https://www.roblox.com/games/1223439537/Stars-Wars-Heroes-vs-Villains"
  },
  {
    title: "Final Frontier",
    description: "A 3-D RTS in space, inspired by Empire at War & Stellaris",
    image: "/images/FinalFrontierThumbnail.png",
    tags: ["Roblox Studio", "Lua", "Design", "Programming", "UI", "Modeling"],
    link: "https://www.roblox.com/games/9552759809/The-Final-Frontier-DEMO"
  },
  {
    title: "Laser Chess",
    description: "Roblox implementation of the Laser Chess board game by ThinkFun",
    image: "/images/LaserChessThumbnail.png",
    tags: ["Roblox Studio", "Lua", "Design", "Programming", "UI", "Modeling"],
    link: "https://www.roblox.com/games/6181806752/Laser-Chess"
  }
]

export function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      {/* Title */}
      <h2 className="text-3xl font-bold text-center mb-10">My Projects</h2>
      {/* Projects grid */}
      <div className="grid justify-between grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card className="relative" key={index}>
            <div className = "flex flex-col justify-end items-center h-full">
              <a
                href={project.link}
                target={"_blank"}
                rel={"noreferrer"}>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
              </a>
              <CardContent>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={300}
                  height={200}
                  className="rounded-lg object-cover w-full"
                />
              </CardContent>
              <div className="mt-auto">
              <CardFooter className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="secondary">{tag}</Badge>
                ))}
              </CardFooter>
              </div>
              {/* <div className="p-14 sm:p-12 md:p-10 lg:p-8"></div> */}
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}

