import { Metadata } from "next";
import { ContactContent } from "./ContactContent";

export const metadata: Metadata = {
    title: "Contact Us",
    description:
        "Get in touch with Vijay Constructions for your construction needs in Yercaud & Salem. Call 76958 50762 or visit our office.",
};

export default function ContactPage() {
    return <ContactContent />;
}
