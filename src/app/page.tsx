'use client'
import { useEffect } from 'react';
import { Navigation } from "./components/Navbar";
import { Hero } from "./components/HeroSection";
import Wrapper from "./components/Wrapper";

export default function Home() {
    useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Set dark mode by default
    document.documentElement.classList.add('dark');

    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);
	const beforeImage =
		"https://images.unsplash.com/photo-1742130847850-4284808ae5f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW5jaWwlMjBza2V0Y2glMjBkcmF3aW5nfGVufDF8fHx8MTc2MDczMTE4OHww&ixlib=rb-4.1.0&q=80&w=1080";
	const afterImage =
		"https://images.unsplash.com/photo-1682446857262-9232e0c9c3c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwcGFpbnRpbmclMjBhcnR8ZW58MXx8fHwxNzYwNzMxMTg4fDA&ixlib=rb-4.1.0&q=80&w=1080";
	const demoImage =
		"https://images.unsplash.com/photo-1758873268663-5a362616b5a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMHRhYmxldHxlbnwxfHx8fDE3NjA3MDY2MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080";

	return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
			{/* <Wrapper> */}
				<Navigation />
				<main>
					<Hero beforeImage={beforeImage} afterImage={afterImage} />
				</main>
			{/* </Wrapper> */}
		</div>
	);
}
