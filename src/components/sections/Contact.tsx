"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, ArrowRight, CheckCircle } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // In a real app, you'd send this to your backend
  };

  return (
    <section id="contact" className="relative py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left column - Info */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="eyebrow mb-4"
            >
              Get in Touch
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="font-display text-5xl font-bold tracking-tight text-pearl md:text-6xl mb-6"
            >
              Let&apos;s Create Something Amazing
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-pearl/60 mb-12"
            >
              Ready to ride the wave? Tell us about your project and we&apos;ll
              get back to you within 24 hours.
            </motion.p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan/10 text-cyan">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-sm text-pearl/60">Email</p>
                  <a
                    href="mailto:hello@mawj.agency"
                    className="text-pearl hover:text-cyan transition-colors"
                  >
                    hello@mawj.agency
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan/10 text-cyan">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-sm text-pearl/60">Location</p>
                  <p className="text-pearl">Casablanca, Morocco</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan/10 text-cyan">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-sm text-pearl/60">Phone</p>
                  <p className="text-pearl">+212 5XX XXXXXX</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-2xl border border-cyan/20 bg-ocean-light/30 p-12 text-center"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-cyan/10 text-cyan">
                  <CheckCircle size={32} />
                </div>
                <h3 className="font-display text-2xl font-semibold text-pearl mb-2">
                  Message Sent!
                </h3>
                <p className="text-pearl/60">
                  We&apos;ll get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-pearl/80 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      className="w-full rounded-xl border border-cyan/10 bg-ocean-light/30 px-4 py-3 text-pearl placeholder:text-pearl/30 focus:border-cyan/50 focus:outline-none focus:ring-2 focus:ring-cyan/20"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-pearl/80 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      className="w-full rounded-xl border border-cyan/10 bg-ocean-light/30 px-4 py-3 text-pearl placeholder:text-pearl/30 focus:border-cyan/50 focus:outline-none focus:ring-2 focus:ring-cyan/20"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-pearl/80 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      value={formState.company}
                      onChange={(e) =>
                        setFormState({ ...formState, company: e.target.value })
                      }
                      className="w-full rounded-xl border border-cyan/10 bg-ocean-light/30 px-4 py-3 text-pearl placeholder:text-pearl/30 focus:border-cyan/50 focus:outline-none focus:ring-2 focus:ring-cyan/20"
                      placeholder="Company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-pearl/80 mb-2">
                      Budget
                    </label>
                    <select
                      id="budget"
                      value={formState.budget}
                      onChange={(e) =>
                        setFormState({ ...formState, budget: e.target.value })
                      }
                      className="w-full rounded-xl border border-cyan/10 bg-ocean-light/30 px-4 py-3 text-pearl focus:border-cyan/50 focus:outline-none focus:ring-2 focus:ring-cyan/20"
                    >
                      <option value="">Select budget</option>
                      <option value="2500-5000">$2,500 - $5,000</option>
                      <option value="5000-10000">$5,000 - $10,000</option>
                      <option value="10000+">$10,000+</option>
                      <option value="custom">Custom</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-pearl/80 mb-2">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    className="w-full rounded-xl border border-cyan/10 bg-ocean-light/30 px-4 py-3 text-pearl placeholder:text-pearl/30 focus:border-cyan/50 focus:outline-none focus:ring-2 focus:ring-cyan/20 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group flex w-full items-center justify-center gap-2 rounded-full bg-cyan py-4 text-sm font-semibold text-ocean transition-all hover:shadow-glow-cyan"
                >
                  Send Message
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
