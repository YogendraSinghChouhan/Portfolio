"use client";

import { motion } from "framer-motion";
import { IconProvider } from "@/components/icons/icons-provider";
import { RiNextjsFill } from "react-icons/ri";
import {
  SiExpress,
  SiMongoose,
  SiNestjs,
  SiPrisma,
  SiTypeorm,
  SiVercel,
} from "react-icons/si";
import {
  BiLogoGit,
  BiLogoGithub,
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoMongodb,
  BiLogoNodejs,
  BiLogoPostgresql,
  BiLogoReact,
  BiLogoTailwindCss,
} from "react-icons/bi";
import { VscVscode } from "react-icons/vsc";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      {
        name: "Next.js",
        icon: (
          <RiNextjsFill name="nextjs" className="text-black dark:text-white" />
        ),
      },
      {
        name: "React.js",
        icon: <BiLogoReact className="text-cyan-400" />,
      },
      {
        name: "Tailwind CSS",
        icon: <BiLogoTailwindCss className="text-cyan-500" />,
      },
      {
        name: "TypeScript",
        icon: <BiLogoTypescript className="text-blue-500" />,
      },
      {
        name: "JavaScript",
        icon: <BiLogoJavascript className="text-yellow-400" />,
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Express.js",
        icon: <SiExpress className="text-black dark:text-white" />,
      },
      {
        name: "Nest.js",
        icon: <SiNestjs className="text-rose-500" />,
      },
      {
        name: "Node.js",
        icon: <BiLogoNodejs className="text-lime-400" />,
      },
      {
        name: "Bun.js",
        icon: <IconProvider name="bunjs" />,
      },
    ],
  },
  {
    title: "Databases & ORMs",
    skills: [
      {
        name: "MongoDB",
        icon: <BiLogoMongodb className="text-green-600" />,
      },
      {
        name: "PostgreSQL",
        icon: <BiLogoPostgresql className="text-sky-700 dark:text-sky-600" />,
      },
      {
        name: "Mongoose",
        icon: <SiMongoose className=" text-red-900" />,
      },
      {
        name: "Prisma",
        icon: <SiPrisma className="text-sky-950 dark:text-white" />,
      },
      { name: "Drizzle", icon: <IconProvider name="drizzle" /> },
      { name: "TypeORM", icon: <SiTypeorm className="text-red-600" /> },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      {
        name: "Git",
        icon: <BiLogoGit className="text-red-500" />,
      },
      {
        name: "GitHub",
        icon: <BiLogoGithub className="text-black dark:text-white" />,
      },
      {
        name: "VS Code",
        icon: <VscVscode className="text-sky-500" />,
      },
      {
        name: "Cursor",
        icon: <IconProvider name="cursorAi" />,
      },
      {
        name: "Vercel",
        icon: <SiVercel className="text-black dark:text-white" />,
      },
    ],
  },
];

export default function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2
          className="text-3xl font-bold mb-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          My Skills
        </motion.h2>
        <motion.p
          className="text-muted-foreground mb-10"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Technologies and tools I&apos;ve worked with throughout my projects
          and experience
        </motion.p>

        <motion.div
          className="grid gap-10"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={item}>
              <motion.h3
                className="text-xl font-semibold mb-4"
                whileHover={{
                  x: 5,
                  transition: { type: "spring", stiffness: 300 },
                }}
              >
                {category.title}
              </motion.h3>
              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    className="flex flex-col items-center gap-2 group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 * idx }}
                  >
                    <motion.div
                      className={`
                        w-14 h-14 rounded-full bg-muted flex items-center justify-center text-3xl
                        group-hover:bg-muted/50 transition-colors duration-300
                        border border-transparent group-hover:border-primary/20
                      `}
                      whileHover={{
                        y: -5,
                        transition: { type: "spring", stiffness: 300 },
                      }}
                    >
                      {skill.icon}
                    </motion.div>
                    <motion.span className="text-xs text-center text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      {skill.name}
                    </motion.span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
