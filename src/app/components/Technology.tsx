import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Cpu, Workflow, Database, Shield } from 'lucide-react';

const technologies = [
  {
    icon: Cpu,
    name: 'Advanced AI Models',
    description: 'Powered by cutting-edge machine learning algorithms',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Workflow,
    name: 'WebGL Rendering',
    description: 'Hardware-accelerated graphics for smooth performance',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Database,
    name: 'Cloud Infrastructure',
    description: 'Scalable and reliable storage for all your projects',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: Shield,
    name: 'Enterprise Security',
    description: 'Bank-level encryption to protect your creative work',
    gradient: 'from-orange-500 to-red-500',
  },
];

export function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative md:py-32 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6">
            Technology
          </div>
          <h2 className="text-4xl lg:text-5xl mb-6">
            Built on <span className="bg-gradient-to-r from-[#A26BFF] to-[#6EE7B7] bg-clip-text text-transparent">Modern Tech</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Enterprise-grade technology stack powering your creative workflow.
          </p>
        </motion.div>

        {/* Tech Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Glass Card */}
              <div className="relative h-full p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                {/* Icon with Gradient */}
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${tech.gradient} mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <tech.icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-lg mb-2">{tech.name}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{tech.description}</p>
              </div>

              {/* Animated Gradient Border on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${tech.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10 rounded-2xl`} />
            </motion.div>
          ))}
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-20 p-8 rounded-3xl bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-xl border border-white/10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl mb-2 bg-gradient-to-r from-[#A26BFF] to-[#6EE7B7] bg-clip-text text-transparent">99.9%</div>
              <div className="text-sm text-white/60">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2 bg-gradient-to-r from-[#A26BFF] to-[#6EE7B7] bg-clip-text text-transparent">&lt;100ms</div>
              <div className="text-sm text-white/60">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2 bg-gradient-to-r from-[#A26BFF] to-[#6EE7B7] bg-clip-text text-transparent">256-bit</div>
              <div className="text-sm text-white/60">Encryption</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2 bg-gradient-to-r from-[#A26BFF] to-[#6EE7B7] bg-clip-text text-transparent">24/7</div>
              <div className="text-sm text-white/60">Support</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
