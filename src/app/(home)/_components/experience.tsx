"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "Backend Developer Intern",
    company: "PearlThoughts",
    period: "Jun 2025 - Jul 2025",
    responsibilities: [
      "Collaborated with a team using Git and GitHub for version control and workflow management.",
      "Developed APIs for a doctor-patient appointment system as part of a live project.",
      "Worked extensively with NestJS, TypeORM, PostgreSQL, and TypeScript in a team environment.",
    ],
    skills: ["Nest.js", "PostgreSQL", "TypeScript", "TypeORM"],
  },
  {
    title: "laravel Developer",
    company: "Codraj Infotech PVT LMT",
    period: "Jan 2023 - Mar 2023",
    responsibilities: ["Working on Laravel development."],
    skills: ["Laravel", "Vue.js", "MongoDB", "SQL", "PostgreSQL"],
  },
  {
    title: "Node.js Developer Intern",
    company: "Appinop Technologies",
    period: "Jan 2023 – March 2023",
    responsibilities: [
      "Gained hands-on experience in JavaScript, Node.js, Express.js, and MongoDB.",
      "Developed and maintained RESTful APIs and integrated MongoDB for efficient data handling.",
    ],
    skills: ["Node.js", "JavaScript", "Express.js", "MongoDB"],
  },
  {
    title: "Linux Automation Virtual Internship ",
    company: "Red Hat",
    period: "Mar 2022 – May 2022",
    responsibilities: [
      "Master Linux commands, file system, permissions, services.",
      "Automate system configuration, user management, and deployments",
      "Apply automation on multiple servers, ensure security, and document processes.",
    ],
    skills: ["Linux", "File Management","Version Control & Collaboration"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-10">Experience</h2>

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p className="text-muted-foreground">{exp.company}</p>
                </div>
                <p className="text-sm text-muted-foreground">{exp.period}</p>
              </div>

              <ul className="list-disc pl-5 space-y-2">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="text-sm">
                    {resp}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, idx) => (
                  <Badge key={idx} variant="outline">
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
