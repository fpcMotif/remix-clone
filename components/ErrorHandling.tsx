import React from 'react';

const ErrorHandling: React.FC = () => {
  return (
    <section className="relative bg-blue-600 py-32 overflow-hidden">
      <div className="mx-auto max-w-5xl px-6 relative z-10">
        <div className="text-[120px] font-black text-white leading-none mb-10 transform -rotate-6 origin-bottom-left inline-block">:)</div>
        <h2 className="sr-only">Error Handling</h2>
        <p className="text-3xl md:text-4xl font-bold text-white max-w-3xl mb-12 leading-tight">
            Your websites run into problems, but with Remix they don’t need to be refreshed. Error handling is hard to remember and hard to do. That’s why it’s built in.
        </p>
        
        <div className="h-32"></div>

        <div className="grid lg:grid-cols-2 gap-16">
            <div>
                <div className="text-5xl md:text-7xl font-black text-white leading-tight mb-10">
                    <h2>Route Error Boundaries <span className="text-brand-yellow">keep the happy path happy.</span></h2>
                </div>
                <div className="space-y-8 text-2xl text-blue-100 font-semibold">
                    <p>Each route module can export an error boundary next to the default route component.</p>
                    <p>If an error is thrown, client or server side, users see the boundary instead of the default component.</p>
                </div>
            </div>

            <div className="relative rounded-xl bg-[#252525] p-6 shadow-2xl overflow-hidden self-center transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <pre className="font-mono text-sm sm:text-base leading-relaxed overflow-x-auto">
                    <code>
<span className="code-token-keyword">export</span> <span className="code-token-keyword">default</span> <span className="code-token-keyword">function</span> <span className="code-token-function">InvoiceRoute</span><span className="text-white">() {'{'}</span>
  <span className="code-token-keyword">const</span> <span className="code-token-attr">invoice</span> <span className="code-token-keyword">=</span> <span className="code-token-function">useLoaderData</span><span className="text-white">();</span>
  <span className="code-token-keyword">return</span> <span className="text-white">&lt;</span><span className="code-token-class">Invoice</span> <span className="code-token-function">data</span><span className="code-token-keyword">=</span><span className="text-white">{'{'}</span><span className="code-token-attr">invoice</span><span className="text-white">{'}'} /&gt;;</span>
<span className="text-white">{'}'}</span>

<span className="bg-gray-700/50 block -mx-6 px-6 py-0.5 border-l-2 border-brand-red"><span className="code-token-keyword">export</span> <span className="code-token-keyword">function</span> <span className="code-token-function">ErrorBoundary</span><span className="text-white">() {'{'}</span></span>
<span className="bg-gray-700/50 block -mx-6 px-6 py-0.5 border-l-2 border-brand-red">  <span className="code-token-keyword">let</span> <span className="code-token-attr">error</span> <span className="code-token-keyword">=</span> <span className="code-token-function">useRouteError</span><span className="text-white">();</span></span>
<span className="bg-gray-700/50 block -mx-6 px-6 py-0.5 border-l-2 border-brand-red">  <span className="code-token-class">console</span><span className="text-white">.</span><span className="code-token-function">error</span><span className="text-white">(</span><span className="code-token-attr">error</span><span className="text-white">);</span></span>
<span className="bg-gray-700/50 block -mx-6 px-6 py-0.5 border-l-2 border-brand-red">  <span className="code-token-keyword">return</span> <span className="text-white">(</span></span>
<span className="bg-gray-700/50 block -mx-6 px-6 py-0.5 border-l-2 border-brand-red">    <span className="text-white">&lt;</span><span className="code-token-tag">div</span><span className="text-white">&gt;</span></span>
<span className="bg-gray-700/50 block -mx-6 px-6 py-0.5 border-l-2 border-brand-red">      <span className="text-white">&lt;</span><span className="code-token-tag">h2</span><span className="text-white">&gt;Oh snap!&lt;/</span><span className="code-token-tag">h2</span><span className="text-white">&gt;</span></span>
<span className="bg-gray-700/50 block -mx-6 px-6 py-0.5 border-l-2 border-brand-red">      <span className="text-white">&lt;</span><span className="code-token-tag">p</span><span className="text-white">&gt;</span></span>
<span className="bg-gray-700/50 block -mx-6 px-6 py-0.5 border-l-2 border-brand-red">        <span className="text-white">There was a problem loading this invoice</span></span>
<span className="bg-gray-700/50 block -mx-6 px-6 py-0.5 border-l-2 border-brand-red">      <span className="text-white">&lt;/</span><span className="code-token-tag">p</span><span className="text-white">&gt;</span></span>
<span className="bg-gray-700/50 block -mx-6 px-6 py-0.5 border-l-2 border-brand-red">    <span className="text-white">&lt;/</span><span className="code-token-tag">div</span><span className="text-white">&gt;</span></span>
<span className="bg-gray-700/50 block -mx-6 px-6 py-0.5 border-l-2 border-brand-red">  <span className="text-white">);</span></span>
<span className="text-white">{'}'}</span>
                    </code>
                </pre>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorHandling;