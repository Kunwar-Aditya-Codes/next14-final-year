import TypewriterEffect from '@/components/TypewriterEffect';
import { Bodoni_Moda } from 'next/font/google';
import Link from 'next/link';

const bodoni = Bodoni_Moda({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className='flex flex-col  h-screen'>
      <main className='flex flex-grow flex-col items-center md:items-start p-12 max-w-7xl justify-center w-full mx-auto'>
        <h1
          className={`${bodoni.className} text-center text-6xl text-zinc-200 lg:text-[7rem] mb-7 tracking-wide  font-medium`}
        >
          Be My Eyes
        </h1>

        <TypewriterEffect />

        <Link
          href={'/capture'}
          className='w-fit border-2 border-violet-600 text-white backdrop-blur text-lg bg-violet-950/30 hover:scale-105 transition-transform rounded-full  px-8 py-3 uppercase tracking-widest  '
        >
          Login &rarr;
        </Link>
      </main>
      <footer className='text-white space-y-1 bg-white/5 border-t-zinc-700 border-t py-3 backdrop-blur text-center text-sm'>
        <p>&copy; 2024. All rights reserved.</p>
        <p>Kunwar Aditya , Yash Badgujar & Niharika Rindhe.</p>
      </footer>
    </div>
  );
}
