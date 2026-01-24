import { Metadata } from "next";
import { ProjectsContent } from "./ProjectsContent";

export const metadata: Metadata = {
    title: "Projects",
    description:
        "Explore our portfolio of completed construction projects - Residential, Commercial, and Renovation works in Yercaud & Salem region.",
};

export default function ProjectsPage() {
    return <ProjectsContent />;
}
