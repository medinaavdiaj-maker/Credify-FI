import { motion } from 'motion/react';
import { Terminal, Code2, ArrowRight } from 'lucide-react';

export default function ApiSection() {
  const codeSnippet = `
// POST /v1/scores/generate
const response = await fetch('https://api.credify.fi/v1/scores', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer sk_live_...',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    applicant_id: "usr_892374",
    data_sources: ["plaid", "experian_rentbureau"],
    loan_type: "personal_unsecured"
  })
});

const { score, risk_tier, factors } = await response.json();
// Returns: { score: 742, risk_tier: "low", ... }
  `.trim();

  return (
    <section id="api" className="py-24 relative overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0066FF]/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-white/10 text-sm font-medium mb-6">
              <Terminal className="w-4 h-4" />
              <span>Developer First</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Built for Seamless Integration</h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Integrate our REST API into your loan origination system in days, not months. Secure infrastructure, comprehensive webhooks, and 99.99% uptime.
            </p>
            
            <ul className="space-y-4 mb-10">
              {['RESTful architecture with JSON responses', 'Idempotent requests for safety', 'Comprehensive sandbox environment'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                  <Code2 className="w-5 h-5 text-[#0066FF]" />
                  {item}
                </li>
              ))}
            </ul>

            <button className="bg-white text-black hover:bg-gray-200 px-8 py-4 rounded-full font-medium transition-all flex items-center gap-2">
              View API Docs <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass rounded-2xl overflow-hidden border-white/10 shadow-2xl">
              <div className="bg-black/50 px-4 py-3 border-b border-white/10 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-2 text-xs text-gray-500 font-mono">generate_score.js</span>
              </div>
              <div className="p-6 overflow-x-auto">
                <pre className="text-sm font-mono text-gray-300">
                  <code>{codeSnippet}</code>
                </pre>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
