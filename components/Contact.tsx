'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sport-blue font-sport text-sm uppercase tracking-[0.3em] font-semibold">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
              Let's Build <span className="text-sport-blue">Together</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Whether you have a project in mind, want to collaborate, or just want to say hi — I'd love to hear from you!
            </p>
          </motion.div>

          {/* Contact Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="glass-card p-6">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  <motion.a
                    href="mailto:your.email@example.com"
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-slate-800/50 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-sport-blue/10 flex items-center justify-center group-hover:bg-sport-blue/20 transition-colors">
                      <Mail className="w-6 h-6 text-sport-blue" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-400">Email</div>
                      <div className="font-semibold group-hover:text-sport-blue transition-colors">
                        your.email@example.com
                      </div>
                    </div>
                  </motion.a>

                  <motion.div
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-slate-800/50 transition-all"
                  >
                    <div className="w-12 h-12 rounded-lg bg-sport-green/10 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-sport-green" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-400">Location</div>
                      <div className="font-semibold">Egypt</div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="glass-card p-6">
                <h4 className="font-bold mb-4">Connect With Me</h4>
                <div className="flex gap-3">
                  {[
                    { name: 'GitHub', url: 'https://github.com/ziadteama', color: 'sport-blue' },
                    { name: 'LinkedIn', url: 'https://linkedin.com/in/yourprofile', color: 'sport-green' },
                  ].map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-4 py-2 bg-${link.color}/10 border border-${link.color}/30 rounded-lg hover:bg-${link.color} hover:text-white transition-all font-sport text-sm`}
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <form className="glass-card p-6 space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-sport uppercase tracking-wider mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-lg focus:border-sport-blue focus:outline-none focus:ring-2 focus:ring-sport-blue/20 transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-sport uppercase tracking-wider mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-lg focus:border-sport-blue focus:outline-none focus:ring-2 focus:ring-sport-blue/20 transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-sport uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-lg focus:border-sport-blue focus:outline-none focus:ring-2 focus:ring-sport-blue/20 transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-gradient-to-r from-sport-blue to-sport-green rounded-lg font-sport font-bold hover:shadow-lg hover:shadow-sport-blue/50 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>

          {/* Availability Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center glass-card p-6"
          >
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="w-3 h-3 rounded-full bg-sport-green animate-pulse" />
              <span className="font-sport uppercase tracking-wider text-sm">Currently Available</span>
            </div>
            <p className="text-slate-400 text-sm">
              Open for freelance projects, collaborations, and full-time opportunities
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
