import Image from "next/image";
import Link from "next/link";
import { Github, Globe } from "lucide-react";
import projects from "@/app/projects";

export default function ProjectPage({ params: { id } }: { params: { id: string } }) {
  const project = projects.find((project, index) => index.toString() === id);

  if (!project) {
    return <div>No project 🤔</div>;
  }

  return (
    <div className="min-h-screen">
      <main className="max-w-2xl mx-auto px-4 py-12">
        <div className="space-y-12">
          <Link href="/" className="text-[#A7A7FF] hover:underline">← Back to projects</Link>
          
          <section className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold">{project.title}</h1>
              <div className="flex items-center gap-4">
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  className="flex items-center gap-2 text-gray-300 hover:text-[#A7A7FF] transition-colors"
                >
                  <Github size={18} />
                  <span>GitHub</span>
                </a>
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  className="flex items-center gap-2 text-gray-300 hover:text-[#A7A7FF] transition-colors"
                >
                  <Globe size={18} />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>

            <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-gray-700">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-2xl font-medium">About the Project</h2>
                <p className="text-gray-300 leading-relaxed">{project.description}</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-medium">Technologies Used</h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 text-sm bg-gray-800 text-[#A7A7FF] rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
