import React from 'react';

export const Badge = ({ children, className = '' }) => (
    <span className={`inline-flex items-center rounded-full border border-slate-200 px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none text-slate-950 ${className}`}>
        {children}
    </span>
);
