import { motion } from 'motion/react';
import { Check } from 'lucide-react';

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 relative border-t border-white/5 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Simple, Transparent Pricing</h2>
          <p className="text-gray-400 text-lg">Pay only for the scores you generate. No hidden fees.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-10 rounded-3xl border-white/10"
          >
            <h3 className="text-2xl font-bold mb-2">Pay-As-You-Go</h3>
            <p className="text-gray-400 mb-6">Perfect for growing lenders</p>
            <div className="text-4xl font-bold mb-8">$1.50 <span className="text-lg text-gray-500 font-normal">/ score</span></div>
            
            <ul className="space-y-4 mb-10">
              {['Full API access', 'Standard ML models', 'Email support', 'Basic reporting'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                  <Check className="w-5 h-5 text-[#0066FF]" />
                  {item}
                </li>
              ))}
            </ul>
            <button className="w-full glass hover:bg-white/5 py-4 rounded-xl font-medium transition-colors">
              Get Started
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass p-10 rounded-3xl border-[#0066FF]/30 relative overflow-hidden glow-blue"
          >
            <div className="absolute top-0 right-0 bg-[#0066FF] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>
            <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
            <p className="text-gray-400 mb-6">For high-volume institutions</p>
            <div className="text-4xl font-bold mb-8">Custom</div>
            
            <ul className="space-y-4 mb-10">
              {['Volume discounts', 'Custom model tuning', 'Dedicated account manager', 'SLA guarantee', 'Human review priority'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                  <Check className="w-5 h-5 text-[#0066FF]" />
                  {item}
                </li>
              ))}
            </ul>
            <button className="w-full bg-[#0066FF] hover:bg-blue-600 text-white py-4 rounded-xl font-medium transition-colors">
              Request Pricing
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
