// import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className={`${styles.banner} flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52`}>
        {/* <AcmeLogo /> */}
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p className={`${styles.title} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            Welcome to the Handcrafted Haven Dashboard
          </p>
          <p className={`${styles.text} md:text-2xl md:leading-normal`}>
            You have successfully logged in!!!
          </p> 
          
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
        </div>
      </div>
    </main>
  );
}
