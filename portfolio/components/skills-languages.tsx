"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const skills = {
  technical: [
    { name: "Python", level: 90 },
    { name: "R", level: 85 },
    { name: "SQL", level: 95 },
    { name: "Tableau", level: 90 },
    { name: "PowerBI", level: 85 },
    { name: "MS Office", level: 90 },
  ],
  languages: [
    { name: "English", level: "Proficient" },
    { name: "Persian (Dari)", level: "Native" },
    { name: "Pashto", level: "Intermediate" },
    { name: "Turkish", level: "Proficient" },
  ],
  interests: [
    { name: "Global Development", info: "Passionate about sustainable development and international cooperation" },
    { name: "Academic Research", info: "Enjoy conducting and analyzing research in various fields" },
    { name: "Soccer", info: "Avid player and fan of the beautiful game" },
    { name: "International Travel", info: "Love exploring new cultures and broadening perspectives" },
    { name: "Movies", info: "Enthusiast of cinema, particularly international and independent films" },
    { name: "Photography", info: "Amateur photographer with a keen eye for composition" },
    { name: "Piano", info: "Enjoy playing and composing music in free time" },
  ],
}

export default function SkillsLanguages() {
  return (
    <section id="skills" className="scroll-mt-14">
      <h2 className="text-3xl font-bold mb-6 relative inline-block group">
        Skills & Languages
        <span className="absolute -bottom-1 left-0 w-0 h-1 bg-primary transition-all duration-300 group-hover:w-full"></span>
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Technical Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {skills.technical.map((skill, index) => (
                <motion.div
                  key={index}
                  className="space-y-2"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-primary"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Languages</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {skills.languages.map((language, index) => (
                <motion.div
                  key={index}
                  className="p-3 border rounded-lg hover:bg-primary/5 transition-colors cursor-default"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{language.name}</span>
                    <span className="text-sm text-muted-foreground">{language.level}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Interests</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <TooltipProvider>
                {skills.interests.map((interest, index) => (
                  <Tooltip key={index}>
                    <TooltipTrigger asChild>
                      <motion.span
                        className="px-3 py-1 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors cursor-default"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {interest.name}
                      </motion.span>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{interest.info}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </TooltipProvider>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

