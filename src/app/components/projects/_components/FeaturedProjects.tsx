"use client";

import { projectsData } from "@/../utils/Data/projects-data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProjectCard from "../project-card";

const FeaturedProjects = () => {
  const sortedProjects = [...projectsData].sort((a, b) => {
    const ad = a.date ? new Date(a.date).getTime() : 0;
    const bd = b.date ? new Date(b.date).getTime() : 0;
    return bd - ad; // newest first
  });

  return (
    <section id="projects">
      <Carousel opts={{ align: "start" }} className="w-full">
        <CarouselContent>
          {sortedProjects.map((project) => (
            <CarouselItem key={project.id} className="md:basis-1/2 lg:basis-1/3">
              <ProjectCard project={project} />
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="text-black hidden md:flex" />
        <CarouselNext className="text-black hidden md:flex" />
      </Carousel>
    </section>
  );
};

export default FeaturedProjects;
