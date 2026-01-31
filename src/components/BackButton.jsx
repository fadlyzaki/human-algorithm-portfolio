import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

/* 
  H3/H4: User Control & Consistency
  Standard back navigation ensuring a consistent return path.
  Supports both 'to' prop (Link) and history-based 'onClick' (Navigate).
*/
const BackButton = ({ to, label = "Back", className = "" }) => {
    const navigate = useNavigate();

    const content = (
        <>
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span>{label}</span>
        </>
    );

    const baseClasses = `
    inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest
    text-[var(--text-secondary)] hover:text-[var(--text-primary)] 
    transition-colors group py-2
    ${className}
  `;

    if (to) {
        return (
            <Link to={to} className={baseClasses}>
                {content}
            </Link>
        );
    }

    return (
        <button onClick={() => navigate(-1)} className={baseClasses}>
            {content}
        </button>
    );
};

export default BackButton;
