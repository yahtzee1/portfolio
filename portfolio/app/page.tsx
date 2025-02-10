import AboutMe from "@/components/about-me"
import WorkExperience from "@/components/work-experience"
import Education from "@/components/education"
import Projects from "@/components/projects"
import SkillsLanguages from "@/components/skills-languages"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <div className="space-y-20">
      <AboutMe />
      <WorkExperience />
      <Education />
      <Projects />
      <SkillsLanguages />
      <Contact />
    </div>
  )
}

