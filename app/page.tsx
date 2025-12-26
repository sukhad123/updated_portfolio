"use client";

import { Card, CardBody, CardHeader } from "@heroui/card";
import { Avatar } from "@heroui/avatar";
import { Chip } from "@heroui/chip";
import { Divider } from "@heroui/divider";
import { title, subtitle } from "@/components/primitives";
import { Link } from "@heroui/link";
import { GithubIcon, LinkedInIcon } from "@/components/icons";
import Draggable from 'react-draggable';
import { useRef } from "react";
import { CursorifyProvider, DefaultCursor  } from '@cursorify/react'
import { motion } from "framer-motion";
import Toaster from "@/components/Toast";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  gradient: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
}

interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  avatarSrc?: string;
}

const experiences: Experience[] = [
  {
    id: "1",
    title: "Research Assistant",
    company: "Seneca Applied Research",
    period: "Sep 2025 - Dec 2025",
    description: "Enhanced AI-driven personalization for the NOUN project under a government-funded research grant, optimizing model accuracy and reducing inference time. Performed system analysis, prototype testing, and collaborated with cross-functional teams in an Agile environment",
    technologies: ["React", "TypeScript", "AWS"],
    avatarSrc:'https://tse2.mm.bing.net/th/id/OIP.dDIycw6IeK7iWO5HH-wSQQHaCz?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3'
  },
  {
    id: "2",
    title: "Software Engineer Intern",
    company: "EC Studios / Everyday Chemist",
    period: "Jan 2025 - Aug 2025",
    description: "Developed and maintained full-stack features using ReactJS, TypeScript, NodeJS, Express, MongoDB, and REST APIs, automating 4+ workflows and boosting operational efficiency by 40%. Deployed scalable services on AWS (EC2, S3, RDS) reducing database latency by 25% for 5,000+ active users. Implemented CI/CD pipelines, containerized services with Docker, and ensured quality through peer code reviews and Agile sprints.",
    technologies: [  "TypeScript", "Next.js", "AWS", "Docker"],
  },
  {
    id: "3",
    title: "Software Developer Intern",
    company: "Empowered Futures",
    period: "Nov 2024 - Jan 2025",
    description: "Optimized backend APIs and frontend performance in Next.js, improving load times and user experience. Participated in Agile planning and code reviews to uphold high-quality standards.",
    technologies: ["Next.js", "JavaScript", "TypeScript"],
    avatarSrc:"https://www.empoweredfutures.ca/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fef-new-logo.09462780.png&w=3840&q=75"
  },
];

const projects: Project[] = [
  {
    id: "1",
    title: "City Recommender",
    subtitle: "Full Stack Application",
    description: "Full stack web application to recommend different canadian cities on the basis of specific user preferences.",
    icon: "🚀",
    gradient: "from-primary to-secondary",
    technologies: ["Next.js", "JavaScript", "PostgreSQL", "OpenAI", "Inngest", "Heroui", "Render", "Leaflet", "AWS Cognito, S3"],
    githubUrl: "https://github.com/sukhad123/City_Recommender",
    demoUrl: "https://prj-666-team-9.vercel.app/",
  },
  {
    id: "2",
    title: "Fragment Microservice",
    subtitle: "AWS Containerized Microservice",
    description: "This project provides a robust and scalable API for managing data fragments. It allows users to create, read, update, and delete fragments, with support for various content types and authentication methods. The API is designed to be flexible and can be deployed to different environments, including AWS and local development setups. It solves the problem of efficiently managing and serving data fragments in a secure and reliable manner.",
    icon: "📱",
    gradient: "from-success to-primary",
    technologies: ["Node.js", "AWS Cognito", "AWS ECS", "AWS ECR", "AWS S3", "AWS DynamoDB", "AWS Load Balancer"],
    githubUrl: "https://github.com/sukhad123/fragments",
    demoUrl: "https://github.com/sukhad123/fragments",
  },
  {
    id: "3",
    title: "Chrome Extension for Slack",
    subtitle: "Chrome Extension with OpenAI API",
    description: "A Chrome Extension for Slack that refines your message tone—whether you're trying to sound more Gen Z chill 😎 or professionally polished",
    icon: "🤖",
    gradient: "from-warning to-danger",
    technologies: ["JavaScript", "Node.js", "OpenAI"],
    githubUrl: "https://github.com/sukhad123/Chrome-Extension-For-Slack",
    demoUrl: "https://www.linkedin.com/posts/sukhad-adhikari_genzifyslack-workhardslackharder-builtthisat3am-activity-7346368658220175360-Sqca/?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADoVVSUBuNtYnQH17i7IR9JQ80YnQ7zG3no",
  },
  {
    id: "4",
    title: "Grocery Buddy ",
    subtitle: "A Grocery List Management System",
    description: "Grocery Buddy is a smart grocery shopping platform that leverages AI to enhance how users plan, buy, and manage groceries together. Featuring an intuitive UI built with React and a powerful Next.js backend, the app introduces collaborative cart functionality and an AI-driven insight chat system to assist users with smarter grocery decisions.",
    icon: "🛒",
    gradient: "from-cyan to-blue",
    technologies: ["Next.js", "PostgreSQL", "TypeScript", "DeepSeek"],
    githubUrl: "https://github.com/sukhad123/GroceryBuddy",
    demoUrl: "https://test-grocery.vercel.app/",
  },
  {
    id: "5",
    title: "Hotel Reservation System ",
    subtitle: "A Grocery List Management System",
    description: "Desktop application for hotel reservation system built with Java and JavaFX.",
    icon: "🏨",
    gradient: "from-cyan to-blue",
    technologies: ["Java", "JavaFX", "MySQL"],
    githubUrl: "https://github.com/sukhad123/Hotel-Reservation-System",
    demoUrl: "https://github.com/sukhad123/Hotel-Reservation-System",
  },
  {
    id: "6",
    title: "Closing Checklist",
    subtitle: "A complete solution for closing a restaurant",
    description: "A comprehensive web application designed to streamline restaurant closure operations, originally developed for use by my previous manager.",
    icon: "🍽️",
    gradient: "from-cyan to-blue",
    technologies: ["HeroUI", "Next.js", "TypeScript"],
    githubUrl: "https://github.com/sukhad123/randomProject",
    demoUrl: "https://random-project-beige.vercel.app/",
  },
    {
    id: "8",
    title: "Closing Checklist",
    subtitle: "A complete solution for closing a restaurant",
    description: "A comprehensive web application designed to streamline restaurant closure operations, originally developed for use by my previous manager.",
    icon: "🍽️",
    gradient: "from-cyan to-blue",
    technologies: ["HeroUI", "Next.js", "TypeScript"],
    githubUrl: "https://github.com/sukhad123/randomProject",
    demoUrl: "https://random-project-beige.vercel.app/",
  },
  {
    id: "7",
    title: "Lego Data Web Application",
    subtitle: " ",
    description: "This project is a dynamic web application designed to store real-time Lego data information. It was developed from scratch following the Waterfall Model approach.",
    icon: "🧱",
    gradient: "from-cyan to-blue",
    technologies: ["JavaScript", "Node.js", "Cyclic"],
    githubUrl: "https://github.com/sukhad123/Web322_LegoSets_WebApplication",
    demoUrl: "https://github.com/sukhad123/Web322_LegoSets_WebApplication",
  },
];

export default function Home() {
    const nodeRef = useRef(null);
  return (
    <CursorifyProvider
    cursor={<DefaultCursor />}
      opacity={1}
      delay={1}
      defaultCursorVisible={false}
      breakpoint={997}
    >
    <div className="flex flex-col gap-16">
      {/* Home / About Me Section */}
      <Toaster/>
      <section id="home" className="flex flex-col items-center justify-center gap-6 py-12 md:py-16 min-h-[80vh]">
         <Draggable nodeRef={nodeRef}>
          <motion.div
  drag
  whileDrag={{
    scale: 1.1,
    boxShadow: "0px 10px 20px rgba(0,0,0,0.2)"
  }}
>
  <Avatar ref ={nodeRef}
          src="sukhad.png"
          className="w-32 h-32 text-large"
          name="Your Name"
        />
</motion.div>
        
        </Draggable>
        <div className="inline-block max-w-2xl text-center justify-center">
           <Draggable nodeRef={nodeRef}>
          <div ref ={nodeRef} className={title({ size: "lg" })}>
                 <motion.div
  drag
  whileDrag={{
    scale: 1.1,
    boxShadow: "0px 10px 20px rgba(0,0,0,0.2)"
  }}
>
            Hi, I'm <span className={title({ color: "violet", size: "lg" })}>Sukhad Adhikari</span>
         </motion.div> </div>
          </Draggable>
          <Draggable nodeRef={nodeRef}>
            
            <div ref ={nodeRef} className={subtitle({ class: "mt-4" })}>
                         <motion.div
  drag
  whileDrag={{
    scale: 1.1,
    boxShadow: "0px 10px 20px rgba(0,0,0,0.2)"
  }}
>
            Full Stack Developer | Problem Solver | Tech Enthusiast
          </motion.div> </div>
          </Draggable>
        <Draggable nodeRef={nodeRef}>
               <motion.div
  drag
  whileDrag={{
    scale: 1.1,
    boxShadow: "0px 10px 20px rgba(0,0,0,0.2)"
  }}
>
          <div ref ={nodeRef}  >
             <p className="text-default-600 mt-2 text-lg">
            Welcome to my portfolio! I'm passionate about creating beautiful, functional, and user-friendly applications.
            Explore my work, experience, and projects below.
          </p>
          </div>
          </motion.div>
        </Draggable>
         
        </div>
        <div className="flex gap-4 mt-4">
          <Link
            isExternal
            href="https://github.com/sukhad123"
            className="text-default-500 hover:text-primary transition-colors"
          >
            <GithubIcon size={24} />
          </Link>
          <Link
            isExternal
            href="https://www.linkedin.com/in/sukhad-adhikari/"
            className="text-default-500 hover:text-primary transition-colors"
          >
            <LinkedInIcon size={24} />
          </Link>
        </div>
      </section>

      <Divider />

      {/* Summary Section */}
      <section id="summary" className="py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className={title({ size: "md", class: "mb-8 text-center" })}>
            Professional Summary
          </h2>
          <Card className="w-full">
            <CardBody className="gap-4">
              <p className="text-default-700 text-lg leading-relaxed">
                I am a dedicated software developer with a passion for creating innovative solutions
                and delivering high-quality applications. With expertise in modern web technologies,
                I specialize in building scalable, maintainable, and user-centric software.
              </p>
              <p className="text-default-600 leading-relaxed">
                My approach combines technical excellence with creative problem-solving, ensuring
                that every project I work on meets both functional requirements and user expectations.
                I thrive in collaborative environments and am always eager to learn and adapt to new
                technologies and methodologies.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <Chip color="primary" variant="flat">React</Chip>
                <Chip color="secondary" variant="flat">Next.js</Chip>
                <Chip color="success" variant="flat">TypeScript</Chip>
                <Chip color="warning" variant="flat">Node.js</Chip>
                <Chip color="danger" variant="flat">Python</Chip>
                <Chip color="primary" variant="flat">MongoDB</Chip>
                <Chip color="secondary" variant="flat">PostgreSQL</Chip>
                <Chip color="secondary" variant="flat">Docker</Chip>
                <Chip color="secondary" variant="flat">AWS</Chip>
                <Chip color="warning" variant="flat">JavaScript</Chip>
              </div>
            </CardBody>
          </Card>
        </div>
      </section>

      <Divider />

      {/* Experience Section */}
      <section id="experience" className="py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className={title({ size: "md", class: "mb-12 text-center" })}>
            Work Experience
          </h2>
          <div className="mt-2 flex flex-col gap-6">
            {experiences.map((experience) => (
              <Card key={experience.id}>
                <CardHeader className="flex gap-3">
                  <Avatar
                    src={experience.avatarSrc || undefined}
                    name={experience.company}
                    size="lg"
                    radius="lg"
                  />
                  <div className="flex flex-col">
                    <p className="text-lg font-semibold">{experience.title}</p>
                    <p className="text-small text-default-500">
                      {experience.company} • {experience.period}
                    </p>
                  </div>
                </CardHeader>
                <CardBody>
                  <p className="text-default-700 whitespace-pre-line">
                    {experience.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {experience.technologies.map((tech) => (
                      <Chip key={tech} size="sm" variant="flat">
                        {tech}
                      </Chip>
                    ))}
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* Education Section */}
      <section id="education" className="py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className={title({ size: "md", class: "mb-8 text-center" })}>
            Education
          </h2>
          <div className=" mt-2 flex flex-col gap-6">
            <Card>
              <CardHeader className="flex gap-3">
                <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-primary/10">
                  <span className="text-2xl">🎓</span>
                </div>
                <div className="flex flex-col">
                  <p className="text-lg font-semibold">Advanced Diploma in Computer Programming and Analysis</p>
                  <p className="text-small text-default-500">Seneca Polytechnic • Sep 2022 - Dec 2025</p>
                </div>
              </CardHeader>
              <CardBody>
                <p className="text-default-700">
                   Focused on software engineering, algorithms, and data structures.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Chip size="sm" color="primary" variant="flat">Data Structures</Chip>
                  <Chip size="sm" color="secondary" variant="flat">Algorithms</Chip>
                  <Chip size="sm" color="success" variant="flat">Full Stack Development</Chip>
                  <Chip size="sm" color="success" variant="flat">Database Management</Chip>
                  <Chip size="sm" color="success" variant="flat">Cloud Computing</Chip>
      </div>
              </CardBody>
            </Card>

            
          </div>
        </div>
      </section>

      <Divider />

      {/* Projects Section */}
      <section id="projects" className="py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className={title({ size: "md", class: "mb-8 text-center" })}>
            Featured Projects
          </h2>
          <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <Card key={project.id} className="hover:scale-105 transition-transform">
                <CardHeader className="flex gap-3">
                  <div className={`flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${project.gradient}`}>
                    <span className="text-xl">{project.icon}</span>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-lg font-semibold">{project.title}</p>
                    <p className="text-small text-default-500">{project.subtitle}</p>
                  </div>
                </CardHeader>
                <CardBody>
                  <p className="text-default-700">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.map((tech) => (
                      <Chip key={tech} size="sm" variant="flat">
                        {tech}
                      </Chip>
                    ))}
                  </div>
                  <div className="flex gap-2 mt-4">
                    {project.githubUrl && (
        <Link
          isExternal
                        href={project.githubUrl}
                        className="text-sm text-primary"
                      >
                        View Code →
        </Link>
                    )}
                    {project.demoUrl && (
        <Link
          isExternal
                        href={project.demoUrl}
                        className="text-sm text-primary"
        >
                        Live Demo →
        </Link>
                    )}
                  </div>
                </CardBody>
              </Card>
            ))}
      </div>
      </div>
    </section>
    </div>
    </CursorifyProvider>
  );
}
