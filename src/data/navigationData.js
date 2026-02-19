import { FileText, Mail } from 'lucide-react';

export const getNavLinks = (t) => [
    { label: t('nav.home'), href: "/" },
    { label: t('nav.about'), href: "#about" },
    { label: t('nav.work'), href: "#work" },
    { label: t('nav.side_projects'), href: "/side-projects" },
    { label: t('nav.process'), href: "/process" },
    { label: 'PROJECTS', href: "#side-projects" },
];

export const getMetaLinks = (t) => [
    { label: t('nav.cv'), icon: FileText, href: "/cv" },
    { label: t('nav.contact'), icon: Mail, href: "/contact" },
];
