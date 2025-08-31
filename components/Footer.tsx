import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="py-8 border-t border-[var(--border)]">
            <div className="container mx-auto text-center text-slate-400">
                <p>&copy; {new Date().getFullYear()} Aman Kumar. All rights reserved.</p>
                <p className="text-sm mt-2">Designed & Built with ❤️</p>
            </div>
        </footer>
    );
};