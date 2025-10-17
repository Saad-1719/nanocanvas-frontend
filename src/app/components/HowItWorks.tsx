import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Pencil, Sparkles, Palette } from 'lucide-react';

const steps = [
  {
    icon: Pencil,
    title: 'Sketch Freely',
    description: 'Let your ideas flow on our infinite tldraw canvas. Doodle, design, or dream — every line is a starting point for something beautiful.',
    color: 'from-[#A26BFF] to-purple-400',
  },
  {
    icon: Sparkles,
    title: 'Get Smart Feedback',
    description: 'Ask Nano for insight. Receive instant, personalized tips on balance, depth, and composition — like having a digital art mentor by your side.',
    color: 'from-[#6EE7B7] to-teal-400',
  },
  {
    icon: Palette,
    title: 'Transform to Art',
    description: 'Choose your vibe: watercolor, cyberpunk, or Ghibli magic. Watch your sketch evolve into a finished artwork in seconds — refined, stylized, and ready to share.',
    color: 'from-pink-400 to-rose-400',
  },
];

export function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative pb-32 px-4 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6">
            How It Works
          </div>
          <h2 className="text-4xl lg:text-5xl mb-6">
            Three Steps to <span className="bg-gradient-to-r from-[#A26BFF] to-[#6EE7B7] bg-clip-text text-transparent">Masterpiece</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Our AI-powered workflow makes creating stunning art as easy as drawing your first line.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              {/* Glass Card */}
              <div className="relative h-full p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:-translate-y-2">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-2xl bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl border border-white/20 flex items-center justify-center">
                  <span className="text-xl">{index + 1}</span>
                </div>

                {/* Icon */}
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${step.color} mb-6`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl mb-4">{step.title}</h3>
                <p className="text-white/60 leading-relaxed">{step.description}</p>

                {/* Hover Glow */}
                <div className={`absolute -inset-1 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10 rounded-3xl`} />
              </div>

              {/* Connecting Line (not on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-white/20 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
