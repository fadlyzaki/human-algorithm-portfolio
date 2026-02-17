import React from 'react';
import {
    Terminal, Cpu, BookOpen, GitCommit, Users, Heart, PenTool, Activity,
    MessageSquare, MessageCircle, ShoppingBag, ShieldCheck, Tag, Box,
    Truck, Trophy, Scan, Layout, Calendar, CalendarClock, FileText, AlertTriangle,
    Layers, Smartphone, Languages, Video, ScanEye, User, Mail, Monitor,
    Globe, MapPin, Code, Shield, Gift, Camera, ToggleRight, TrendingUp
} from 'lucide-react';

const icons = {
    Terminal, Cpu, BookOpen, GitCommit, Users, Heart, PenTool, Activity,
    MessageSquare, MessageCircle, ShoppingBag, ShieldCheck, Tag, Box,
    Truck, Trophy, Scan, Layout, FileText, AlertTriangle,
    Layers, Smartphone, Languages, Video, ScanEye, User, Mail, Monitor,
    Globe, MapPin, Code, Shield, Gift, Camera, ToggleRight, TrendingUp,
    // Mapped aliases
    Calendar: CalendarClock
};

/**
 * Reusable IconMapper to render Lucide icons by name string.
 * Fallback to GitCommit if icon not found.
 */
const IconMapper = ({ iconName, ...props }) => {
    const IconComponent = icons[iconName] || GitCommit;
    return <IconComponent {...props} />;
};

export default IconMapper;
