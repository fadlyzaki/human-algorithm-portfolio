import {
    Zap, BookOpen, AlertTriangle, Activity, Layers, Terminal, Flame, PenLine, PenTool, Coffee, Briefcase, Globe, Layout, User, Shield, Award
} from 'lucide-react';

export const getRuntimeLog = (t) => [
    {
        year: '2025 - Present',
        type: 'ACTIVE_DEPLOYMENT',
        title: t('about.log_7_title'),
        desc: t('about.log_7_desc'),
        icon: Zap,
        color: 'text-[var(--accent-green)]',
        category: 'bio'
    },
    {
        year: 'July 2024 - Jan 2026',
        type: 'KNOWLEDGE_INSTALL',
        title: t('about.log_master_title'),
        desc: t('about.log_master_desc'),
        link: 'productivity-illusion',
        linkType: 'side-project',
        icon: BookOpen,
        color: 'text-[var(--accent-blue)]',
        category: 'bio'
    },
    {
        year: '2022 - 2025',
        type: 'SYSTEM_UPGRADE',
        title: t('about.log_6_title'),
        desc: t('about.log_6_desc'),
        icon: AlertTriangle,
        color: 'text-[var(--accent-red)]',
        highlight: true,
        category: 'bio'
    },
    {
        year: 'May 2022 - Nov 2022',
        type: 'EXECUTION_LOG',
        title: t('about.log_5_title'),
        company: 'Lumina',
        link: 'workforce',
        desc: t('about.log_5_desc'),
        tags: ["Community Platform", "Blue Collar", "Accessibility"],
        icon: Activity,
        color: 'text-[var(--text-primary)]',
        category: 'work'
    },
    {
        year: 'Jun 2020 - Apr 2022',
        type: 'EXECUTION_LOG',
        title: t('about.log_3_title'),
        company: 'GudangAda',
        link: 'commerce',
        desc: t('about.log_3_desc'),
        tags: ["B2B Marketplace", "Logistics", "Design Systems"],
        icon: Layers,
        color: 'text-[var(--text-primary)]',
        category: 'work'
    },

    {
        year: 'Mar 2018 - Apr 2020',
        type: 'EXECUTION_LOG',
        title: t('about.log_2_title'),
        company: 'STOQO',
        link: 'efficiency',
        desc: t('about.log_2_desc'),
        tags: ["F&B Supply Chain", "Operations", "Sourcing"],
        icon: Layers,
        color: 'text-[var(--text-primary)]',
        category: 'work'
    },
    {
        year: '2015 - 2018',
        type: 'BOOT_SEQUENCE',
        title: t('about.log_1_title'),
        desc: t('about.log_1_desc'),
        icon: Terminal,
        color: 'text-[var(--accent-blue)]',
        category: 'bio'
    }
];

export const getStreaks = (t) => [
    { label: "Duolingo", frequency: "Daily", icon: Flame, color: "text-orange-500", note: t('about.habit_consistency'), url: "https://www.duolingo.com/profile/fadlyzaki" },
    { label: "Strava", frequency: "Daily", icon: Activity, color: "text-orange-600", note: t('about.habit_cache'), url: "https://www.strava.com/athletes/129304799" },
    { label: "Goodreads", frequency: "Daily 10 mins", icon: BookOpen, color: "text-blue-400", note: t('about.habit_pattern'), url: "https://www.goodreads.com/user/show/32928962-fadlyzaki" },
    { label: "Substack", frequency: "Weekly", icon: PenLine, color: "text-purple-400", note: t('about.habit_noise'), url: "https://substack.com/@fadlyzaki?" }
];

export const creativeProcesses = [
    { name: "PIANO_DRIVER.EXE", icon: Headphones, url: "https://www.instagram.com/stories/highlights/18053183015382725/" },
    { name: "ANALOG_SKETCH", icon: PenLine, url: "https://www.instagram.com/stories/highlights/18100704214828888/" },
    { name: "DIGITAL_CANVAS", icon: PenTool, url: "https://www.instagram.com/stories/highlights/18140818381062819/" },
    { name: "SYSTEM_IDLE", icon: Coffee } // Filler process
];

// Re-using imports from top if possible, or just re-importing what's needed for this array
import { Headphones } from 'lucide-react';

export const certifications = [
    {
        title: "Become Product Manager",
        issuer: "Udemy",
        date: "Jul 2023",
        skills: ["Product Design", "Product Management", "Product Development"],
        icon: Briefcase,
        url: "https://www.udemy.com/certificate/UC-b40694fa-a656-48f3-b8e9-3dd6c9b70acb/"
    },
    {
        title: "Digital Marketing Workshop",
        issuer: "RevoU",
        date: "Oct 2021",
        skills: ["Digital Marketing", "SEO", "Content Strategy"],
        icon: Globe,
        url: "https://certificates.revou.co/fadly-uzzaki-certificate-attendance-gadmw21.pdf"
    },
    {
        title: "Input and Interaction",
        issuer: "Coursera",
        date: "Aug 2019",
        skills: ["Interaction Design", "UI Design", "HCI"],
        id: "GE4JFF2ZZHYK",
        icon: Layout,
        url: "https://www.coursera.org/account/accomplishments/verify/GE4JFF2ZZHYK"
    },
    {
        title: "Information Design",
        issuer: "Coursera",
        date: "Jul 2019",
        skills: ["Data Visualization", "Information Architecture", "Visual Design"],
        id: "VLX7M5BE5TFF",
        icon: Layers, // Note: Layers is used here and above
        url: "https://www.coursera.org/account/accomplishments/verify/VLX7M5BE5TFF"
    },
    {
        title: "Design Kit: Human-Centered Design",
        issuer: "+Acumen / IDEO.org",
        date: "May 2018",
        skills: ["HCD", "Prototyping", "Design Research"],
        id: "3385-1632464",
        icon: User,
        url: "https://plusacumen.novoed.com/#!/courses/design-kit-2018-2/statements/1632464"
    },
    {
        title: "Conducting Usability Testing",
        issuer: "IxDF",
        date: "Oct 2018",
        skills: ["Usability Testing", "User Research", "Test Facilitation"],
        id: "35436",
        icon: Shield,
        url: "https://www.interaction-design.org/members/muhammad-fadly-uzzaki/certificate/course/PjL4tmJSJ"
    },
    {
        title: "Top 25 Finalist: Espriex Business Model ASEAN",
        issuer: "Univ. Brawijaya / Harvard / Stanford",
        date: "Mar 2017",
        skills: ["Business Modeling", "Entrepreneurship", "Product Strategy"],
        icon: Award,
        url: "https://www.linkedin.com/in/fadlyzaki/details/honors/"
    },
    {
        title: "Gold Medal (1st Winner): GEMASTIK9 ICT Business Development",
        issuer: "GEMASTIK / Kemendikbud",
        date: "Oct 2016",
        skills: ["ICT Development", "Startup Pitching", "Product MVP"],
        icon: Award,
        url: "https://www.linkedin.com/in/fadlyzaki/details/honors/"
    }
];
