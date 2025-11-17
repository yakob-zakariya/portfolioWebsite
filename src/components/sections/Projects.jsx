import React from "react";
import Section from "../Section";
import SectionTitle from "../SectionTitle";
import Card from "../Card";
import Button from "../Button";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with payment integration, inventory management, and admin dashboard.",
      image: "🛒",
      tags: [
        "React",
        "Node.js",
        "MongoDB",
        "Stripe",
      ],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management tool with real-time updates, team collaboration, and analytics.",
      image: "✅",
      tags: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Prisma",
      ],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Social Media Dashboard",
      description:
        "Analytics dashboard for social media metrics with beautiful data visualizations and insights.",
      image: "📊",
      tags: [
        "React",
        "D3.js",
        "Tailwind",
        "Firebase",
      ],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Weather Forecast App",
      description:
        "Real-time weather application with location-based forecasts and interactive maps.",
      image: "🌤️",
      tags: [
        "React",
        "API Integration",
        "Tailwind",
      ],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Portfolio CMS",
      description:
        "Content management system for portfolio websites with drag-and-drop builder.",
      image: "🎨",
      tags: ["Next.js", "Sanity", "Tailwind"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Fitness Tracker",
      description:
        "Mobile-first fitness tracking app with workout plans, progress tracking, and nutrition guides.",
      image: "💪",
      tags: ["React Native", "Firebase", "Redux"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <Section id="projects" background="alt">
      <SectionTitle
        title="Featured Projects"
        subtitle="Some of my recent work and side projects"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="flex flex-col h-full"
          >
            {/* Project Image/Icon */}
            <div className="w-full h-48 bg-linear-to-br from-primary-100 to-accent-100 dark:from-primary-900/30 dark:to-accent-900/30 rounded-lg mb-4 flex items-center justify-center text-7xl">
              {project.image}
            </div>

            {/* Project Content */}
            <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
              {project.title}
            </h3>

            <p className="text-gray-600 dark:text-gray-400 mb-4 grow">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map(
                (tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button
                variant="primary"
                size="sm"
                className="flex-1"
                onClick={() =>
                  window.open(
                    project.liveUrl,
                    "_blank"
                  )
                }
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                Live Demo
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  window.open(
                    project.githubUrl,
                    "_blank"
                  )
                }
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
