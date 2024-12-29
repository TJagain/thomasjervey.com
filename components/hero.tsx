import { Button } from "@/components/ui/button"
import Link from "next/link"

// Title screen, introduces myself
export function Hero() {
  return (
    <section className="w-full mb-8 py:24 md:py-32 lg:py-48 xl:py-72">
      {/* container holding content of Hero*/}
      <div className="container px-4 md:px-6">
        {/* Flex box containing titles and buttons*/}
        <div className="flex flex-col items-center space-y-4 text-center">
          {/* Titles */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Thomas Jervey
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Game Developer | Programmer | Teacher
            </p>
          </div>
          {/* Buttons - shortcuts to various sections */}
          <div className="space-x-4">
            <Button asChild>
              <Link href="#projects">View Projects</Link>
            </Button>
            <Button asChild variant="outline">
            {/*  */}
              <Link href="#contact">Contact Me</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

