"use client";

import { motion } from "framer-motion";
import { Check, Zap, Crown, Rocket } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "2,500",
    period: "per project",
    description: "Perfect for small businesses and startups",
    icon: Zap,
    features: [
      "Single-page website",
      "Responsive design",
      "SEO basics",
      "1 revision round",
      "1 week delivery",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Professional",
    price: "7,500",
    period: "per project",
    description: "Best for growing businesses",
    icon: Crown,
    features: [
      "Multi-page website (up to 10)",
      "Custom animations",
      "CMS integration",
      "SEO optimization",
      "3 revision rounds",
      "2-3 weeks delivery",
    ],
    cta: "Most Popular",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "per project",
    description: "For large-scale projects and agencies",
    icon: Rocket,
    features: [
      "Unlimited pages",
      "WebGL & 3D elements",
      "Custom integrations",
      "Dedicated support",
      "Unlimited revisions",
      "Priority delivery",
    ],
    cta: "Contact Us",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-5xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="eyebrow mb-4"
        >
          Pricing
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="font-display text-5xl font-bold tracking-tight text-pearl md:text-6xl mb-4"
        >
          Simple, Transparent Pricing
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-pearl/60 mb-16 max-w-2xl"
        >
          Choose the plan that fits your needs. All plans include our award-winning quality and attention to detail.
        </motion.p>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -8 }}
              className={`relative rounded-2xl border p-6 transition-all hover:shadow-glow-cyan ${
                plan.popular
                  ? "border-cyan/30 bg-ocean-light/50 shadow-glow-cyan"
                  : "border-cyan/10 bg-ocean-light/20"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-cyan px-4 py-1 text-xs font-semibold text-ocean">
                  Most Popular
                </div>
              )}

              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan/10 text-cyan">
                <plan.icon size={24} />
              </div>

              <h3 className="font-display text-2xl font-semibold text-pearl mb-2">
                {plan.name}
              </h3>
              <p className="text-pearl/60 text-sm mb-4">{plan.description}</p>

              <div className="mb-6">
                <span className="font-mono text-4xl font-bold text-pearl">
                  {plan.price === "Custom" ? "" : "$"}
                  {plan.price}
                </span>
                <span className="text-pearl/60 text-sm ml-2">{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-pearl/80">
                    <Check size={16} className="text-cyan shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block w-full rounded-full py-3 text-center text-sm font-semibold transition-all ${
                  plan.popular
                    ? "bg-gold text-ocean hover:shadow-glow-gold"
                    : "border border-cyan/30 text-cyan hover:bg-cyan/10"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
