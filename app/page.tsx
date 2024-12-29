
import { Hero } from '@/components/hero'
import { ProjectsSection } from '@/components/projects-section'
import { SkillsSection } from '@/components/skills-section'
import { AboutSection } from '@/components/about-section'
import { ContactSection } from '@/components/contact-section'
import { Projects } from '@/components/projects'
import { ContactForm } from '@/components/contact-form'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hero />
      <Projects />
      <SkillsSection />
      <AboutSection />
      <ContactForm />
    </main>
  )
}

