"use client";
import { motion } from "motion/react";
import { BeforeAfterSlider } from "./BeforeAndAfterSlider";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

interface HeroProps {
	beforeImage: string;
	afterImage: string;
}

export function Hero({ beforeImage, afterImage }: HeroProps) {
	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
			{/* Animated Background Elements */}
			<div className="absolute inset-0 -z-10">
				<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#A26BFF]/20 rounded-full blur-[128px] animate-pulse" />
				<div
					className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#6EE7B7]/20 rounded-full blur-[128px] animate-pulse"
					style={{ animationDelay: "1s" }}
				/>
			</div>

			<div className="max-w-7xl mx-auto w-full">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					{/* Left: Text Content */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						className="space-y-8"
					>
						{/* Badge */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.2 }}
							className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10"
						>
							<Sparkles className="w-4 h-4 text-[#A26BFF]" />
							<span className="text-sm">AI-Powered Art Studio</span>
						</motion.div>

						{/* Main Headline */}
						<motion.h1
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.3 }}
							className="text-5xl lg:text-7xl tracking-tight bg-gradient-to-br from-white via-white to-white/60 bg-clip-text text-transparent"
						>
							Draw. Improve. Transform.
						</motion.h1>

						{/* Subheadline */}
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.4 }}
							className="text-lg lg:text-xl text-white/70 leading-relaxed"
						>
							Sketch freely, get AI feedback, and transform your ideas into
							finished artwork.
						</motion.p>

						{/* CTA Buttons */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.5 }}
							className="flex flex-wrap gap-4"
						>
							<Button
								size="lg"
								className="group relative overflow-hidden bg-gradient-to-r from-[#A26BFF] to-[#6EE7B7] hover:shadow-2xl hover:shadow-[#A26BFF]/50 transition-all duration-300 px-8 py-6 rounded-2xl"
							>
								<span className="relative z-10 flex items-center gap-2">
									<Link href={"/canvas"}>Start Drawing</Link>
									<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
								</span>
								<div className="absolute inset-0 bg-gradient-to-r from-[#6EE7B7] to-[#A26BFF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
							</Button>

							<Button
								size="lg"
								variant="outline"
								className="border-white/20 hover:bg-white/5 backdrop-blur-sm px-8 py-6 rounded-2xl"
							>
								<Link href={"/gallery"}>See Gallery</Link>
							</Button>
						</motion.div>

						{/* Stats */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.6 }}
							className="flex gap-8 pt-8"
						>
							<div>
								<div className="text-2xl">10K+</div>
								<div className="text-sm text-white/50">Artists</div>
							</div>
							<div>
								<div className="text-2xl">500K+</div>
								<div className="text-sm text-white/50">Artworks</div>
							</div>
							<div>
								<div className="text-2xl">4.9★</div>
								<div className="text-sm text-white/50">Rating</div>
							</div>
						</motion.div>
					</motion.div>

					{/* Right: Before/After Slider */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.3 }}
						className="relative"
					>
						{/* Glass Panel Effect */}
						<div className="absolute -inset-4 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-[2rem] border border-white/10" />
						<div className="relative p-4">
							<BeforeAfterSlider
								beforeImage={beforeImage}
								afterImage={afterImage}
								beforeLabel="Sketch"
								afterLabel="AI Art"
							/>
						</div>

						{/* Floating Elements */}
						<motion.div
							animate={{ y: [0, -10, 0] }}
							transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
							className="absolute -top-8 -right-8 w-14 h-14 rounded-full bg-gradient-to-br from-[#A26BFF]/40 to-[#6EE7B7]/40 backdrop-blur-xl border border-white/20 flex items-center justify-center"
						>
							<Sparkles className="w-5 h-5 text-white" />
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
