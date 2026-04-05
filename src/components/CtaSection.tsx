import { motion } from 'motion/react';

export default function CtaSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0066FF]/10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-[#0066FF]/20 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass p-12 md:p-20 rounded-3xl border-[#0066FF]/30"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Start Approving More Customers Today</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Join the lenders who are safely expanding their portfolios with alternative credit scoring.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-[#0066FF] hover:bg-blue-600 text-white px-8 py-4 rounded-full font-medium transition-all shadow-[0_0_20px_rgba(0,102,255,0.4)]">
              Get Started
            </button>
            <button className="bg-white text-black hover:bg-gray-200 px-8 py-4 rounded-full font-medium transition-all">
              Book a Demo
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
