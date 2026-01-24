import { Metadata } from "next";
import { ServicesContent } from "./ServicesContent";

export const metadata: Metadata = {
    title: "Services",
    description:
        "Comprehensive construction and civil engineering services by Vijay Constructions - Residential, Commercial, Renovation, and Civil Engineering in Yercaud & Salem.",
};

export default function ServicesPage() {
    return <ServicesContent />;
}
