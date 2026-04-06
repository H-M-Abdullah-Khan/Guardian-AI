import React, { useState } from 'react';
import { ShieldCheck, RefreshCw, Globe, Server, Activity, Database, Clock, Lock, List, LayoutGrid, CheckCircle2, AlertTriangle, Info } from 'lucide-react';
import './ResultPage.css';

const ResultPage = ({ data, onReset }) => {
    const [activeTab, setActiveTab] = useState('detection');
    const isSafe = data?.trust_score > 70;

    // Helper for Timestamp
    const formatDate = (ts) => ts ? new Date(ts * 1000).toLocaleString() : 'N/A';

    return (
        <div className="max-w-7xl mx-auto p-4 md:p-10 font-jakarta pb-20">
            {/* Nav Header */}
            <header className="flex justify-between items-center mb-10 bg-white/60 backdrop-blur-xl p-5 rounded-[2rem] border border-white shadow-xl shadow-slate-200/50">
                <div className="flex items-center gap-3">
                    <div className="bg-emerald-500 p-2.5 rounded-2xl shadow-lg shadow-emerald-200">
                        <ShieldCheck className="text-white w-6 h-6" />
                    </div>
                    <span className="text-2xl font-black text-slate-900">GuardianAI <span className="text-emerald-500 font-medium">CORE</span></span>
                </div>
                <div className="flex items-center gap-4">
                    <button onClick={() => window.print()} className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-slate-100 text-slate-700 rounded-xl font-bold text-sm hover:bg-slate-200 transition-all">Export PDF</button>
                    <button onClick={onReset} className="bg-slate-900 text-white px-6 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-emerald-600 transition-all shadow-lg">
                        <RefreshCw size={16} /> NEW SCAN
                    </button>
                </div>
            </header>

            {/* Top Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* Gauge Card */}
                <div className="bg-white rounded-[3rem] p-8 border border-slate-100 shadow-sm flex flex-col items-center">
                    <div className={`relative w-48 h-48 rounded-full border-[15px] flex flex-col items-center justify-center mb-6 ${isSafe ? 'border-emerald-500 shadow-[0_0_50px_rgba(16,185,129,0.15)]' : 'border-red-500'}`}>
                        <span className="text-5xl font-black text-slate-800">{data?.trust_score}%</span>
                        <span className="text-[10px] font-black text-slate-400 tracking-[0.2em]">SAFE SCORE</span>
                    </div>
                    <div className={`px-6 py-2 rounded-full text-xs font-black uppercase tracking-tighter ${isSafe ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' : 'bg-red-50 text-red-600 border border-red-100'}`}>
                        {data?.risk_level} STATUS
                    </div>
                </div>

                {/* HTTP Metadata Card */}
                <div className="md:col-span-2 bg-slate-900 rounded-[3rem] p-10 text-white shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform duration-700">
                        <Globe size={150} />
                    </div>
                    <div className="relative z-10">
                        <p className="text-emerald-400 text-[10px] font-black uppercase tracking-[0.3em] mb-4">Request Identification</p>
                        <h2 className="text-3xl font-black mb-10 break-all leading-tight max-w-2xl">{data?.url}</h2>
                        
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
                            <div>
                                <p className="text-[9px] font-bold text-slate-500 uppercase mb-1">Status Code</p>
                                <p className="text-xl font-black text-emerald-400">{data?.http_details?.status_code || '200'}</p>
                            </div>
                            <div>
                                <p className="text-[9px] font-bold text-slate-500 uppercase mb-1">Response Size</p>
                                <p className="text-xl font-black">{data?.http_details?.body_length || '0'} Bytes</p>
                            </div>
                            <div>
                                <p className="text-[9px] font-bold text-slate-500 uppercase mb-1">Server</p>
                                <p className="text-xl font-black truncate text-blue-400">{data?.http_details?.server}</p>
                            </div>
                            <div>
                                <p className="text-[9px] font-bold text-slate-500 uppercase mb-1">Analysis Total</p>
                                <p className="text-xl font-black text-purple-400">{Object.keys(data?.vendors || {}).length}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tabs System (Jaise Screenshot 1, 2, 3 mein tha) */}
            <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">
                <nav className="flex border-b border-slate-100 bg-slate-50/50">
                    {['detection', 'details', 'categories', 'community'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-8 py-5 text-xs font-black uppercase tracking-widest transition-all ${activeTab === tab ? 'text-emerald-600 border-b-2 border-emerald-600 bg-white' : 'text-slate-400 hover:text-slate-600'}`}
                        >
                            {tab}
                        </button>
                    ))}
                </nav>

                <div className="p-8 min-h-[500px]">
                    {/* TAB 1: DETECTION (Screenshots 1 & 2) */}
                    {activeTab === 'detection' && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {data?.vendors && Object.entries(data.vendors).map(([name, res], i) => (
                                    <div key={i} className="flex justify-between items-center p-5 bg-slate-50/50 rounded-2xl border border-slate-100 hover:border-emerald-200 transition-colors">
                                        <div className="flex items-center gap-4">
                                            <div className={`w-2 h-2 rounded-full ${res.category === 'harmless' ? 'bg-emerald-400' : 'bg-red-500'}`}></div>
                                            <span className="text-sm font-bold text-slate-700">{name}</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className={`text-[10px] font-black px-3 py-1 rounded-lg ${res.category === 'harmless' ? 'bg-emerald-100 text-emerald-600' : 'bg-red-100 text-red-600'}`}>
                                                {res.result.toUpperCase()}
                                            </span>
                                            {res.category === 'harmless' ? <CheckCircle2 size={16} className="text-emerald-500" /> : <AlertTriangle size={16} className="text-red-500" />}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* TAB 2: DETAILS (Screenshot 4 - Headers & Meta) */}
                    {activeTab === 'details' && (
                        <div className="space-y-10 animate-in fade-in duration-500">
                            <section>
                                <h3 className="text-lg font-black text-slate-800 mb-6 flex items-center gap-2"><Server size={20} className="text-blue-500" /> HTTP Response Headers</h3>
                                <div className="bg-slate-900 rounded-3xl p-6 font-mono text-xs text-blue-300 leading-relaxed overflow-x-auto">
                                    <p>HTTP/1.1 {data?.http_details?.status_code || '200'} OK</p>
                                    <p>Content-Type: {data?.http_details?.content_type}</p>
                                    <p>Server: {data?.http_details?.server}</p>
                                    <p>Final-URL: {data?.http_details?.final_url}</p>
                                    <p>Content-Length: {data?.http_details?.body_length}</p>
                                </div>
                            </section>
                            
                            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
                                    <h4 className="font-black text-slate-800 mb-6 flex items-center gap-2"><Clock size={18} className="text-orange-500" /> History & Timing</h4>
                                    <div className="space-y-4">
                                        <div className="flex justify-between border-b border-slate-200 pb-3">
                                            <span className="text-xs font-bold text-slate-400">First Submission</span>
                                            <span className="text-xs font-black text-slate-700">{formatDate(data?.metadata?.first_seen)}</span>
                                        </div>
                                        <div className="flex justify-between border-b border-slate-200 pb-3">
                                            <span className="text-xs font-bold text-slate-400">Last Analysis Date</span>
                                            <span className="text-xs font-black text-slate-700">{formatDate(data?.metadata?.last_scan)}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
                                    <h4 className="font-black text-slate-800 mb-6 flex items-center gap-2"><Database size={18} className="text-purple-500" /> Security Meta</h4>
                                    <div className="space-y-4">
                                        <div className="flex justify-between border-b border-slate-200 pb-3">
                                            <span className="text-xs font-bold text-slate-400">Community Reputation</span>
                                            <span className={`text-xs font-black ${data?.metadata?.reputation >= 0 ? 'text-emerald-500' : 'text-red-500'}`}>
                                                {data?.metadata?.reputation} points
                                            </span>
                                        </div>
                                        <div className="flex flex-wrap gap-2 pt-2">
                                            {data?.metadata?.tags?.map((tag, i) => (
                                                <span key={i} className="bg-white px-3 py-1 rounded-md border border-slate-200 text-[9px] font-black uppercase text-slate-500">{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    )}

                    {/* TAB 3: CATEGORIES (Screenshot 3) */}
                    {activeTab === 'categories' && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 animate-in fade-in duration-500">
                            {data?.categories && Object.entries(data.categories).map(([provider, label], i) => (
                                <div key={i} className="p-6 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-md transition-all group">
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2 group-hover:text-emerald-500 transition-colors">{provider}</p>
                                    <p className="text-sm font-extrabold text-slate-800">{label}</p>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* TAB 4: COMMUNITY (Placeholder) */}
                    {activeTab === 'community' && (
                        <div className="flex flex-col items-center justify-center py-20 text-center opacity-50">
                            <Info size={48} className="mb-4 text-slate-300" />
                            <h3 className="text-xl font-black text-slate-800">Community Insights</h3>
                            <p className="text-sm font-medium text-slate-500 mt-2">No community comments found for this scan.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ResultPage;