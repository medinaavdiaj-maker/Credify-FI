import { motion } from 'motion/react';
import { Database, UserX, TrendingDown } from 'lucide-react';

export default function Problem() {
  const problems = [
    {
      icon: <Database className="w-6 h-6 text-red-400" />,
      title: "Limited Data",
      description: "FICO ignores real financial behavior like rent, utilities, and subscription payments."
    },
    {
      icon: <UserX className="w-6 h-6 text-red-400" />,
      title: "High Rejection Rates",
      description: "Millions are excluded, including gig workers, migrants, and young professionals."
    },
    {
      icon: <TrendingDown className="w-6 h-6 text-red-400" />,
      title: "Missed Opportunities",
      description: "Banks miss out on profitable, reliable customers due to outdated scoring models."
    }
  ];

  return (
    <section className="py-24 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Traditional Credit Systems Are Broken</h2>
          <p className="text-gray-400 text-lg">The legacy credit system wasn't built for the modern economy. It's time for a change.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="glass p-8 rounded-2xl hover:bg-white/5 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-6">
                {problem.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{problem.title}</h3>
              <p className="text-gray-400 leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
