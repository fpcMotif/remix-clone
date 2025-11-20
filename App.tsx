import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import NestedRoutes from './components/NestedRoutes';
import LoadingDemo from './components/LoadingDemo';
import CodeShowcase from './components/CodeShowcase';
import Footer from './components/Footer';
import ErrorHandling from './components/ErrorHandling';

const App: React.FC = () => {
  return (
    <div className="flex min-h-screen w-full flex-col overflow-x-hidden antialiased selection:bg-blue-200 selection:text-black dark:selection:bg-blue-800 dark:selection:text-white bg-gray-900 text-gray-200">
      <div role="progressbar" aria-hidden="true" className="fixed inset-x-0 left-0 top-0 z-50 h-1 animate-pulse">
        <div className="h-full bg-gradient-to-r from-brand-blue to-brand-aqua transition-all duration-500 ease-in-out w-0 opacity-0 transition-none"></div>
      </div>
      
      <div className="flex h-full flex-1 flex-col">
        <Header />
        
        <main className="flex flex-1 flex-col" tabIndex={-1}>
          <Hero />
          
          <div className="h-32"></div>
          
          <Testimonials />
          
          <div className="h-32"></div>
          
          <section className="mx-auto max-w-5xl p-6 md:p-10">
            <h2 className="text-4xl font-black text-white sm:text-5xl md:text-6xl">
              While you were <span className="text-brand-red">waiting</span> for your static site to build, <span className="text-brand-blue">distributed web</span> infra­structure got really good. <span className="text-brand-pink">Break through the static.</span>
            </h2>
            <div className="h-6"></div>
            <p className="hyphen-manual mt-2 text-lg md:pr-52 md:text-xl lg:pr-72">
              Remix is a seamless server and browser runtime that provides snappy page loads and instant transitions by leveraging distributed systems and native browser features instead of clunky static builds. Built on the Web Fetch API (instead of Node) <b className="text-white">it can run anywhere</b>. It already runs natively on Cloudflare Workers, and of course supports serverless and traditional Node.js environments, so you can come as you are.
            </p>
            <div className="h-6"></div>
            <p className="hyphen-manual mt-2 text-lg md:pr-52 md:text-xl lg:pr-72">
              Page speed is only one aspect of our true goal though. We're after <b className="text-white">better user experiences</b>. As you’ve pushed the boundaries of the web, your tools haven’t caught up to your appetite. <b className="text-white">Remix is ready</b> to serve you from the initial request to the fanciest UX your designers can think up. Check it out 👀
            </p>
          </section>

          <div className="h-60"></div>
          
          <NestedRoutes />
          
          <div className="h-[25vh]"></div>
          
          <LoadingDemo />

          <div className="h-[25vh]"></div>

          <div style={{ minHeight: '150vh' }}>
            <div className="fixed inset-0 overflow-hidden" hidden></div>
            <div aria-hidden="true" className="sm:leading-6xl sticky top-0 flex h-screen w-screen items-center justify-center text-center text-4xl font-black text-white sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl ">
              Say good­bye to Spinnageddon
            </div>
          </div>

          <CodeShowcase />
          
          <div className="h-[25vh]"></div>

          <ErrorHandling />

          <div className="mx-auto max-w-6xl px-6 md:px-12">
            <div className="h-4"></div>
            <a className="inline-flex items-center justify-center xl:text-xl h-14 xl:h-16 box-border px-8 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent font-semibold bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-200 transition-colors duration-200" href="https://remix.run/docs" data-discover="true">
              Go Play!
            </a>
             {/* Added extra space to match footer separation */}
             <div className="h-32"></div>
          </div>

        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;