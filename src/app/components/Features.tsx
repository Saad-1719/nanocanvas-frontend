import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import {
  Wand2,
//   Layers,
  Zap,
//   Cloud,
//   Users,
  Download,
//   Palette,
  MessageSquare,
} from 'lucide-react';

const features = [
  {
    icon: Wand2,
    title: 'AI Style Transfer',
    description: 'Transform sketches into various art styles instantly with our advanced AI models.',
  },
//   {
//     icon: Layers,
//     title: 'Infinite Layers',
//     description: 'Work with unlimited layers to organize and refine your artwork professionally.',
//   },
  {
    icon: Zap,
    title: 'Real-time Rendering',
    description: 'See changes instantly with our optimized rendering engine built for speed.',
  },
//   {
//     icon: Cloud,
//     title: 'Cloud Sync',
//     description: 'Access your projects anywhere with automatic cloud synchronization.',
//   },
//   {
//     icon: Users,
//     title: 'Collaborative',
//     description: 'Share projects and collaborate with other artists in real-time.',
//   },
  {
    icon: Download,
    title: 'Export Anywhere',
    description: 'Export in any format: PNG, JPG, and more at any resolution.',
  },
//   {
//     icon: Palette,
//     title: 'Smart Color',
//     description: 'AI-powered color suggestions and palette generation from your sketches.',
//   },
  {
    icon: MessageSquare,
    title: 'Instant Feedback',
    description: 'Get constructive AI feedback on composition, perspective, and anatomy.',
  },
];

export function FeaturesGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-32 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6">
            Features
          </div>
          <h2 className="text-4xl lg:text-5xl mb-6">
            Everything You Need to <span className="bg-gradient-to-r from-[#A26BFF] to-[#6EE7B7] bg-clip-text text-transparent">Create</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Professional-grade tools powered by cutting-edge AI technology.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Glass Card */}
              <div className="relative h-full p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:-translate-y-1">
                {/* Icon */}
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-[#A26BFF]/20 to-[#6EE7B7]/20 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{feature.description}</p>

                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#A26BFF]/10 to-[#6EE7B7]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl -z-10" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
