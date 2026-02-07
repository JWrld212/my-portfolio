import { projectsData } from "@/../utils/Data/projects-data";
import ProjectCard from "@/app/components/projects/project-card";

const ProjectsPage = () => {
  return (
    <section id="projects" className="relative min-h-screen">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="flex flex-col gap-16 items-center container mx-auto py-24 px-4 sm:px-8 relative z-10">
        <div className="max-w-3xl text-center flex flex-col gap-6">
          <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight">
            Things I've{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-600">
              Built
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed font-medium">
            Explore a collection of my work — real-world applications, creative
            experiments, and full-stack solutions crafted with precision and
            passion.
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 w-full">
          {projectsData.map((project) => (
            <div key={project.id} className="h-full">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
