import { notFound } from "next/navigation";
import { getProjectById, projects } from "@/lib/data/projects";
import { ProjectDetailContent } from "./ProjectDetailContent";
import { Metadata } from "next";

interface ProjectPageProps {
    params: {
        id: string;
    };
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
    const project = getProjectById(params.id);
    if (!project) return { title: "Project Not Found" };

    return {
        title: `${project.title} | Vijay Constructions`,
        description: project.description,
        openGraph: {
            title: project.title,
            description: project.description,
            images: [project.image],
        },
    };
}

export async function generateStaticParams() {
    return projects.map((project) => ({
        id: project.id.toString(),
    }));
}

export default function ProjectPage({ params }: ProjectPageProps) {
    const project = getProjectById(params.id);

    if (!project) {
        notFound();
    }

    return <ProjectDetailContent project={project} />;
}
