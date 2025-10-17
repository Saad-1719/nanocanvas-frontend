"use client";
import { useEffect } from "react";
import { Navigation } from "./components/Navbar";
import { Hero } from "./components/HeroSection";
import { HowItWorks } from "./components/HowItWorks";
import { GalleryPreview } from "./components/Gallery";
import { TechStack } from "./components/Technology";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import Wrapper from "./components/Wrapper";
import { FeaturesGrid } from "./components/Features";

export default function Home() {
	useEffect(() => {
		// Add smooth scrolling behavior
		document.documentElement.style.scrollBehavior = "smooth";

		// Set dark mode by default
		document.documentElement.classList.add("dark");

		return () => {
			document.documentElement.style.scrollBehavior = "";
		};
	}, []);
	const beforeImage =
		"https://i.imghippo.com/files/KpH8055Gzs.png";
	// const beforeImage =
	// 	"https://images.unsplash.com/photo-1742130847850-4284808ae5f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW5jaWwlMjBza2V0Y2glMjBkcmF3aW5nfGVufDF8fHx8MTc2MDczMTE4OHww&ixlib=rb-4.1.0&q=80&w=1080";
	const afterImage =
		"https://i.imghippo.com/files/xRv1952ncU.png";
	
	// const afterImage =
	// 	"https://images.unsplash.com/photo-1682446857262-9232e0c9c3c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwcGFpbnRpbmclMjBhcnR8ZW58MXx8fHwxNzYwNzMxMTg4fDA&ixlib=rb-4.1.0&q=80&w=1080";
	
	const galleryImages = [
		"https://images.unsplash.com/photo-1699568542323-ff98aca8ea6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGNvbG9yZnVsJTIwYXJ0fGVufDF8fHx8MTc2MDY4MjMyM3ww&ixlib=rb-4.1.0&q=80&w=1080",
		"https://images.unsplash.com/photo-1587120511358-98f9104cc096?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwaWxsdXN0cmF0aW9ufGVufDF8fHx8MTc2MDcxMTcxMXww&ixlib=rb-4.1.0&q=80&w=1080",
		"https://images.unsplash.com/photo-1713815539197-78db123d8f3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcmNvbG9yJTIwcGFpbnRpbmd8ZW58MXx8fHwxNzYwNzA4MTU2fDA&ixlib=rb-4.1.0&q=80&w=1080",
		"https://images.unsplash.com/photo-1682446857262-9232e0c9c3c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwcGFpbnRpbmclMjBhcnR8ZW58MXx8fHwxNzYwNzMxMTg4fDA&ixlib=rb-4.1.0&q=80&w=1080",
		"https://images.unsplash.com/photo-1699568542323-ff98aca8ea6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGNvbG9yZnVsJTIwYXJ0fGVufDF8fHx8MTc2MDY4MjMyM3ww&ixlib=rb-4.1.0&q=80&w=1080",
		"https://images.unsplash.com/photo-1587120511358-98f9104cc096?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwaWxsdXN0cmF0aW9ufGVufDF8fHx8MTc2MDcxMTcxMXww&ixlib=rb-4.1.0&q=80&w=1080",
	];
	return (
		<div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
			<Wrapper>
			<Navigation />
			<main>
				<Hero beforeImage={beforeImage} afterImage={afterImage} />
				<div id="howitworks">
					<HowItWorks />
				</div>
				<div id="features">
					<FeaturesGrid />
				</div>
				<div id="gallery"></div>
				<GalleryPreview images={galleryImages} />
				<TechStack />
				<div id="faq">
					<FAQ />
				</div>
			</main>
			</Wrapper>
				<Footer />
      
		</div>
	);
}
