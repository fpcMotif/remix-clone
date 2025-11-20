import React from 'react';

const CodeShowcase: React.FC = () => {
  return (
    <section className="mx-auto max-w-7xl p-6 md:p-10">
        <div className="mb-16">
            <h2 className="text-4xl font-black text-white sm:text-5xl md:text-6xl mb-6">
                Data loading ... <span className="text-4xl align-middle opacity-50">🥱</span>
            </h2>
            <p className="text-2xl font-bold text-gray-300 mb-4">
                You ever notice most of the code in your app is for <span className="text-brand-yellow">changing data?</span>
            </p>
            <p className="text-lg text-gray-400 max-w-3xl leading-relaxed">
                Imagine if React only had props and no way to set state. What’s the point? If a web framework helps you load data but doesn’t help you update it, what’s the point? Remix doesn’t drop you off at the <code className="bg-gray-800 px-1 rounded text-sm">&lt;form onSubmit&gt;</code> cliff.
            </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-12 text-xl md:text-3xl font-black text-gray-300 leading-tight">
                <p>It’s so simple it’s kind of silly. Just make a form...</p>
                <p className="text-gray-500">...and an action on a route module. It looks like traditional HTML forms but enables fully dynamic web experiences you're after.</p>
                <p>Remix runs the action server side, revalidates data client side, and even handles race conditions from resubmissions.</p>
                <p className="text-gray-500">Get fancy with transition hooks and make some pending UI. Remix handles all the state, you simply ask for it.</p>
            </div>

            <div className="relative rounded-xl bg-[#252525] p-6 shadow-2xl overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue to-brand-aqua"></div>
                <pre className="font-mono text-sm sm:text-base leading-relaxed overflow-x-auto">
                    <code>
<span className="code-token-keyword">export</span> <span className="code-token-keyword">default</span> <span className="code-token-keyword">function</span> <span className="code-token-function">NewInvoice</span><span className="text-white">() {'{'}</span>
  <span className="code-token-keyword">const</span> <span className="text-white">{'{'}</span> <span className="code-token-attr">formData</span><span className="text-white">,</span> <span className="code-token-attr">state</span> <span className="text-white">{'}'}</span> <span className="code-token-keyword">=</span> <span className="code-token-function">useNavigation</span><span className="text-white">();</span>
  <span className="bg-gray-700/50 block -mx-6 px-6 py-0.5 border-l-2 border-brand-yellow"><span className="code-token-keyword">const</span> <span className="code-token-attr">submission</span> <span className="code-token-keyword">=</span> <span className="code-token-attr">state</span> <span className="code-token-keyword">!==</span> <span className="code-token-string">"idle"</span><span className="text-white">;</span></span>
  <span className="bg-gray-700/50 block -mx-6 px-6 py-0.5 border-l-2 border-brand-yellow"><span className="code-token-keyword">return</span> <span className="code-token-attr">submission</span> <span className="code-token-keyword">?</span> <span className="text-white">(</span></span>
  <span className="bg-gray-700/50 block -mx-6 px-6 py-0.5 border-l-2 border-brand-yellow">  <span className="text-white">&lt;</span><span className="code-token-class">Invoice</span></span>
  <span className="bg-gray-700/50 block -mx-6 px-6 py-0.5 border-l-2 border-brand-yellow">    <span className="code-token-function">invoice</span><span className="code-token-keyword">=</span><span className="text-white">{'{'}</span><span className="code-token-class">Object</span><span className="text-white">.</span><span className="code-token-function">fromEntries</span><span className="text-white">(</span><span className="code-token-attr">formData</span><span className="text-white">){'}'}</span></span>
  <span className="bg-gray-700/50 block -mx-6 px-6 py-0.5 border-l-2 border-brand-yellow">  <span className="text-white">/&gt;</span></span>
  <span className="bg-gray-700/50 block -mx-6 px-6 py-0.5 border-l-2 border-brand-yellow"><span className="text-white">) : (</span></span>
    <span className="text-white">&lt;</span><span className="code-token-class">Form</span> <span className="code-token-function">method</span><span className="code-token-keyword">=</span><span className="code-token-string">"post"</span><span className="text-white">&gt;</span>
      <span className="text-white">&lt;</span><span className="code-token-tag">input</span> <span className="code-token-function">type</span><span className="code-token-keyword">=</span><span className="code-token-string">"text"</span> <span className="code-token-function">name</span><span className="code-token-keyword">=</span><span className="code-token-string">"company"</span> <span className="text-white">/&gt;</span>
      <span className="text-white">&lt;</span><span className="code-token-tag">input</span> <span className="code-token-function">type</span><span className="code-token-keyword">=</span><span className="code-token-string">"text"</span> <span className="code-token-function">name</span><span className="code-token-keyword">=</span><span className="code-token-string">"amount"</span> <span className="text-white">/&gt;</span>
      <span className="text-white">&lt;</span><span className="code-token-tag">button</span> <span className="code-token-function">type</span><span className="code-token-keyword">=</span><span className="code-token-string">"submit"</span><span className="text-white">&gt;</span>
        <span className="text-white">Create invoice</span>
      <span className="text-white">&lt;/</span><span className="code-token-tag">button</span><span className="text-white">&gt;</span>
    <span className="text-white">&lt;/</span><span className="code-token-class">Form</span><span className="text-white">&gt;</span>
  <span className="text-white">);</span>
<span className="text-white">{'}'}</span>
                    </code>
                </pre>
            </div>
        </div>
    </section>
  );
};

export default CodeShowcase;