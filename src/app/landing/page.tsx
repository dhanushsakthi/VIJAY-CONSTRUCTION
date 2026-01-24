import { Metadata } from "next";
import { LandingContent } from "./LandingContent";

export const metadata: Metadata = {
    title: "Get Your Free Construction Quote | Vijay Constructions",
    description:
        "Request a free consultation and quote for your construction project. Premier builders in Yercaud & Salem with 4.9★ rating.",
};

export default function LandingPage() {
    return <LandingContent />;
}
