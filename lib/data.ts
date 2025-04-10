import { EventsDataType, typeOfEventTypes, HotEventsData } from "@/types";

export const hoteventsData: HotEventsData[] = [
    {
        eventName: "TechFest 2025",
        description: "A showcase of cutting-edge technology and innovative solutions.",
        department: "Computer Science",
        imgUrl: "https://images.unsplash.com/photo-1736855718942-17b9568bddcf?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        visitLink: "https://example.com/techfest"
    },
    {
        eventName: "EcoHaven",
        description: "An initiative promoting sustainable living and environmental conservation.",
        department: "Environmental Science",
        imgUrl: "https://images.unsplash.com/photo-1735623102113-e40dd41e0886?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        visitLink: "https://example.com/ecohaven"
    },
    {
        eventName: "HealthHorizon",
        description: "A conference exploring the latest trends in health and wellness.",
        department: "Medical Sciences",
        imgUrl: "https://images.unsplash.com/photo-1735487643438-c6e2ec450d3c?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        visitLink: "https://example.com/healthhorizon"
    }
];

export const eventsData: EventsDataType[] = [
    {
        eventName: "TechFest 2025",
        description: "A showcase of cutting-edge technology and innovative solutions.",
        department: "Computer Science",
        imgUrl: "https://images.unsplash.com/photo-1636690536196-4dbb31eb1f75?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        visitLink: "https://example.com/techfest",
        registerLink: "https://example.com/register-techfest"
    },
    {
        eventName: "Cultural Night 2025",
        description: "An evening celebrating diverse cultures through dance, music, and art.",
        department: "Humanities",
        imgUrl: "https://images.unsplash.com/photo-1636690513351-0af1763f6237?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        visitLink: "https://example.com/cultural-night",
        registerLink: "https://example.com/register-cultural-night"
    },
    {
        eventName: "EcoSummit 2025",
        description: "An initiative for sustainable living and environmental awareness.",
        department: "Environmental Studies",
        imgUrl: "https://images.unsplash.com/photo-1636690619068-eb3849be82d1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        visitLink: "https://example.com/eco-summit",
        registerLink: "https://example.com/register-eco-summit"
    },
    {
        eventName: "Sports Carnival 2025",
        description: "A thrilling display of athleticism and sportsmanship across various games.",
        department: "Physical Education",
        imgUrl: "https://images.unsplash.com/photo-1636690513351-0af1763f6237?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        visitLink: "https://example.com/sports-carnival",
        registerLink: "https://example.com/register-sports-carnival"
    },
    {
        eventName: "Business Conclave 2025",
        description: "A platform to connect with industry leaders and discuss business trends.",
        department: "Management",
        imgUrl: "https://images.unsplash.com/photo-1735748917573-78c3387fc8ec?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        visitLink: "https://example.com/business-conclave",
        registerLink: "https://example.com/register-business-conclave"
    },
    {
        eventName: "Literary Fest 2025",
        description: "Celebrating literature with renowned authors, poets, and workshops.",
        department: "English",
        imgUrl: "https://images.unsplash.com/photo-1734779205331-4566d6965fa2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        visitLink: "https://example.com/literary-fest",
        registerLink: "https://example.com/register-literary-fest"
    }
];

export const posterData: any = {
    poster: {
        title: "Tech fest 2025",
        picture: {
            url: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        description: {
            type: "doc",
            content: [
                {
                    type: "heading",
                    attrs: {
                        level: 3
                    },
                    content: [
                        {
                            type: "text",
                            marks: [
                                {
                                    type: "bold"
                                }
                            ],
                            text: "Key Highlights:"
                        }
                    ]
                },
                {
                    type: "paragraph",
                    content: [
                        {
                            type: "text",
                            text: "1️⃣ "
                        },
                        {
                            type: "text",
                            marks: [
                                {
                                    type: "bold"
                                }
                            ],
                            text: "Hackathon:"
                        },
                        {
                            type: "text",
                            text: " 24-hour coding marathon 💻"
                        },
                        {
                            type: "hardBreak"
                        },
                        {
                            type: "text",
                            text: "2️⃣ "
                        },
                        {
                            type: "text",
                            marks: [
                                {
                                    type: "bold"
                                }
                            ],
                            text: "AI & Robotics Expo:"
                        },
                        {
                            type: "text",
                            text: " Showcasing futuristic tech 🤖"
                        },
                        {
                            type: "hardBreak"
                        },
                        {
                            type: "text",
                            text: "3️⃣ "
                        },
                        {
                            type: "text",
                            marks: [
                                {
                                    type: "bold"
                                }
                            ],
                            text: "Tech Talks:"
                        },
                        {
                            type: "text",
                            text: " Sessions by industry leaders 🎤"
                        },
                        {
                            type: "hardBreak"
                        },
                        {
                            type: "text",
                            text: "4️⃣ "
                        },
                        {
                            type: "text",
                            marks: [
                                {
                                    type: "bold"
                                }
                            ],
                            text: "Gaming Tournament:"
                        },
                        {
                            type: "text",
                            text: " Compete in eSports 🎮"
                        }
                    ]
                }
            ]
        },
        time: {
            hour: 11,
            minute: 30
        },
        date: "2025-02-04",
        venue: "Auditorium",
        registration: {
            individual: false,
            end: "2025-02-04"
        },
        phone: "9892883738",
        organizedBy: "bba",
        eventType: "hackathon",
        brochure: "http://localhost:3000/events/create"
    },
    events: [],
    link: "",
    formType: "NONE"
};

export const eventTypes: typeOfEventTypes[] = [
    { value: "intercollegiate", label: "Intercollegiate" },
    { value: "interdepartment", label: "Interdepartment" },
    { value: "seminar", label: "Seminar" },
    { value: "workshop", label: "Workshop" },
    { value: "hackathon", label: "Hackathon" },
    { value: "conference", label: "Conference" },
    { value: "meetup", label: "Meetup" },
];