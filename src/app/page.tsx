import Footer from '@/components/Footer';
import TypewriterEffect from '@/components/TypewriterEffect';
import { UserButton } from '@clerk/nextjs';
import { Bodoni_Moda } from 'next/font/google';
import Link from 'next/link';

const bodoni = Bodoni_Moda({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className='flex flex-col  h-screen'>
      <UserButton />
      <main className='flex flex-grow flex-col items-center md:items-start p-12 max-w-[85rem] justify-center w-full mx-auto'>
        <h1
          className={`${bodoni.className} text-center text-6xl text-zinc-200 lg:text-[7rem] mb-7 tracking-wide  font-medium`}
        >
          Visionary AI
        </h1>

        <TypewriterEffect />

        <Link
          href={'/sign-in'}
          className='w-fit border-2 border-violet-600 text-white backdrop-blur text-lg bg-violet-950/30 hover:scale-105 transition-transform rounded-full  px-8 py-3 uppercase tracking-widest  '
        >
          Login &rarr;
        </Link>
      </main>
      <Footer />
    </div>
  );
}
