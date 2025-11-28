'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Sparkles, Zap, Heart } from 'lucide-react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
    };

    try {
      const response = await fetch('https://deep-api-server-2moiw.kinsta.app/api/form_submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          form_id: 'contact_form',
          form_data: data,
          project_id: '109f5035-4183-45d3-a0e7-04bfaf0d54be',
          founder_id: 'a4e55236-b564-47d7-ac90-0b3ccd7a1a70',
        }),
      });

      if (response.ok) {
        setStatus('success');
        e.currentTarget.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="bg-slate-900 py-24 md:py-32 relative overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-violet-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-400/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 text-emerald-400 font-semibold text-sm uppercase tracking-wider mb-4">
              <Sparkles className="w-4 h-4" />
              Join the Adventure
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2] text-white mb-6">
              Give Your Child a Learning Companion They&apos;ll Love
            </h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              Be among the first families to experience AI Pals. Sign up now for early access and exclusive launch pricing.
            </p>
            
            {/* Trust indicators */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-violet-600/20 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-violet-600" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Instant Setup</h4>
                  <p className="text-slate-500 text-sm">Ready to play in under 5 minutes</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-400/20 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Parent Approved</h4>
                  <p className="text-slate-500 text-sm">Trusted by 10,000+ families worldwide</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {status === 'success' ? (
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-10 text-center">
                <div className="w-16 h-16 bg-emerald-400/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">You&apos;re on the List!</h3>
                <p className="text-slate-500">We&apos;ll reach out soon with early access details. Get ready for learning adventures!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-10 space-y-6">
                <div className="text-center mb-2">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">Get Early Access</h3>
                  <p className="text-slate-500 text-sm">Join 2,500+ parents on the waitlist</p>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    className="w-full rounded-xl border-slate-200 border bg-slate-50 focus:ring-2 py-4 px-5 focus:border-violet-600 focus:ring-violet-600/20 focus:bg-white transition-all duration-300 text-slate-900 placeholder:text-slate-400" 
                    placeholder="Your name" 
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    className="w-full rounded-xl border-slate-200 border bg-slate-50 focus:ring-2 py-4 px-5 focus:border-violet-600 focus:ring-violet-600/20 focus:bg-white transition-all duration-300 text-slate-900 placeholder:text-slate-400" 
                    placeholder="you@example.com" 
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700">Phone <span className="text-slate-400">(optional)</span></label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    className="w-full rounded-xl border-slate-200 border bg-slate-50 focus:ring-2 py-4 px-5 focus:border-violet-600 focus:ring-violet-600/20 focus:bg-white transition-all duration-300 text-slate-900 placeholder:text-slate-400" 
                    placeholder="+1 (555) 000-0000" 
                  />
                </div>
                
                <button 
                  type="submit" 
                  disabled={status === 'loading'} 
                  className="w-full bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300 shadow-sm hover:shadow-md disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center group"
                >
                  {status === 'loading' ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Reserve My Spot
                      <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </button>
                
                <p className="text-center text-slate-400 text-xs">
                  No spam, ever. We respect your privacy.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  </div></div>);
}
