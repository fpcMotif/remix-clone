import React from 'react';

const LoadingDemo: React.FC = () => {
  return (
    <section className="relative">
      <h2 className="sr-only">What about loading states?</h2>
      <div className="mx-auto max-w-6xl px-6 text-5xl font-black text-white md:px-12 md:text-[88px] md:leading-[96px] mb-24">
        Through nested routes, Remix can eliminate nearly <span className="text-brand-green">every loading state.</span>
      </div>
      
      <div className="grid xl:grid-cols-2 gap-10 px-6 max-w-7xl mx-auto">
        
        {/* Column 1: Without Remix */}
        <div>
            <div className="text-center text-2xl font-black text-gray-400 mb-8">Without Remix</div>
            <div className="bg-gray-800 rounded-xl p-6 shadow-inner min-h-[500px] relative">
                {/* Waterfall visualization */}
                <div className="space-y-6">
                    {[
                        { label: "document", w: "10%", delay: "0s" },
                        { label: "root.js", w: "25%", delay: "0.5s" },
                        { label: "user.json", w: "10%", delay: "1s" },
                        { label: "sales.js", w: "20%", delay: "1.5s" },
                        { label: "sales/nav.json", w: "15%", delay: "2s" },
                        { label: "invoices.js", w: "12%", delay: "2.5s" },
                        { label: "invoice.js", w: "20%", delay: "3s" },
                        { label: "invoice/123.json", w: "10%", delay: "3.5s" },
                    ].map((item, i) => (
                        <div key={i} className="flex items-center group">
                            <div className="w-32 text-right pr-4 text-sm font-mono text-gray-500">{item.label}</div>
                            <div className="flex-1 bg-gray-700/50 h-8 rounded relative overflow-hidden">
                                <div 
                                    className="absolute top-0 left-0 h-full bg-blue-500/50 animate-pulse"
                                    style={{ 
                                        width: item.w, 
                                        marginLeft: `${i * 10}%`, // Staggered start
                                        animationDelay: item.delay
                                    }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="absolute bottom-4 left-0 right-0 text-center text-red-400 font-bold">
                    Waterfall = Spinners 😵
                </div>
            </div>
            <p className="mt-8 text-2xl font-black text-gray-400">
                Most web apps fetch inside of components, creating <span className="text-brand-aqua">request waterfalls</span>, slower loads, and <span className="text-brand-red">jank.</span>
            </p>
        </div>

        {/* Column 2: With Remix */}
        <div>
            <div className="text-center text-2xl font-black text-white mb-8">With Remix</div>
            <div className="bg-gray-800 rounded-xl p-6 shadow-inner min-h-[500px] relative border border-brand-green/30">
                {/* Parallel visualization */}
                <div className="space-y-6">
                    {[
                        { label: "document", w: "30%", ml: "0%" },
                        { label: "root.js", w: "30%", ml: "30%" },
                        { label: "sales.js", w: "20%", ml: "30%" },
                        { label: "invoices.js", w: "10%", ml: "30%" },
                        { label: "invoice.js", w: "25%", ml: "30%" },
                    ].map((item, i) => (
                        <div key={i} className="flex items-center">
                            <div className="w-32 text-right pr-4 text-sm font-mono text-gray-300">{item.label}</div>
                            <div className="flex-1 bg-gray-700/50 h-8 rounded relative overflow-hidden">
                                <div 
                                    className="absolute top-0 left-0 h-full bg-brand-green"
                                    style={{ width: item.w, marginLeft: item.ml }}
                                ></div>
                            </div>
                        </div>
                    ))}
                    {/* Empty slots to show we are done faster */}
                    {[1,2,3].map((_, i) => (
                         <div key={i} className="flex items-center opacity-0">
                            <div className="w-32 text-right pr-4 text-sm font-mono">...</div>
                            <div className="flex-1 bg-gray-700/50 h-8 rounded"></div>
                         </div>
                    ))}
                </div>
                
                <div className="absolute right-10 top-0 bottom-0 w-px bg-brand-blue flex items-end pb-4">
                    <span className="transform rotate-90 origin-left translate-x-2 text-brand-blue text-xs font-mono uppercase">Load Time</span>
                </div>

                <div className="absolute bottom-4 left-0 right-0 text-center text-brand-green font-bold">
                    Parallel = Instant ⚡
                </div>
            </div>
            <p className="mt-8 text-2xl font-black text-gray-100">
                Remix loads data in parallel on the server and sends a fully formed HTML document. <span className="text-brand-pink">Way faster, jank free.</span>
            </p>
        </div>

      </div>
    </section>
  );
};

export default LoadingDemo;