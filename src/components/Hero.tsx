import { motion } from 'motion/react';
import { ArrowRight, Shield, Activity } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-40 pb-20 overflow-hidden min-h-screen flex items-center">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#0066FF]/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-[#0066FF]/30 text-[#0066FF] text-sm font-medium mb-8">
            <Shield className="w-4 h-4" />
            <span>Human-supervised AI for compliance</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
            Credit Scoring, <br />
            <span className="text-gradient">Reinvented for the Real World</span>
          </h1>
          <p className="text-lg text-gray-400 mb-10 max-w-xl leading-relaxed">
            AI-powered alternative credit scoring that helps lenders approve more people—fairly, safely, and intelligently. Built for banks, fintechs, and lenders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#0066FF] hover:bg-blue-600 text-white px-8 py-4 rounded-full font-medium transition-all shadow-[0_0_20px_rgba(0,102,255,0.4)] hover:shadow-[0_0_30px_rgba(0,102,255,0.6)] flex items-center justify-center gap-2">
              Get API Access <ArrowRight className="w-5 h-5" />
            </button>
            <button className="glass hover:bg-white/5 px-8 py-4 rounded-full font-medium transition-all flex items-center justify-center">
              See How It Works
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="glass rounded-2xl p-6 border-white/10 relative z-10 glow-blue">
            <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0066FF]/20 flex items-center justify-center">
                  <Activity className="w-5 h-5 text-[#0066FF]" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Live Scoring API</div>
                  <div className="font-medium">Applicant #8492</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-400">Credify Score</div>
                <div className="text-2xl font-bold text-[#0066FF]">742</div>
              </div>
            </div>
            
            <div className="space-y-4">
              {[
                { label: 'Income Patterns', value: 'Verified', color: 'text-green-400' },
                { label: 'Utility Payments', value: 'Consistent', color: 'text-green-400' },
                { label: 'Wallet Activity', value: 'Healthy', color: 'text-green-400' },
                { label: 'Human Review', value: 'Approved', color: 'text-[#0066FF]' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-white/5" style={{ animationDelay: `${i * 0.1}s` }}>
                  <span className="text-sm text-gray-300">{item.label}</span>
                  <span className={`text-sm font-medium ${item.color}`}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#0066FF]/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
}
