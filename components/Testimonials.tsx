'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Parent of 2 kids',
    quote: 'My 6-year-old went from struggling with basic math to solving problems for fun. AI Pals made learning feel like play, and now she asks to use it every day!',
    avatar: 'https://i.pravatar.cc/150?img=32',
  },
  {
    name: 'David Chen',
    role: 'Elementary Teacher',
    quote: 'I\'ve introduced AI Pals to my classroom and the results are incredible. Students are more engaged, curious, and actually excited about learning new concepts.',
    avatar: 'https://i.pravatar.cc/150?img=12',
  },
  {
    name: 'Jessica Rodriguez',
    role: 'Mother of 3',
    quote: 'Finally, screen time I don\'t feel guilty about! My kids are building real skills while having a blast with their AI companions. Worth every penny.',
    avatar: 'https://i.pravatar.cc/150?img=25',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2] text-slate-900">Families Love AI Pals</h2>
          <p className="mt-6 text-lg text-slate-500 max-w-2xl mx-auto">Join thousands of parents and educators who are transforming how children learn through play.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 relative hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute -top-3 left-8 bg-violet-600 text-white text-xs px-3 py-1 rounded-full font-medium">
                Verified User
              </div>
              
              <div className="flex gap-1 mb-4 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              
              <p className="text-slate-600 mb-6 leading-relaxed">"{testimonial.quote}"</p>
              
              <div className="flex items-center gap-4">
                <Image 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  width={48} 
                  height={48} 
                  className="rounded-full" 
                />
                <div>
                  <p className="font-semibold text-slate-900">{testimonial.name}</p>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}