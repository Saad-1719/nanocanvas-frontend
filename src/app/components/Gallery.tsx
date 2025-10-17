import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface GalleryPreviewProps {
  images: string[];
}

export function GalleryPreview({ images }: GalleryPreviewProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-32 px-4 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#A26BFF]/10 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6">
            Gallery
          </div>
          <h2 className="text-4xl lg:text-5xl mb-6">
            Created by <span className="bg-gradient-to-r from-[#A26BFF] to-[#6EE7B7] bg-clip-text text-transparent">Our Community</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Discover amazing artworks created by artists using Nano Canvas.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-square overflow-hidden rounded-2xl"
            >
              {/* Glass Frame */}
              <div className="absolute inset-0 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl" />
              
              {/* Image */}
              <img
                src={image}
                alt={`Gallery artwork ${index + 1}`}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-sm opacity-90">View Details</div>
                </div>
              </div>

              {/* Glow on Hover */}
              <div className="absolute -inset-1 bg-gradient-to-br from-[#A26BFF]/50 to-[#6EE7B7]/50 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 -z-10 rounded-2xl" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center"
        >
          <Button
            size="lg"
            variant="outline"
            className="group border-white/20 hover:bg-white/5 backdrop-blur-sm px-8 py-6 rounded-2xl"
          >
            Explore Full Gallery
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
