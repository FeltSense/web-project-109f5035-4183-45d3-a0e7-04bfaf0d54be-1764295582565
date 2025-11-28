'use client';

import Link from 'next/link';
import { Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const footerLinks = {
  company: [
    { name: 'About', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
  ],
  support: [
    { name: 'Contact', href: '#contact' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#' },
  ],
  resources: [
    { name: 'Learning Hub', href: '#' },
    { name: 'Parent Guide', href: '#' },
    { name: 'Safety Tips', href: '#' },
  ],
};

const socialLinks = [
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'YouTube', href: '#', icon: Youtube },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Section with Newsletter */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between pb-12 border-b border-slate-800">
          <div className="mb-8 lg:mb-0">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-2">
              Join the AI Pals Community
            </h3>
            <p className="text-slate-400">
              Get learning tips, product updates, and exclusive offers.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="rounded-xl border-slate-700 bg-slate-900 text-white placeholder-slate-500 focus:ring-2 py-4 px-5 focus:border-violet-600 focus:ring-violet-600 min-w-[280px]"
            />
            <button className="bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300 shadow-sm hover:shadow-md whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12 py-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="text-2xl font-bold text-white tracking-tight inline-flex items-center gap-2">
              <span className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                AI
              </span>
              AI Pals
            </Link>
            <p className="text-slate-400 mt-4 max-w-xs leading-relaxed">
              Sparking curiosity through play. AI-powered smart toys that grow with your child and make learning an adventure.
            </p>
            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-violet-600 hover:text-white transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold tracking-tight">Company</h4>
            {footerLinks.company.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-slate-400 hover:text-emerald-400 transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Support Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold tracking-tight">Support</h4>
            {footerLinks.support.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-slate-400 hover:text-emerald-400 transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Resources Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold tracking-tight">Resources</h4>
            {footerLinks.resources.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-slate-400 hover:text-emerald-400 transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} AI Pals. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <Link href="#" className="text-slate-500 hover:text-emerald-400 transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="#" className="text-slate-500 hover:text-emerald-400 transition-colors duration-300">
              Terms of Service
            </Link>
            <Link href="#" className="text-slate-500 hover:text-emerald-400 transition-colors duration-300">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
