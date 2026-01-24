export interface Project {
    id: number;
    slug: string;
    title: string;
    category: string;
    image: string;
    location: string;
    description: string;
    year?: string;
    area?: string;
    details: {
        client?: string;
        area?: string;
        year?: string;
        status?: string;
    };
    gallery?: string[];
}

export const projects: Project[] = [
    {
        id: 1,
        slug: "modern-villa-complex",
        title: "Modern Villa Complex",
        category: "Residential",
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
        location: "Yercaud",
        description: "A state-of-the-art residential complex featuring 12 luxury villas designed with a focus on sustainable architecture and modern living. Each villa incorporates natural sunlight management and advanced water harvesting systems.",
        details: {
            client: "Private Residential Group",
            area: "24,000 sq.ft",
            year: "2023",
            status: "Completed",
        },
        gallery: [
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop",
        ],
    },
    {
        id: 2,
        slug: "commercial-plaza",
        title: "Commercial Plaza",
        category: "Commercial",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
        location: "Salem",
        description: "A prominent commercial hub in the heart of Salem, offering premium office spaces and retail outlets. The building features a striking glass facade and energy-efficient climate control systems.",
        details: {
            client: "SK Real Estate",
            area: "45,000 sq.ft",
            year: "2022",
            status: "Completed",
        },
        gallery: [
            "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop",
        ],
    },
    {
        id: 3,
        slug: "luxury-apartments",
        title: "Luxury Apartments",
        category: "Residential",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
        location: "Yercaud",
        description: "High-end apartment complex perched on the hills of Yercaud, offering breathtaking views and world-class amenities including a rooftop pool and fitness center.",
        details: {
            client: "Vijay Developers",
            area: "18,000 sq.ft",
            year: "2023",
            status: "Under Construction",
        },
    },
    {
        id: 4,
        slug: "office-complex",
        title: "Office Complex",
        category: "Commercial",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
        location: "Salem",
        description: "Modern office building designed for efficiency and productivity, featuring flexible floor plans and state-of-the-art connectivity.",
        details: {
            client: "Salem IT Park",
            area: "32,000 sq.ft",
            year: "2021",
            status: "Completed",
        },
    },
];

export const getProjectById = (id: number | string) => {
    return projects.find(p => p.id === Number(id));
};

export const getProjectBySlug = (slug: string) => {
    return projects.find(p => p.slug === slug);
};
