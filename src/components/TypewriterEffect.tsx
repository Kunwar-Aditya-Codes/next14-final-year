'use client';
import { Alegreya_Sans_SC } from 'next/font/google';
import Typewriter from 'typewriter-effect';

const alegreya = Alegreya_Sans_SC({
  subsets: ['latin'],
  weight: '700',
});

const TypewriterEffect = () => {
  return (
    <div className='text-zinc-300 flex items-center space-x-2 h-[1rem] mt-5 mb-28 text-3xl p-4 text-center md:p-0 md:text-5xl font-medium'>
      <Typewriter
        options={{
          strings: [
            'Vision for old and blind',
            'Image Description',
            'Inbuilt text-to-speech',
          ],
          autoStart: true,
          loop: true,

          deleteSpeed: 50,
          delay: 80,
          cursor: '',
          cursorClassName: 'text-violet-500',
          wrapperClassName: `${alegreya.className} text-violet-500`,
        }}
      />
    </div>
  );
};
export default TypewriterEffect;
