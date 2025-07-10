import { useEffect, useState } from 'react';
import { Separator } from '@/components/ui/separator';
import  logoJLM  from '@/assets/JLM2.png'; // Adjust the path as necessary

const Footer = () => {
    const [visitorCount, setVisitorCount] = useState(0);

    useEffect(() => {
        // Get current visitor count from localStorage
        const currentCount = parseInt(localStorage.getItem('visitorCount') || '0');
        const newCount = currentCount + 1;

        // Update visitor count
        localStorage.setItem('visitorCount', newCount.toString());
        setVisitorCount(newCount);
    }, []);

    return (
        <footer className="bg-card border-t border-border mt-auto">
            <div className="container mx-auto px-4 py-6">
                <Separator className="mb-4" />
                <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
                    <div className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} JLM ENSA Khouribga. All rights reserved.
                    </div>
                    <div className="flex items-center space-x-2">
                        <img src={logoJLM} alt="JLM Logo" className="h-8 w-auto" />
                        <span className="text-sm text-muted-foreground">Powered by JLMENSAKH 2025</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                        Visitors: {visitorCount.toLocaleString()}
                    </div>
                </div>
                <div className="flex justify-center mt-4 space-x-4 text-sm text-muted-foreground">
                    <a
                        href="https://github.com/jeunesleaders-ensakh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/company/jeunesleaders-ensakh/posts/?feedView=all&viewAsMember=true"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://www.instagram.com/jeunesleaders_ensakh?igsh=dHc2bDU5Nmg2MHp1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                    >
                        Instagram
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;