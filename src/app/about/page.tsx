import { Metadata } from "next";
import { AboutContent } from "./AboutContent";

export const metadata: Metadata = {
    title: "About Us",
    description:
        "Learn about Vijay Constructions - Premier civil engineering and construction company serving Yercaud & Salem region with 15+ years of experience.",
};

export default function AboutPage() {
    return <AboutContent />;
}
