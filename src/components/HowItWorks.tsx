import { motion } from 'motion/react';
import { Link2, Cpu, UserCheck, Zap } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: <Link2 className="w-6 h-6" />,
      title: "Connect Data Sources",
      description: "Rent, utilities, banking, and digital wallets are securely linked."
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "AI Risk Modeling",
      description: "Predictive scoring models analyze behavioral financial data."
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: "Human Review Layer",
      description: "Compliance and fairness checks by certified credit analysts."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Instant API Delivery",
      description: "Banks receive real-time, actionable credit scores."
    }
  ];

  return (
    <section className="py-24 relative border-t border-white/5 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">How It Works</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">A seamless pipeline from raw alternative data to actionable credit decisions.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-6 rounded-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#0066FF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-12 h-12 rounded-full bg-[#0066FF]/10 text-[#0066FF] flex items-center justify-center mb-6">
                {step.icon}
              </div>
              <div className="text-sm text-[#0066FF] font-mono mb-2">Step 0{i + 1}</div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
