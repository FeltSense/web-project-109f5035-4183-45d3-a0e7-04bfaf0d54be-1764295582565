'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';

const features = [
  'AI-powered learning companion',
  'Adaptive curriculum for ages 3-12',
  'Real-time progress tracking dashboard',
  'Voice-activated interactive lessons',
  'Parental controls & safety features',
  'Free lifetime software updates',
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  
  const monthlyPrice = 29;
  const yearlyPrice = 24;
  const yearlySavings = (monthlyPrice - yearlyPrice) * 12;

  return (
    <section id="pricing" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2] text-slate-900 mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            One smart toy. Endless learning adventures. Pre-order today and unlock your child's potential.
          </p>
        </motion.div>

        {/* Toggle Switch */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <span className={`text-sm font-medium transition-colors duration-300 ${!isYearly ? 'text-slate-900' : 'text-slate-400'}`}>
            Monthly
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${isYearly ? 'bg-violet-600' : 'bg-slate-200'}`}
            aria-label="Toggle billing period"
          >
            <motion.div
              className="absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-sm"
              animate={{ x: isYearly ? 32 : 0 }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            />
          </button>
          <span className={`text-sm font-medium transition-colors duration-300 ${isYearly ? 'text-slate-900' : 'text-slate-400'}`}>
            Yearly
          </span>
          {isYearly && (
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-1 bg-emerald-400 text-slate-900 text-xs font-bold px-3 py-1 rounded-full"
            >
              <Sparkles className="w-3 h-3" />
              Save ${yearlySavings}/yr
            </motion.span>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-lg mx-auto bg-white rounded-2xl shadow-sm border border-slate-100 p-8 hover:shadow-md transition-all duration-300 relative overflow-hidden"
        >
          {/* Popular Badge */}
          <div className="absolute top-0 right-0">
            <div className="bg-violet-600 text-white text-xs font-bold px-4 py-1 rounded-bl-xl">
              PRE-ORDER
            </div>
          </div>

          <div className="text-center mb-8">
            <h3 className="text-xl md:text-2xl font-semibold tracking-tight leading-[1.3] text-slate-900 mb-2">
              AI Pals Starter Kit
            </h3>
            <p className="text-slate-500 text-sm">
              Everything your child needs to start learning
            </p>
          </div>

          <div className="flex items-baseline justify-center gap-2 mb-8">
            <motion.span
              key={isYearly ? 'yearly' : 'monthly'}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900"
            >
              ${isYearly ? yearlyPrice : monthlyPrice}
            </motion.span>
            <span className="text-slate-500 text-lg">/month</span>
          </div>

          {isYearly && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-emerald-400 font-medium text-sm mb-6 -mt-4"
            >
              Billed ${yearlyPrice * 12}/year
            </motion.p>
          )}
          
          <ul className="space-y-4 mb-8">
            {features.map((feature, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                className="flex items-center gap-3"
              >
                <div className="flex-shrink-0 w-5 h-5 bg-violet-50 rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-violet-600" />
                </div>
                <span className="text-slate-600">{feature}</span>
              </motion.li>
            ))}
          </ul>

          <button
            onClick={() => window.location.href = 'https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00'}
            className="w-full bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Pre-Order Now - ${isYearly ? yearlyPrice : monthlyPrice}/mo
          </button>

          <p className="text-center text-slate-400 text-xs mt-4">
            30-day money-back guarantee • Ships Q2 2024
          </p>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-8 mt-12 text-slate-400 text-sm"
        >
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>Secure Payment</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
            <span>Cancel Anytime</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Free Shipping</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
