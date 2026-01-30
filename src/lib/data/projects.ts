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
        slug: "happy-nest",
        title: "Happy Nest",
        category: "Residential",
        image: "/images/projects/happy-nest/main.png",
        location: "Yercaud",
        description: "A contemporary residential project designed for modern living. Happy Nest features spacious interiors, premium finishes, and a design that maximizes natural light and ventilation, providing a comfortable and elegant home for families.",
        details: {
            client: "Mr. Ramesh",
            area: "2,400 sq.ft",
            year: "2024",
            status: "Completed",
        },
        gallery: [
            "/images/projects/happy-nest/main.png",
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
