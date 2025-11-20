import React, { useState } from 'react';

type Level = 'root' | 'sales' | 'invoices' | 'invoiceId';

const NestedRoutes: React.FC = () => {
  const [highlighted, setHighlighted] = useState<Level | null>(null);

  const handleMouseEnter = (level: Level) => setHighlighted(level);
  const handleMouseLeave = () => setHighlighted(null);

  // Conditional Classes
  const getOpacity = (target: Level) => {
    if (!highlighted) return 'opacity-100'; // Default state
    if (highlighted === target) return 'opacity-100 ring-4 ring-offset-2 ring-offset-[#121212] ring-white z-10 shadow-2xl scale-[1.02] transition-all'; 
    return 'opacity-30 grayscale transition-all';
  };

  // Button Classes
  const btnBase = "m-2 rounded-full bg-opacity-20 px-6 py-2 font-mono text-xs md:text-base font-bold leading-6 transition-all cursor-pointer border border-transparent hover:scale-105";
  const getBtnClass = (level: Level, colorClass: string, activeColor: string) => {
    const isActive = highlighted === level;
    return `${btnBase} ${colorClass} ${isActive ? `opacity-100 ring-2 ring-white` : 'opacity-80'}`;
  };

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-6 text-5xl font-black text-white md:px-12 md:text-[88px] md:leading-[96px]">
        <h2>
          Remix has a cheat code:<br />
          <span className="text-brand-yellow">Nested Routes.</span>
        </h2>
        <span className="font-mono text-gray-700 text-3xl block mt-4" aria-hidden="true">
          <span>↑</span><span>↑</span><span>↓</span><span>↓</span><span>←</span><span>→</span><span>←</span><span>→</span><span>B</span><span>A</span><span>↵</span>
        </span>
      </div>

      <div className="h-[10vh]"></div>

      <div className="px-6 pb-12 text-center">
        <p className="text-xl text-gray-400 mb-8">Hover or tap the buttons to see how they’re all related</p>
        <div className="text-4xl md:text-7xl animate-bounce mb-8">👇</div>
        
        <div className="flex flex-wrap justify-center">
          <button 
            className={getBtnClass('root', 'bg-blue-900 text-blue-300', 'blue')}
            onMouseEnter={() => handleMouseEnter('root')}
            onMouseLeave={handleMouseLeave}
          >
            &lt;Root&gt;
          </button>
          <button 
            className={getBtnClass('sales', 'bg-cyan-900 text-cyan-300', 'cyan')}
            onMouseEnter={() => handleMouseEnter('sales')}
            onMouseLeave={handleMouseLeave}
          >
            &lt;Sales&gt;
          </button>
          <button 
            className={getBtnClass('invoices', 'bg-yellow-900 text-yellow-300', 'yellow')}
            onMouseEnter={() => handleMouseEnter('invoices')}
            onMouseLeave={handleMouseLeave}
          >
            &lt;Invoices&gt;
          </button>
          <button 
            className={getBtnClass('invoiceId', 'bg-red-900 text-red-300', 'red')}
            onMouseEnter={() => handleMouseEnter('invoiceId')}
            onMouseLeave={handleMouseLeave}
          >
            &lt;Invoice id={'{'}id{'}'}&gt;
          </button>
        </div>
      </div>

      {/* UI Visualization */}
      <div className="relative mx-auto max-w-4xl px-4 pb-20">
        <div className={`bg-gray-800 rounded-lg shadow-2xl overflow-hidden border border-gray-700 transition-all duration-500 ${highlighted === 'root' ? 'ring-4 ring-blue-500' : ''}`}>
            
            {/* Browser Bar - Root Level */}
            <div className="bg-gray-900 px-4 py-2 flex items-center gap-2 border-b border-gray-700">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="ml-4 bg-gray-800 rounded px-3 py-1 text-xs text-gray-400 flex-1 text-center font-mono">
                    example.com/sales/invoices/102000
                </div>
            </div>

            <div className="flex bg-white min-h-[500px]">
                {/* Sidebar - Root Level */}
                <div className={`w-48 bg-gray-50 border-r border-gray-200 flex flex-col p-4 ${getOpacity('root')}`}>
                    <div className="flex items-center gap-2 text-green-700 font-bold text-xl mb-8">
                        <div className="w-5 h-5 bg-current rounded-full"></div>
                        Fakebooks
                    </div>
                    <nav className="flex flex-col gap-2 text-sm font-semibold text-gray-600">
                        <div className="px-2 py-1 rounded">Dashboard</div>
                        <div className="px-2 py-1 rounded">Accounts</div>
                        <div className={`px-2 py-1 rounded ${highlighted === 'sales' ? 'bg-cyan-100 text-cyan-800 ring-2 ring-cyan-400' : 'bg-gray-200 text-gray-900'}`}>Sales</div>
                        <div className="px-2 py-1 rounded">Expenses</div>
                        <div className="px-2 py-1 rounded">Reports</div>
                    </nav>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 flex flex-col">
                    
                    {/* Sales Header - Sales Level */}
                    <div className={`p-8 pb-4 border-b border-gray-100 ${getOpacity('sales')}`}>
                        <h1 className="text-3xl font-bold text-gray-900 mb-4">Sales</h1>
                        <div className="flex gap-6 text-sm font-medium text-gray-500">
                            <div>Overview</div>
                            <div>Subscriptions</div>
                            <div className={`text-black border-b-2 border-black pb-4 -mb-4.5 ${highlighted === 'invoices' ? 'text-yellow-600 border-yellow-500' : ''}`}>Invoices</div>
                            <div>Customers</div>
                            <div>Deposits</div>
                        </div>
                    </div>

                    {/* Inner Content Grid */}
                    <div className="flex-1 p-8 bg-white flex gap-6">
                        {/* Invoice List - Invoices Level */}
                        <div className={`w-1/2 flex flex-col gap-2 ${getOpacity('invoices')}`}>
                            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Invoice List</div>
                            {[
                                { name: "Santa Monica", amount: "$10,800", year: "1995", status: "Overdue", color: "text-red-600" },
                                { name: "Stankonia", amount: "$8,000", year: "2000", status: "Due Today", active: true },
                                { name: "Ocean Avenue", amount: "$9,500", year: "2003", status: "Paid", color: "text-green-700" },
                                { name: "Tubthumper", amount: "$14,000", year: "1997", status: "Due in 10 Days", color: "text-gray-500" },
                            ].map((item, i) => (
                                <div key={i} className={`p-3 rounded border ${item.active ? (highlighted === 'invoiceId' ? 'bg-red-50 border-red-200 ring-2 ring-red-400' : 'bg-gray-100 border-transparent') : 'border-gray-100 bg-white'}`}>
                                    <div className="flex justify-between font-bold text-gray-900 text-sm">
                                        <span>{item.name}</span>
                                        <span>{item.amount}</span>
                                    </div>
                                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                                        <span>{item.year}</span>
                                        <span className={`uppercase font-medium ${item.color || ''}`}>{item.status}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Invoice Detail - InvoiceId Level */}
                        <div className={`w-1/2 bg-white rounded-lg p-6 border border-gray-100 shadow-sm ${getOpacity('invoiceId')}`}>
                            <div className="font-bold text-gray-900 text-xl mb-1">Stankonia</div>
                            <div className="text-4xl font-bold text-gray-900 mb-2">$8,000</div>
                            <div className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-8">Due Today • Invoiced 10/31/2000</div>
                            
                            <div className="space-y-4 border-t border-gray-100 pt-4">
                                <div className="flex justify-between text-sm text-gray-600">
                                    <span>Pro Plan</span>
                                    <span>$6,000</span>
                                </div>
                                <div className="flex justify-between text-sm text-gray-600">
                                    <span>Custom</span>
                                    <span>$2,000</span>
                                </div>
                                <div className="flex justify-between text-base font-bold text-gray-900 border-t border-gray-100 pt-4">
                                    <span>Net Total</span>
                                    <span>$8,000</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default NestedRoutes;