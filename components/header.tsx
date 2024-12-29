import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800">
      <Link href="/" className="text-2xl font-bold">
        Thomas Jervey
      </Link>
      <nav className="flex items-center space-x-4">
        <Button asChild variant="ghost">
          <Link href="#projects">Projects</Link>
        </Button>
        <Button asChild variant="ghost">
          <Link href="#skills">Skills</Link>
        </Button>
        <Button asChild variant="ghost">
          <Link href="#about">About</Link>
        </Button>
        <Button asChild variant="ghost">
          <Link href="#contact">Contact</Link>
        </Button>
      </nav>
    </header>
  )
}

