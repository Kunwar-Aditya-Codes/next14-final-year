import Footer from '@/components/Footer';
import { SignIn } from '@clerk/nextjs';

const page = () => {
  return (
    <div className='h-screen flex flex-col'>
      <div className='flex-grow flex items-center justify-center'>
        <SignIn afterSignInUrl={'/capture'} />
      </div>
      <Footer />
    </div>
  );
};
export default page;
