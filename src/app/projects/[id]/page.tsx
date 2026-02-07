import { projectsData } from "@/../utils/Data/projects-data";
import FeaturedProjects from "@/app/components/projects/_components/FeaturedProjects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Code,
  Globe,
  User,
  ShieldCheck,
  Cpu,
  Calendar,
  ArrowLeft,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ id: string }>;
};

const ProjectDetails = async ({ params }: Props) => {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === parseInt(id));

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#0d1224] text-white py-12 px-4 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        {/* Back Button */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-pink-500 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Projects</span>
        </Link>

        {/* Hero Section */}
        <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#11152c] shadow-2xl mb-12">
          <div className="absolute inset-0 z-0">
            <Image
              src={project.images?.[0] || "/placeholder/placeholder.png"}
              alt={project.name}
              fill
              className="object-cover opacity-20 blur-sm scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1224] via-transparent to-transparent" />
          </div>

          <div className="relative z-10 p-8 lg:p-16 flex flex-col lg:flex-row gap-12 items-center">
            {/* Project Banner Image */}
            <div className="w-full lg:w-1/2 aspect-video relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
              <Image
                src={project.images?.[0] || "/placeholder/placeholder.png"}
                alt={project.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
            </div>

            {/* Project Header Info */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <div className="flex flex-wrap gap-3">
                <Badge
                  variant="secondary"
                  className="bg-pink-500/10 text-pink-400 border-pink-500/20 px-3 py-1"
                >
                  {project.date || "2024"}
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-violet-500/10 text-violet-400 border-violet-500/20 px-3 py-1"
                >
                  {project.role}
                </Badge>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
                {project.name}
              </h1>

              <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-4 mt-4">
                {project.demo && (
                  <Link href={project.demo} target="_blank">
                    <Button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-pink-500/20 transition-all hover:scale-105 active:scale-95 flex gap-2">
                      <Globe className="w-5 h-5" />
                      Live Preview
                    </Button>
                  </Link>
                )}
                {project.code && (
                  <Link href={project.code} target="_blank">
                    <Button
                      variant="outline"
                      className="border-white/10 bg-white/5 hover:bg-white/10 text-white px-8 py-6 text-lg rounded-xl transition-all hover:scale-105 active:scale-95 flex gap-2"
                    >
                      <Code className="w-5 h-5" />
                      View Source
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content (Left) */}
          <div className="lg:col-span-2 flex flex-col gap-16">
            {/* Highlights */}
            <section className="flex flex-col gap-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-pink-500/10 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-pink-500" />
                </div>
                <h2 className="text-3xl font-bold">Key Highlights</h2>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-1 gap-4">
                {project.highlights?.map((highlight, index) => (
                  <li
                    key={index}
                    className="group p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors flex gap-4"
                  >
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-pink-500 shadow-[0_0_10px_rgba(236,72,153,0.5)] shrink-0" />
                    <p className="text-slate-300 text-lg leading-relaxed">
                      {highlight}
                    </p>
                  </li>
                ))}
              </ul>
            </section>

            {/* Gallery */}
            {project.images && project.images.length > 1 && (
              <section className="flex flex-col gap-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-violet-500" />
                  </div>
                  <h2 className="text-3xl font-bold">Project Gallery</h2>
                </div>
                <Carousel className="w-full">
                  <CarouselContent>
                    {project.images.slice(1).map((image, index) => (
                      <CarouselItem key={index}>
                        <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 group">
                          <Image
                            src={image}
                            alt={`${project.name} Screenshot ${index + 1}`}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105 shadow-2xll"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-4 bg-black/50 border-white/10 hover:bg-white/20 text-white" />
                  <CarouselNext className="right-4 bg-black/50 border-white/10 hover:bg-white/20 text-white" />
                </Carousel>
              </section>
            )}
          </div>

          {/* Sidebar (Right) */}
          <aside className="flex flex-col gap-8">
            {/* Tech Stack Card */}
            <Card className="bg-[#11152c] border-white/10 rounded-3xl overflow-hidden sticky top-24">
              <CardContent className="p-8 flex flex-col gap-8">
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-3">
                    <Cpu className="w-5 h-5 text-pink-500" />
                    <h3 className="text-xl font-bold text-white">
                      Technologies
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="px-4 py-1.5 bg-white/5 border-white/10 text-slate-300 rounded-full hover:border-pink-500/50 hover:bg-white/10 transition-all cursor-default"
                      >
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-3">
                    <User className="w-5 h-5 text-violet-500" />
                    <h3 className="text-xl font-bold text-white">
                      Project Info
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-500">Role</span>
                      <span className="text-slate-300 font-medium">
                        {project.role}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-500">Completed</span>
                      <span className="text-slate-300 font-medium">
                        {project.date || "2024"}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <Link href="/#contact" className="w-full">
                    <Button className="w-full bg-white/5 border border-white/10 hover:bg-white/10 py-6 rounded-xl text-slate-300 font-semibold group flex gap-2">
                      Contact Me About This
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>

        {/* Similar Projects */}
        <div className="mt-32 pt-20 border-t border-white/5">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="flex flex-col gap-4">
              <h2 className="text-4xl font-black">Explore More Work</h2>
              <p className="text-slate-400">
                Other projects you might find interesting.
              </p>
            </div>
            <Link
              href="/#projects"
              className="text-pink-500 font-semibold hover:underline"
            >
              View All Projects →
            </Link>
          </div>
          <FeaturedProjects />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
