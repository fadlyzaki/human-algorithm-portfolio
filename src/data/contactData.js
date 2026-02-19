import {
    Linkedin, Twitter, Dribbble, Facebook, Instagram, FileText,
    Activity, BookOpen, PenTool
} from 'lucide-react';

export const contactInfo = {
    email: "fadly.uzzaki@gmail.com",
    location: "Jakarta, Indonesia",
    timezone: "GMT+7 (WIB)",
    availability: "OPEN_FOR_OPPORTUNITIES"
};

export const socialMatrix = [
    {
        category: "CORE_UPLINK (Professional)",
        items: [
            { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/fadlyzaki/", color: "hover:text-blue-500" },
            { name: "Dribbble", icon: Dribbble, url: "https://dribbble.com/fadlyzaki", color: "hover:text-pink-500" },
            { name: "GitHub", icon: FileText, url: "https://github.com/fadlyzaki/", color: "hover:text-gray-500" }
        ]
    },
    {
        category: "BROADCAST_LAYER (Social)",
        items: [
            { name: "Twitter / X", icon: Twitter, url: "https://x.com/Fadlyzaki", color: "hover:text-sky-500" },
            { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/fadlyzaki", color: "hover:text-purple-500" },
            { name: "Facebook", icon: Facebook, url: "https://web.facebook.com/fadly.uzzaki", color: "hover:text-blue-600" }
        ]
    },
    {
        category: "DATA_LOGS (Writing)",
        items: [
            { name: "Medium", icon: BookOpen, url: "https://medium.com/@fadlyzaki", color: "hover:text-green-500" },
            { name: "Substack", icon: PenTool, url: "https://substack.com/@fadlyzaki?", color: "hover:text-orange-500" }
        ]
    },
    {
        category: "TELEMETRY (Physical)",
        items: [
            { name: "Strava", icon: Activity, url: "https://www.strava.com/athletes/129304799", color: "hover:text-orange-600" }
        ]
    }
];
