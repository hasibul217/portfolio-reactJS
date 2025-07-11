/* eslint-disable react/jsx-key */
import { ArrowRight, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Offers Bangla",
    description:
      "An e-commerce platform with separate user and brand dashboards, authentication, offers, products, and auction features.",
    image: "/projects/offersbangla.png",
    tags: ["ReactJS", "TailwindCSS", "Django"],
    demoUrl: "https://offersbangla.xyz/",
  },
  {
    id: 2,
    title: "Soft Story",
    description:
      "A multi-tenant office management system to manage employee tasks, roles, and administrative operations.",
    image: "/projects/softstory.png",
    tags: ["ReactJS", "TailwindCSS", "Django"],
    demoUrl: "https://softstory.xyz/",
  },
  {
    id: 3,
    title: "BanglaON",
    description:
      "A social engagement platform designed to connect users with celebrities through interactive content.",
    image: "/projects/banglaon.png",
    tags: ["ReactJS", "Bootstrap", "Django"],
    demoUrl: "http://banglaon.com/en/",
  },
  {
    id: 4,
    title: "Ramadan Pray Time",
    description:
      "A prayer tracker that dynamically shows your daily iftar, sehri, and salat times based on location.",
    image: "/projects/ramadantimes.png",
    tags: ["ReactJS", "TailwindCSS"],
    demoUrl: "https://ramadan-pray-time.netlify.app/",
    githubUrl: "https://github.com/hasibul217/Ramadan-Times",
  },
  {
    id: 5,
    title: "Swift Mart",
    description:
      "A responsive e-commerce template built with React and Tailwind, ready for reuse and customization.",
    image: "/projects/swiftmart.png",
    tags: ["ReactJS", "TailwindCSS"],
    demoUrl: "#",
    githubUrl: "https://github.com/hasibul217/SwiftMart",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project is designed with
          focus on performance, user experience, and scalability.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded overflow-hidden shadow-xs card-hover flex flex-col"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-2 h-[3.5rem]">
                  {project.description}
                </p>

                <div className="mt-auto flex justify-between items-center">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  ) : (
                    <span />
                  )}

                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 text-sm font-medium rounded-full bg-primary text-primary-foreground hover:bg-primary/80 transition"
                  >
                    View Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/hasibul217"
            rel="noopener noreferrer"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
