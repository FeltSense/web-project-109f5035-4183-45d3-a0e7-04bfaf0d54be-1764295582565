'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Sparkles, Brain, Gamepad2, TrendingUp } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-slate-950 min-h-screen pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-violet-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 bg-violet-600/10 border border-violet-600/20 rounded-full px-4 py-2 mb-8">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span className="text-violet-300 text-sm font-medium">AI-Powered Learning Companions</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-white mb-6">
              Watch Your Child
              <span className="block text-violet-400">Learn Through Play</span>
            </h1>
            
            <p className="text-xl text-slate-400 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
              Smart toys that adapt to your child's learning style. Real-time progress tracking. Skills that last a lifetime.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#contact" className="bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300 shadow-sm hover:shadow-md text-center">
                Start Free Trial
              </a>
              <a href="#services" className="border-2 border-violet-600 text-violet-400 hover:bg-violet-600 hover:text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300 text-center">
                See How It Works
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex items-center gap-8 justify-center lg:justify-start">
              <div className="text-center">
                <p className="text-2xl font-bold text-white">50K+</p>
                <p className="text-sm text-slate-500">Happy Families</p>
              </div>
              <div className="w-px h-10 bg-slate-700" />
              <div className="text-center">
                <p className="text-2xl font-bold text-white">4.9★</p>
                <p className="text-sm text-slate-500">Parent Rating</p>
              </div>
              <div className="w-px h-10 bg-slate-700" />
              <div className="text-center">
                <p className="text-2xl font-bold text-white">Ages 3-12</p>
                <p className="text-sm text-slate-500">Designed For</p>
              </div>
            </div>
          </motion.div>

          {/* Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Dashboard Card */}
            <div className="bg-slate-900/80 backdrop-blur-sm rounded-2xl border border-slate-800 p-6 shadow-2xl">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-violet-600 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">E</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Emma's Progress</p>
                    <p className="text-slate-500 text-sm">Age 7 • Level 12</p>
                  </div>
                </div>
                <span className="bg-emerald-400/10 text-emerald-400 text-xs font-medium px-3 py-1 rounded-full">Active Now</span>
              </div>

              {/* Skills Progress */}
              <div className="space-y-4 mb-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-400 text-sm flex items-center gap-2">
                      <Brain className="w-4 h-4 text-violet-400" /> Problem Solving
                    </span>
                    <span className="text-white text-sm font-medium">87%</span>
                  </div>
                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-violet-600 rounded-full" style={{ width: '87%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-400 text-sm flex items-center gap-2">
                      <Gamepad2 className="w-4 h-4 text-emerald-400" /> Creativity
                    </span>
                    <span className="text-white text-sm font-medium">92%</span>
                  </div>
                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-400 rounded-full" style={{ width: '92%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-400 text-sm flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-violet-400" /> Math Skills
                    </span>
                    <span className="text-white text-sm font-medium">78%</span>
                  </div>
                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-violet-500 rounded-full" style={{ width: '78%' }} />
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-slate-800/50 rounded-xl p-4">
                <p className="text-slate-400 text-xs uppercase tracking-wider mb-3">Today's Achievements</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-violet-600/20 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-violet-400" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">Completed "Space Explorer" Quest</p>
                    <p className="text-slate-500 text-xs">+150 XP • 2 hours ago</p>
                  </div></div>

            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg border border-slate-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-emerald-400/10 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <p className="text-slate-900 font-bold text-lg">+23%</p>
                  <p className="text-slate-500 text-sm">Learning Speed</p>
                </div>
              </div>
            </motion.div>

            {/* Floating Notification */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute -top-4 -right-4 bg-violet-600 rounded-xl px-4 py-3 shadow-lg"
            >
              <p className="text-white text-sm font-medium">🎉 New Badge Unlocked!</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  </div></div></div></div></div></div></div></div></div></div>);
}