import { motion } from 'motion/react';
import { ShieldCheck, Lock, Scale } from 'lucide-react';

export default function Trust() {
  return (
    <section className="py-24 border-y border-white/5 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 mx-auto rounded-2xl bg-[#0066FF]/10 flex items-center justify-center mb-6">
              <Scale className="w-8 h-8 text-[#0066FF]" />
            </div>
            <h3 className="text-xl font-semibold mb-3">AI + Human Supervision</h3>
            <p className="text-gray-400">Every model output is monitored by certified credit analysts to ensure fairness.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="w-16 h-16 mx-auto rounded-2xl bg-[#0066FF]/10 flex items-center justify-center mb-6">
              <ShieldCheck className="w-8 h-8 text-[#0066FF]" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Compliance-Ready</h3>
            <p className="text-gray-400">Built to meet FCRA, ECOA, and strict banking regulatory standards.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-16 h-16 mx-auto rounded-2xl bg-[#0066FF]/10 flex items-center justify-center mb-6">
              <Lock className="w-8 h-8 text-[#0066FF]" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Privacy-First</h3>
            <p className="text-gray-400">Bank-grade encryption and strict data minimization principles.</p>
          </motion.div>
        </div>

        <div className="mt-24 text-center">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-8">Trusted by innovative lenders</p>
          <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale">
            <div className="text-2xl font-bold font-serif">GlobalBank</div>
            <div className="text-2xl font-bold tracking-tighter">FinLend</div>
            <div className="text-2xl font-bold italic">NeoCredit</div>
            <div className="text-2xl font-bold uppercase">Apex Financial</div>
          </div>
        </div>
      </div>
    </section>
  );
}
