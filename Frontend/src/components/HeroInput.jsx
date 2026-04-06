import React, { useState } from 'react';
import { ShieldCheck, Sparkles, Link2, ArrowRight } from 'lucide-react';
import './HeroInput.css'

const HeroInput = ({ onScan }) => {
    const [url, setUrl] = useState('');

    return (
        <div>
            <div className="mesh-gradient"></div>

    <header className="w-full max-w-7xl mx-auto px-6 py-10 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-3 group cursor-pointer">
            <div className="bg-white p-2.5 rounded-2xl shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
                <i data-lucide="shield-check" className="w-7 h-7 text-emerald-500"></i>
            </div>
            <span className="text-2xl font-extrabold tex    t-slate-900 tracking-tight">Guardian<span className="text-emerald-500">AI</span></span>
        </div>
        <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-500">
                <a href="#" className="hover:text-emerald-500 transition-colors">How it works</a>
                <a href="#" className="hover:text-emerald-500 transition-colors">Database</a>
                <a href="#" className="hover:text-emerald-500 transition-colors">API</a>
            </nav>
            <div className="flex items-center gap-4">
                <span className="badge-pro text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-sm">PRO ACCESS</span>
                <button className="bg-slate-900 text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-slate-800 transition-all shadow-lg shadow-slate-200">Sign In</button>
            </div>
        </div>
    </header>

    <main className="flex-grow flex flex-col items-center justify-center px-6 relative z-10 py-12">
        <div className="absolute top-1/4 -left-20 w-64 h-64 bg-emerald-100 rounded-full blur-3xl opacity-30 floating"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-30 floating" style={{animationdDelay: '-2s'}}></div>

        <div className="text-center mb-16 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-600 px-4 py-2 rounded-full text-xs font-bold mb-8 border border-emerald-100">
                <i data-lucide="sparkles" className="w-3.5 h-3.5"></i>
                NEW: NEURAL SCAN ENGINE V4.0
            </div>
            <h1 className="text-6xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight leading-[1.1]">
                Stop Scams Before <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-500">They Stop You.</span>
            </h1>
            <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
                The world's most advanced real-time digital detective. Instant verification for links, emails, and messages using military-grade AI.
            </p>
        </div>

        <div className="w-full max-w-4xl glass-card rounded-[2.5rem] p-5 flex flex-col md:flex-row items-center gap-4 input-glow border border-white transition-all duration-500">
            <div className="flex-grow flex items-center gap-5 px-6 w-full">
                <div className="bg-slate-50 p-3 rounded-2xl">
                    <i data-lucide="link-2" className="w-6 h-6 text-slate-400"></i>
                </div>
                <input 
                    type="text" 
                    id="scanInput"
                    placeholder="Paste suspicious link or message here..." 
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="w-full bg-transparent border-none focus:ring-0 text-xl text-slate-900 placeholder:text-slate-300 font-semibold py-4"
                />
            </div>
            <button 
                id="analyzeBtn"
                onClick={() => url && onScan(url)}
                className="btn-premium text-white font-extrabold px-12 py-5 rounded-[1.5rem] text-lg tracking-wide w-full md:w-auto whitespace-nowrap flex items-center justify-center gap-3"
            >
                <span>ANALYZE NOW</span><ArrowRight size={20} />
                <i data-lucide="arrow-right" className="w-5 h-5"></i>
            </button>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-12">
            <div className="flex items-center gap-3 text-slate-400 group cursor-default">
                <div className="p-2 rounded-lg bg-white shadow-sm border border-slate-100 group-hover:text-emerald-500 transition-colors">
                    <i data-lucide="shield-check" className="w-5 h-5"></i>
                </div>
                <span className="font-bold text-sm tracking-tight">Verified Safe</span>
            </div>
            <div className="flex items-center gap-3 text-slate-400 group cursor-default">
                <div className="p-2 rounded-lg bg-white shadow-sm border border-slate-100 group-hover:text-blue-500 transition-colors">
                    <i data-lucide="activity" className="w-5 h-5"></i>
                </div>
                <span className="font-bold text-sm tracking-tight">Active Monitoring</span>
            </div>
            <div className="flex items-center gap-3 text-slate-400 group cursor-default">
                <div className="p-2 rounded-lg bg-white shadow-sm border border-slate-100 group-hover:text-purple-500 transition-colors">
                    <i data-lucide="database" className="w-5 h-5"></i>
                </div>
                <span className="font-bold text-sm tracking-tight">Global Database</span>
            </div>
        </div>
    </main>

    <section className="w-full max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-2 glass-card rounded-[2.5rem] p-10 bento-item flex flex-col justify-between min-h-[240px]">
                <div>
                    <div className="bg-emerald-50 w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
                        <i data-lucide="shield-alert" className="w-6 h-6 text-emerald-500"></i>
                    </div>
                    <h3 className="text-2xl font-extrabold text-slate-900 mb-2">Threat Intelligence</h3>
                    <p className="text-slate-500 font-medium">Real-time sync with Interpol and global cybersecurity databases.</p>
                </div>
                <div className="flex items-end justify-between">
                    <span className="text-4xl font-black text-emerald-500">1.2M+</span>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Daily Blocks</span>
                </div>
            </div>
            
            <div className="glass-card rounded-[2.5rem] p-10 bento-item flex flex-col justify-between">
                <div className="bg-blue-50 w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
                    <i data-lucide="cpu" className="w-6 h-6 text-blue-500"></i>
                </div>
                <div>
                    <h3 className="text-xl font-extrabold text-slate-900 mb-1">Neural Core</h3>
                    <p className="text-sm text-slate-500 font-medium">99.9% Detection Rate</p>
                </div>
            </div>

            <div className="glass-card rounded-[2.5rem] p-10 bento-item flex flex-col justify-between">
                <div className="bg-purple-50 w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
                    <i data-lucide="globe" className="w-6 h-6 text-purple-500"></i>
                </div>
                <div>
                    <h3 className="text-xl font-extrabold text-slate-900 mb-1">Global Nodes</h3>
                    <p className="text-sm text-slate-500 font-medium">142 Countries Active</p>
                </div>
            </div>
        </div>
    </section>

    <footer className="w-full max-w-7xl mx-auto px-6 py-12 border-t border-slate-200/50 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
        <div className="flex items-center gap-2 opacity-50">
            <i data-lucide="shield" className="w-4 h-4"></i>
            <span className="text-xs font-bold uppercase tracking-widest">GuardianAI Security Protocol v4.0</span>
        </div>
        <div className="flex gap-8 text-xs font-bold text-slate-400 uppercase tracking-widest">
            <a href="#" className="hover:text-slate-900 transition-colors">Privacy</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Terms</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Contact</a>
        </div>
    </footer>
        </div>
    );
};

export default HeroInput;