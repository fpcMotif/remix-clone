import React from 'react';

interface Testimonial {
  name: string;
  handle: string;
  role: string;
  avatar: string;
  quote: string;
  highlight?: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Jenna Smith",
    handle: "jjenzz",
    role: "Radix UI",
    avatar: "https://remix.run/img/jenna.jpg",
    quote: "I've been waiting for something to encourage progressive enhancement in the React space *forever* and Remix truly is so much more. Proving we don't need to sacrifice React or choose SSG for a lightning fast, accessible UI, and the DX makes it all too easy 🤤",
    highlight: "block" // Special styling for first one
  },
  {
    name: "@jkup",
    handle: "jkup",
    role: "Cloudflare",
    avatar: "https://remix.run/img/jkup.jpg",
    quote: "holy 💩 Remix is good",
  },
  {
    name: "@aweary",
    handle: "aweary",
    role: "Discord, prev React Core",
    avatar: "https://remix.run/img/aweary.jpg",
    quote: "I just rewrote my first Remix app on top of Cloudflare Workers and Supabase and it’s so damn good",
  },
  {
    name: "@TAbrodi",
    handle: "TAbrodi",
    role: "Software Developer",
    avatar: "https://remix.run/img/tiger.jpg",
    quote: "My mind is still blown away with Remix! So easy and elegant 😩. I love how it also focuses on Accessibility (Progressive Enhancement...) 🤯, A few days ago I was like wazzup with remix, we got Next.js and Svelte 😴 ... and now I'm fired up like crazy 😂. This is so good 🤤",
  },
  {
    name: "@sergiodxa",
    handle: "sergiodxa",
    role: "Daffy, prev Vercel",
    avatar: "https://remix.run/img/sergio.jpg",
    quote: "What’s really cool with Remix loaders is that you can do most of your data transformation and calculations there, like check if a list is empty, limit the number of records, only send specific attributes, so your React component just receives the data and renders it, no logic needed",
  }
];

const Testimonials: React.FC = () => {
  return (
    <section>
      <h2 className="sr-only">Testimonials</h2>
      
      {/* Featured Testimonial */}
      <figure className="mx-auto max-w-xl p-6 sm:p-8">
        <div className="flex items-center justify-center gap-4 text-white">
          <div className="flex">
            <div className="h-12 w-12 relative z-10">
              <img src={testimonials[0].avatar} className="rounded-full object-cover w-full h-full" alt="" />
            </div>
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" height="40" width="40" role="presentation" className="relative -left-4 h-12 w-12 text-white">
              <path d="M20 0C8.95599 0 0 8.95599 0 20C0 31.044 8.95599 40 20 40C31.044 40 40 31.044 40 20C40 8.95599 31.044 0 20 0ZM29.1318 15.5939C29.1406 15.7907 29.1449 15.9885 29.1449 16.1871C29.1449 22.2531 24.5276 29.248 16.0837 29.2484C13.4912 29.2484 11.0788 28.4885 9.04724 27.1863C9.40643 27.2287 9.77203 27.2498 10.1422 27.2498C12.2931 27.2498 14.2725 26.5161 15.8438 25.2847C13.8342 25.2475 12.1399 23.9203 11.5552 22.0963C11.835 22.15 12.1228 22.1793 12.4179 22.1793C12.8369 22.1793 13.2428 22.1228 13.6285 22.0175C11.528 21.597 9.94568 19.7406 9.94568 17.5177C9.94568 17.4969 9.94568 17.4783 9.94629 17.4591C10.5649 17.803 11.2723 18.0099 12.0255 18.0331C10.7928 17.2107 9.9826 15.8047 9.9826 14.212C9.9826 13.371 10.21 12.583 10.6042 11.9046C12.868 14.6823 16.2512 16.5091 20.0665 16.701C19.9878 16.3647 19.9472 16.0144 19.9472 15.6543C19.9472 13.1201 22.0032 11.0641 24.5383 11.0641C25.8588 11.0641 27.0514 11.6223 27.8891 12.5146C28.9349 12.3083 29.917 11.9263 30.8041 11.4005C30.4608 12.4719 29.7333 13.371 28.7854 13.9395C29.7141 13.8284 30.5991 13.5822 31.4215 13.2166C30.8072 14.1373 30.0281 14.946 29.1318 15.5939Z" fill="currentColor"></path>
            </svg>
          </div>
          <figcaption>
            <a href="#" className="block text-xl font-extrabold md:text-3xl hover:underline decoration-white">{testimonials[0].name}</a>
            <span className="sr-only">, </span>
            <div className="text-lg uppercase tracking-wider font-semibold text-gray-400">{testimonials[0].role}</div>
          </figcaption>
        </div>
        <div className="h-10"></div>
        <blockquote className="text-center text-lg leading-7 md:text-xl font-medium text-gray-300">
          I've been waiting for something to encourage progressive enhancement in the React space *forever* and Remix truly is so much more. Proving we don't need to sacrifice React or choose SSG for a lightning fast, accessible UI, and the DX makes it all too easy 🤤
        </blockquote>
      </figure>
      
      <div className="h-10"></div>
      
      {/* Horizontal Scroll List */}
      <div className="mx-auto max-w-max">
        <div className="flex gap-6 overflow-x-auto md:pb-4 no-scrollbar px-6">
          {testimonials.slice(1).map((t, i) => (
            <figure key={i} className="w-[80vw] shrink-0 rounded-lg bg-gray-800 p-8 text-white sm:p-10 md:w-[43vw] xl:w-[30rem] hover:bg-gray-750 transition-colors">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12">
                    <img src={t.avatar} className="rounded-full object-cover w-full h-full" alt="" />
                  </div>
                  <figcaption>
                    <a href="#" className="block text-xl font-extrabold md:text-xl hover:underline">{t.name}</a>
                    <div className="text-sm lg:text-base text-gray-400">{t.role}</div>
                  </figcaption>
                </div>
                <svg viewBox="0 0 40 40" fill="currentColor" className="h-6 w-6 text-white opacity-50">
                    <path d="M20 0C8.95599 0 0 8.95599 0 20C0 31.044 8.95599 40 20 40C31.044 40 40 31.044 40 20C40 8.95599 31.044 0 20 0ZM29.1318 15.5939C29.1406 15.7907 29.1449 15.9885 29.1449 16.1871C29.1449 22.2531 24.5276 29.248 16.0837 29.2484C13.4912 29.2484 11.0788 28.4885 9.04724 27.1863C9.40643 27.2287 9.77203 27.2498 10.1422 27.2498C12.2931 27.2498 14.2725 26.5161 15.8438 25.2847C13.8342 25.2475 12.1399 23.9203 11.5552 22.0963C11.835 22.15 12.1228 22.1793 12.4179 22.1793C12.8369 22.1793 13.2428 22.1228 13.6285 22.0175C11.528 21.597 9.94568 19.7406 9.94568 17.5177C9.94568 17.4969 9.94568 17.4783 9.94629 17.4591C10.5649 17.803 11.2723 18.0099 12.0255 18.0331C10.7928 17.2107 9.9826 15.8047 9.9826 14.212C9.9826 13.371 10.21 12.583 10.6042 11.9046C12.868 14.6823 16.2512 16.5091 20.0665 16.701C19.9878 16.3647 19.9472 16.0144 19.9472 15.6543C19.9472 13.1201 22.0032 11.0641 24.5383 11.0641C25.8588 11.0641 27.0514 11.6223 27.8891 12.5146C28.9349 12.3083 29.917 11.9263 30.8041 11.4005C30.4608 12.4719 29.7333 13.371 28.7854 13.9395C29.7141 13.8284 30.5991 13.5822 31.4215 13.2166C30.8072 14.1373 30.0281 14.946 29.1318 15.5939Z" />
                </svg>
              </div>
              <blockquote className="text-sm text-gray-200 xl:text-base leading-relaxed">
                {t.quote}
              </blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;