import { Metadata } from "next";
import { WhyChooseUsContent } from "./WhyChooseUsContent";

export const metadata: Metadata = {
    title: "Why Choose Us",
    description:
        "Discover why Vijay Constructions is the preferred construction partner in Yercaud & Salem - Quality, Experience, Trust, and Excellence.",
};

export default function WhyChooseUsPage() {
    return <WhyChooseUsContent />;
}
