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
    externalLink?: string;
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
        slug: "the-viber-yercaud",
        title: "The Viber Yercaud - Villa with Waterfalls",
        category: "Residential",
        image: "/images/projects/viber-villa/exterior.jpg",
        location: "Yercaud",
        description: "A stunning luxury villa nestled in the serene hills of Yercaud, featuring natural waterfalls and breathtaking views. This exquisite property combines traditional charm with modern amenities, offering a perfect retreat for nature lovers and those seeking tranquility.",
        externalLink: "https://www.booking.com/hotel/in/the-viber-villa-with-waterfalls-yercaud.en-gb.html",
        details: {
            client: "Private Owner",
            area: "3,500 sq.ft",
            year: "2024",
            status: "Completed",
        },
        gallery: [
            "/images/projects/viber-villa/exterior.jpg",
            "/images/projects/viber-villa/living-room.png",
            "/images/projects/viber-villa/bedroom.png",
            "/images/projects/viber-villa/dining.png",
            "/images/projects/viber-villa/garden.jpg",
            "/images/projects/viber-villa/waterfall.jpg",
            "/images/projects/viber-villa/outdoor-seating.jpg",
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
    {
        id: 5,
        slug: "happy-nest",
        title: "Happy Nest",
        category: "Residential",
        image: "/images/projects/happy-nest/exterior.png",
        location: "Salem",
        description: "A contemporary residential project designed for modern living. Happy Nest features spacious interiors, premium finishes, and a design that maximizes natural light and ventilation, providing a comfortable and elegant home for families.",
        details: {
            client: "Mr. Ramesh",
            area: "2,400 sq.ft",
            year: "2024",
            status: "Completed",
        },
        gallery: [
            "/images/projects/happy-nest/exterior.png",
            "/images/projects/happy-nest/entrance.png",
            "/images/projects/happy-nest/bedroom.png",
            "/images/projects/happy-nest/dining.png",
            "/images/projects/happy-nest/balcony.png",
        ],
    },
];

export const getProjectById = (id: number | string) => {
    return projects.find(p => p.id === Number(id));
};

export const getProjectBySlug = (slug: string) => {
    return projects.find(p => p.slug === slug);
};
