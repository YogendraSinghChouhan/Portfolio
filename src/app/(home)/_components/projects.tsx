"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

interface Project {
  logo?: string;
  title: string;
  description: string;
  images: {
    desktop: {
      light: string;
      dark: string;
    };
    mobile: {
      light: string;
      dark: string;
    };
  };
  tags: string[];
  liveLink: string;
  githubUrl: string;
  features: string[];
}

const projects: Project[] = [
  {
    logo: "/nexttube.svg",
    title: "NextTube",
    description:
      "NextTube is a YouTube-like web application using Next.js that works with real-time YouTube data, featuring user authentication, video browsing, and a theming system.",
    images: {
      desktop: {
        light: "/nexttube/nexttube-desktop-light.png",
        dark: "/nexttube/nexttube-desktop-dark.png",
      },
      mobile: {
        light: "/nexttube/nexttube-phone-light.png",
        dark: "/nexttube/nexttube-phone-dark.png",
      },
    },
    tags: [
      "Next.js",
      "Clerk",
      "Youtube Data API",
      "Tailwind CSS",
      "Shadcn UI",
      "Vercel",
    ],
    liveLink: "https://next-tube-omega.vercel.app/",
    githubUrl: "https://github.com/abhishekdevanda/NextTube",
    features: [
      "Users YouTube data integration with OAuth",
      "Dynamic video browsing using YouTube Data API",
      "Responsive design with Tailwind CSS and Shadcn UI",
    ],
  },
];

export default function Projects() {
  const { resolvedTheme } = useTheme();
  const isMobile = useIsMobile();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const getProjectImage = (project: Project) => {
    if (!mounted) {
      return "/placeholder.svg";
    }
    const deviceType = isMobile ? "mobile" : "desktop";
    const theme = resolvedTheme === "dark" ? "dark" : "light";
    return project.images?.[deviceType]?.[theme] || "/placeholder.svg";
  };
  return (
    <section id="projects" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-10">Projects</h2>

        <div className="grid gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="grid md:grid-cols-2 gap-6 border rounded-xl overflow-hidden group"
            >
              <div className="overflow-hidden relative h-[300px] md:h-full border-b md:border-b-0 md:border-r">
                <div className="absolute inset-0 overflow-y-auto scrollbar-hide">
                  <Image
                    src={getProjectImage(project)}
                    alt={project.title}
                    width={800}
                    height={1200}
                    className="w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold">Key Features:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-sm">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3 pt-2">
                  <Button size="sm">
                    <Link
                      href={project.liveLink}
                      className="flex items-center"
                      target="_blank"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" /> Live
                    </Link>
                  </Button>
                  {project.githubUrl && (
                    <Button size="sm" variant="outline">
                      <Link
                        href={project.githubUrl}
                        className="flex items-center"
                        target="_blank"
                      >
                        <Github className="mr-2 h-4 w-4" /> Code
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
