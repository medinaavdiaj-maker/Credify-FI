import { motion } from 'motion/react';
import { Globe2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Globe2 className="w-12 h-12 text-[#0066FF] mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Expanding Access to Financial Opportunity</h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            Credify FI is a mission-driven fintech company. We believe that financial inclusion starts with fair assessment. By combining ethical AI with human expertise, we are building a credit system that works for everyone, not just those with a traditional financial history.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
