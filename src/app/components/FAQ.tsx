import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What is Nano Canvas?',
    answer: 'Nano Canvas is an AI-powered sketch-to-art studio that helps artists transform rough sketches into polished artwork. Our platform provides real-time AI feedback and professional-grade editin and professional-grade editing tools.',
  },
  {
    question: 'Do I need drawing experience to use Nano Canvas?',
    answer: 'Not at all! Nano Canvas is designed for artists of all skill levels. Whether you\'re a beginner learning to draw or a professional artist, our AI assists you with helpful feedback and suggestions to improve your work.',
  },
  {
    question: 'What file formats can I export?',
    answer: 'You can export your artwork in various formats including PNG, JPG. We support high-resolution exports up to 1080p, perfect for print and digital use.',
  },
  {
    question: 'How does the AI feedback work?',
    answer: 'Our AI analyzes your sketches in real-time, providing suggestions on sketches. It learns from millions of artworks to give you constructive, actionable feedback that helps you improve.',
  },
  {
    question: 'Can I use Nano Canvas offline?',
    answer: 'No! AI features require an internet connection, Nano Canvas does not offer offline mode',
  },
//   {
//     question: 'Is my artwork private and secure?',
//     answer: 'Absolutely. We use bank-level 256-bit encryption to protect your creative work. Your artwork is private by default, and you have complete control over what you share. We never use your artwork for AI training without explicit permission.',
//   },
//   {
//     question: 'What devices does Nano Canvas support?',
//     answer: 'Nano Canvas works on desktop (Windows, Mac, Linux), tablets (iPad, Android), and web browsers. Your projects sync seamlessly across all devices through the cloud.',
//   },
//   {
//     question: 'How much does it cost?',
//     answer: 'We offer a free forever plan with core features. Premium plans start at $9.99/month with unlimited AI transformations, advanced features, and priority support. No credit card required to start.',
//   },
];

export function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-32 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6">
            FAQ
          </div>
          <h2 className="text-4xl lg:text-5xl mb-6">
            <span className="bg-gradient-to-r from-[#A26BFF] to-[#6EE7B7] bg-clip-text text-transparent">Frequently</span> Asked Questions
          </h2>
          <p className="text-lg text-white/60">
            Everything you need to know about Nano Canvas.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="space-y-4"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 px-6 overflow-hidden"
              >
                <AccordionTrigger className="hover:no-underline py-6 text-left">
                  <span className="pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-white/60 pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 text-center p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10"
        >
          <p className="text-white/70 mb-4">Still have questions?</p>
          <a
            href="mailto:saaadi.work@gmail.com"
            className="text-[#6EE7B7] hover:text-[#A26BFF] transition-colors"
          >
            Contact our support team →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
