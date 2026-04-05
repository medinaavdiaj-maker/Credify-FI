import { motion } from 'motion/react';
import { Building2, Users } from 'lucide-react';

export default function Benefits() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass p-10 rounded-3xl border-[#0066FF]/20 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0066FF]/10 rounded-full blur-3xl" />
            <Building2 className="w-10 h-10 text-[#0066FF] mb-6" />
            <h3 className="text-3xl font-bold mb-6">For Lenders</h3>
            <ul className="space-y-4">
              {[
                "Increase approval rates by up to 30%",
                "Reduce default risk with predictive AI",
                "Access entirely new customer segments",
                "Seamless API integration with existing LOS"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass p-10 rounded-3xl border-white/10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
            <Users className="w-10 h-10 text-purple-400 mb-6" />
            <h3 className="text-3xl font-bold mb-6">For Borrowers</h3>
            <ul className="space-y-4">
              {[
                "Fair access to credit based on real behavior",
                "Recognition of rent and utility payments",
                "Faster approvals without traditional history",
                "Transparent scoring methodology"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
