import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="px-6 sm:px-8 lg:flex lg:w-full lg:items-center lg:justify-between lg:gap-12">
      <div className="lg:mb-10 lg:w-1/2">
        <div className="lg:mx-auto lg:max-w-2xl">
          <h2 className="text-3xl font-black text-white xs:text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl leading-tight">
            Focused on <span className="text-brand-aqua">web standards</span> and <span className="text-brand-green">modern web app</span> UX, you’re simply going to <span className="text-brand-yellow">build better websites</span>
          </h2>
          <div className="h-6"></div>
          <p className="xs:text-lg lg:text-xl xl:max-w-xl text-gray-200">
            Remix is a full stack web framework that lets you focus on the user interface and work back through web standards to deliver a fast, slick, and resilient user experience. People are gonna love using your stuff.
          </p>
          <div className="h-9 xl:h-10"></div>
          <div className="flex flex-col gap-4 xl:flex-row">
            <a className="inline-flex items-center justify-center xl:text-xl h-14 xl:h-16 box-border px-8 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent font-semibold bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-200 transition-colors duration-200 w-full xl:order-1 xl:w-60" href="https://remix.run/docs/start/quickstart" data-discover="true">
              Get Started
            </a>
            <a className="inline-flex items-center justify-center xl:text-xl h-14 xl:h-16 t box-border px-8 rounded bg-transparent text-white border-current hover:border-brand-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent focus:ring-blue-200 focus:ring-opacity-80 font-semibold border-2 w-full xl:w-60" href="https://remix.run/docs" data-discover="true">
              Read the Docs
            </a>
          </div>
        </div>
      </div>

      <div className="relative -mx-6 mt-6 overflow-hidden p-4 sm:-mx-8 sm:p-8 md:p-10 lg:mt-0 lg:h-[51rem] lg:w-1/2 lg:rounded-l-2xl lg:p-8">
        <svg className="absolute left-0 top-0 h-full xl:rounded-3xl" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1920 1080">
            <g clipPath="url(#clip0_230:73)">
                <path fill="url(#paint0_linear_230:73)" d="M0 0H1920V1080H0z"></path>
                <path fill="url(#paint1_linear_230:73)" d="M664.307 809.4c-7.074-90.56-120.853-580.729-176.858-814.494l152.54-182.225c-238.022-21.168-727.33-60.742-780.388-49.698-66.322 13.805-79.586 563.243-99.483 668.161-15.917 83.934 146.645 574.286 229.916 808.976 135.592 7.36 416.06 17.67 453.2 0 46.426-22.09 229.916-317.519 221.073-430.72z"></path>
                <path fill="url(#paint2_linear_230:73)" d="M174.662 803.768C309.297 634.216 292.388 197.274 267.105-.002c14.222-14.663 45.984-47.187 59.258-59.983C342.955-75.981 30.073-149.96 6.369-147.96-12.593-146.361-45.778 429.875-60 717.792c22.123 99.305 100.028 255.527 234.662 85.976z"></path>
                <path fill="url(#paint3_linear_230:73)" d="M867.369 535.857c-105.199 62.977-57.22 440.793-48.583 564.173H2019.11l62.83-920.49c-64.77-201.867-257.55-510.307-510.44-129.13-252.89 381.176-213.12 906.695-305.1 963.99-109.48 68.19-293.833-541.52-399.031-478.543z"></path>
            </g>
            <defs>
                <linearGradient id="paint0_linear_230:73" x1="680.162" x2="1632.05" y1="577.98" y2="236.725" gradientUnits="userSpaceOnUse"><stop stopColor="#EB6899"></stop><stop offset="0.243" stopColor="#F090AE"></stop><stop offset="1" stopColor="#F6BDC5"></stop></linearGradient>
                <linearGradient id="paint1_linear_230:73" x1="212.213" x2="586.594" y1="-18.898" y2="1121.55" gradientUnits="userSpaceOnUse"><stop stopColor="#F892A2"></stop><stop offset="1" stopColor="#F4768C"></stop></linearGradient>
                <linearGradient id="paint2_linear_230:73" x1="297.919" x2="-16.453" y1="155.953" y2="236.012" gradientUnits="userSpaceOnUse"><stop stopColor="#F6728F"></stop><stop offset="1" stopColor="#F24F70"></stop></linearGradient>
                <linearGradient id="paint3_linear_230:73" x1="866.073" x2="1903.93" y1="1072.4" y2="300.803" gradientUnits="userSpaceOnUse"><stop offset="0.191" stopColor="#D45DA2"></stop><stop offset="0.415" stopColor="#9D58C7"></stop><stop offset="0.618" stopColor="#8F7DEC"></stop><stop offset="0.978" stopColor="#C1BAF4"></stop></linearGradient>
                <clipPath id="clip0_230:73"><path fill="#fff" d="M0 0H1920V1080H0z"></path></clipPath>
            </defs>
        </svg>

        <div className="relative overflow-auto bg-[#252525] p-3 text-sm sm:rounded-lg sm:text-base md:max-w-full lg:max-w-max xl:rounded-xl xl:p-4 rounded-xl">
            <pre className="font-mono text-sm leading-relaxed">
                <code>
                    <span className="code-token-keyword">export</span> <span className="code-token-keyword">async</span> <span className="code-token-keyword">function</span> <span className="code-token-function">loader</span><span className="text-white">({</span> <span className="code-token-attr">request</span> <span className="text-white">}) {'{'}</span>{'\n'}
                    <span className="text-white">  </span><span className="code-token-keyword">return</span> <span className="code-token-function">getProjects</span><span className="text-white">();</span>{'\n'}
                    <span className="text-white">{'}'}</span>{'\n\n'}
                    <span className="code-token-keyword">export</span> <span className="code-token-keyword">async</span> <span className="code-token-keyword">function</span> <span className="code-token-function">action</span><span className="text-white">({</span> <span className="code-token-attr">request</span> <span className="text-white">}) {'{'}</span>{'\n'}
                    <span className="text-white">  </span><span className="code-token-keyword">const</span> <span className="code-token-attr">form</span> <span className="code-token-keyword">=</span> <span className="code-token-keyword">await</span> <span className="code-token-attr">request</span><span className="text-white">.</span><span className="code-token-function">formData</span><span className="text-white">();</span>{'\n'}
                    <span className="text-white">  </span><span className="code-token-keyword">return</span> <span className="code-token-function">createProject</span><span className="text-white">({</span>{'\n'}
                    <span className="text-white">    title: </span><span className="code-token-attr">form</span><span className="text-white">.</span><span className="code-token-function">get</span><span className="text-white">(</span><span className="code-token-string">"title"</span><span className="text-white">),</span>{'\n'}
                    <span className="text-white">  });</span>{'\n'}
                    <span className="text-white">{'}'}</span>{'\n\n'}
                    <span className="code-token-keyword">export</span> <span className="code-token-keyword">default</span> <span className="code-token-keyword">function</span> <span className="code-token-function">Projects</span><span className="text-white">() {'{'}</span>{'\n'}
                    <span className="text-white">  </span><span className="code-token-keyword">const</span> <span className="code-token-attr">projects</span> <span className="code-token-keyword">=</span> <span className="code-token-function">useLoaderData</span><span className="text-white">();</span>{'\n'}
                    <span className="text-white">  </span><span className="code-token-keyword">const</span> <span className="text-white">{'{'} </span><span className="code-token-attr">state</span><span className="text-white"> {'}'}</span> <span className="code-token-keyword">=</span> <span className="code-token-function">useNavigation</span><span className="text-white">();</span>{'\n'}
                    <span className="text-white">  </span><span className="code-token-keyword">const</span> <span className="code-token-attr">busy</span> <span className="code-token-keyword">=</span> <span className="code-token-attr">state</span> <span className="code-token-keyword">===</span> <span className="code-token-string">"submitting"</span><span className="text-white">;</span>{'\n\n'}
                    <span className="text-white">  </span><span className="code-token-keyword">return</span> <span className="text-white">(</span>{'\n'}
                    <span className="text-white">    &lt;</span><span className="code-token-tag">div</span><span className="text-white">&gt;</span>{'\n'}
                    <span className="text-white">      {'{'}</span><span className="code-token-attr">projects</span><span className="text-white">.</span><span className="code-token-function">map</span><span className="text-white">((</span><span className="code-token-attr">project</span><span className="text-white">) </span><span className="code-token-keyword">=&gt;</span><span className="text-white"> (</span>{'\n'}
                    <span className="text-white">        &lt;</span><span className="code-token-class">Link</span> <span className="code-token-function">to</span><span className="code-token-keyword">=</span><span className="text-white">{'{'}</span><span className="code-token-attr">project</span><span className="text-white">.</span><span className="code-token-attr">slug</span><span className="text-white">{'}'}&gt;</span>{'\n'}
                    <span className="text-white">          {'{'}</span><span className="code-token-attr">project</span><span className="text-white">.</span><span className="code-token-attr">title</span><span className="text-white">{'}'}</span>{'\n'}
                    <span className="text-white">        &lt;/'}</span><span className="code-token-class">Link</span><span className="text-white">&gt;</span>{'\n'}
                    <span className="text-white">      )){'}'}</span>{'\n\n'}
                    <span className="text-white">      &lt;</span><span className="code-token-class">Form</span> <span className="code-token-function">method</span><span className="code-token-keyword">=</span><span className="code-token-string">"post"</span><span className="text-white">&gt;</span>{'\n'}
                    <span className="text-white">        &lt;</span><span className="code-token-tag">input</span> <span className="code-token-function">name</span><span className="code-token-keyword">=</span><span className="code-token-string">"title"</span> <span className="text-white">/&gt;</span>{'\n'}
                    <span className="text-white">        &lt;</span><span className="code-token-tag">button</span> <span className="code-token-function">type</span><span className="code-token-keyword">=</span><span className="code-token-string">"submit"</span> <span className="code-token-function">disabled</span><span className="code-token-keyword">=</span><span className="text-white">{'{'}</span><span className="code-token-attr">busy</span><span className="text-white">{'}'}&gt;</span>{'\n'}
                    <span className="text-white">          {'{'}</span><span className="code-token-attr">busy</span>{'\n'}
                    <span className="text-white">            </span><span className="code-token-keyword">?</span> <span className="code-token-string">"Creating..."</span>{'\n'}
                    <span className="text-white">            </span><span className="code-token-keyword">:</span> <span className="code-token-string">"Create New Project"</span><span className="text-white">{'}'}</span>{'\n'}
                    <span className="text-white">        &lt;/</span><span className="code-token-tag">button</span><span className="text-white">&gt;</span>{'\n'}
                    <span className="text-white">      &lt;/</span><span className="code-token-class">Form</span><span className="text-white">&gt;</span>{'\n'}
                    <span className="text-white">    &lt;/</span><span className="code-token-tag">div</span><span className="text-white">&gt;</span>{'\n'}
                    <span className="text-white">  );</span>{'\n'}
                    <span className="text-white">{'}'}</span>
                </code>
            </pre>
        </div>
      </div>
    </section>
  );
};

export default Hero;