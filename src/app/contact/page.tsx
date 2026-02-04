import { Metadata } from "next";
import { ContactContent } from "./ContactContent";

export const metadata: Metadata = {
    title: "Contact Us",
    description:
        "Get in touch with Vijay Constructions for your construction needs in Yercaud & Salem. Call 94432 32172 (Founder: G.MATHIALAGAN) or 76958 50762 (CEO: M.VIJAYANAND, M.E., Ph.D).",
};

export default function ContactPage() {
    return <ContactContent />;
}
