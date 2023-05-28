'use client';
import Balancer from 'react-wrap-balancer';

import { cn } from '@/lib/utils';

export function HeroSection() {

  return (
    <section
      className={cn(
        'flex flex-col items-center justify-center space-y-2',
        'relative h-72 w-full rounded-md px-4 shadow-lg',
        'bg-slate-300 dark:bg-slate-800/50',
      )}
    >

      <h1 className="block w-full text-center text-3xl font-bold text-slate-800 dark:text-rose-50 xs:text-4xl sm:text-5xl">
        <Balancer>
          I try new things out to create my own perspective.
        </Balancer>
      </h1>
      <p className="p-4 text-center text-lg text-slate-800 dark:text-rose-50 xs:text-2xl">
        <Balancer>
          I&apos;m a Founding Engineer @&nbsp;
          <a className='text-accent hover:underline dark:text-accent-dark' href="https://www.oleic.co" target='_blank' rel="noopener noreferrer">Oleic</a>. 
          Seeing the market opportunity in the Hypercasual gaming in 2021 in India. I with my college friends started a remote startup.
        </Balancer>
      </p>
    </section>
  );
}
