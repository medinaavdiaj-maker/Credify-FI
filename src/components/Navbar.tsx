import { motion } from 'motion/react';
import { ShieldCheck } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-8 h-8 text-[#0066FF]" />
          <span className="text-xl font-bold tracking-tight">Credify FI</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <a href="#solution" className="hover:text-white transition-colors">Solution</a>
          <a href="#api" className="hover:text-white transition-colors">API</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
        </div>
        <div className="flex items-center gap-4">
          <button className="hidden md:block text-sm font-medium hover:text-[#0066FF] transition-colors">Log In</button>
          <button className="bg-[#0066FF] hover:bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-[0_0_15px_rgba(0,102,255,0.3)] hover:shadow-[0_0_25px_rgba(0,102,255,0.5)]">
            Get API Access
          </button>
        </div>
      </div>
    </nav>
  );
}
