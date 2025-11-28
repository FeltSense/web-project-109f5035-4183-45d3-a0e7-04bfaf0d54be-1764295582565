'use client';

import { motion } from 'framer-motion';
import { Brain, Sparkles, Shield, Gamepad2 } from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: 'Adaptive AI Learning',
    description: 'Our smart toys grow with your child. AI-powered companions that adapt to each child\'s learning pace, interests, and developmental stage for truly personalized education.',
    span: 'md:col-span-2',
    bg: 'bg-violet-600/5',
    minHeight: 'min-h-[300px]',
    textColor: 'text-slate-900',
    descColor: 'text-slate-500',
  },
  {
    icon: Sparkles,
    title: 'Interactive Play',
    description: 'Voice-activated games, touch-responsive learning, and augmented reality experiences that make education feel like pure magic.',
    span: '',
    bg: 'bg-slate-50',
    minHeight: 'min-h-[300px]',
    textColor: 'text-slate-900',
    descColor: 'text-slate-500',
  },
  {
    icon: Shield,
    title: 'Parent-Safe Design',
    description: 'COPPA compliant with zero data collection. Real-time progress dashboards let you celebrate every milestone.',
    span: '',
    bg: 'bg-white border border-slate-100',
    minHeight: 'min-h-[200px]',
    textColor: 'text-slate-900',
    descColor: 'text-slate-500',
  },
  {
    icon: Gamepad2,
    title: 'STEM Adventures Await',
    description: 'From coding basics to creative problem-solving, AI Pals transform complex concepts into exciting quests. Watch curiosity become confidence.',
    span: 'md:col-span-2',
    bg: 'bg-slate-900',
    minHeight: 'min-h-[200px]',
    textColor: 'text-white',
    descColor: 'text-slate-400',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2] text-slate-900 mb-6">
            Learning That Feels Like Play
          </h2>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto">
            Discover how AI Pals makes education irresistible. Smart toys that spark curiosity and build skills for tomorrow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`${service.span} ${service.bg} rounded-3xl p-8 ${service.minHeight} hover:shadow-md transition-all duration-300`}
            >
              <div className={`w-14 h-14 rounded-2xl ${service.bg === 'bg-slate-900' ? 'bg-violet-600' : 'bg-violet-50'} flex items-center justify-center mb-6`}>
                <service.icon className={`w-7 h-7 ${service.bg === 'bg-slate-900' ? 'text-white' : 'text-violet-600'}`} />
              </div>
              <h3 className={`text-xl md:text-2xl font-semibold tracking-tight leading-[1.3] ${service.textColor} mb-3`}>
                {service.title}
              </h3>
              <p className={`${service.descColor} text-base md:text-lg leading-relaxed`}>
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            className="inline-flex items-center bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Explore AI Pals
            <Sparkles className="w-5 h-5 ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}