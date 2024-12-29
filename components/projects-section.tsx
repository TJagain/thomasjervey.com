import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const projects = [
  {
    title: "Pixel Adventure",
    description: "A 2D platformer game built with Unity",
    image: "/placeholder.svg?height=100&width=200",
  },
  {
    title: "Space Shooter",
    description: "A 3D space combat game using Unreal Engine",
    image: "/placeholder.svg?height=100&width=200",
  },
  {
    title: "Puzzle Quest",
    description: "A mobile puzzle game developed with Godot",
    image: "/placeholder.svg?height=100&width=200",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={200}
                  height={100}
                  className="w-full h-auto object-cover rounded-md"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

