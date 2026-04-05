import { motion } from 'motion/react';
import { BrainCircuit, Fingerprint, Network, ArrowRight } from 'lucide-react';

export default function Solution() {
  return (
    <section id="solution" className="py-24 relative">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0066FF]/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">A Smarter, Fairer Way to Score Credit</h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Credify FI uses alternative financial data, advanced machine learning models, and a critical human oversight layer to generate accurate, unbiased credit scores.
            </p>
            
            <div className="space-y-6 mb-10">
              {[
                { icon: <Network />, title: "Alternative Data Ingestion", desc: "Securely connects to bank accounts, utility providers, and digital wallets." },
                { icon: <BrainCircuit />, title: "AI Risk Analysis", desc: "Proprietary ML models analyze cash flow, income stability, and spending habits." },
                { icon: <Fingerprint />, title: "Human Oversight Layer", desc: "Expert reviewers ensure compliance, fairness, and model accuracy." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0066FF]/10 flex items-center justify-center shrink-0 text-[#0066FF]">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="text-[#0066FF] font-medium flex items-center gap-2 hover:gap-3 transition-all">
              Explore the Technology <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass rounded-2xl p-8 border-white/10">
              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
                {[
                  { step: "01", title: "Data Ingestion", desc: "API connects to 10,000+ financial institutions" },
                  { step: "02", title: "AI Analysis", desc: "Processing 500+ data points in milliseconds" },
                  { step: "03", title: "Risk Scoring", desc: "Generating a fair 300-850 equivalent score" },
                  { step: "04", title: "API Delivery", desc: "Instant JSON response to lender systems" }
                ].map((step, i) => (
                  <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-[#0A0A0A] text-gray-400 group-hover:text-[#0066FF] group-hover:border-[#0066FF]/50 transition-colors shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_0_4px_#0A0A0A] z-10">
                      {step.step}
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] glass p-4 rounded-xl">
                      <h4 className="font-semibold mb-1">{step.title}</h4>
                      <p className="text-sm text-gray-400">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
