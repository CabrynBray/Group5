// import AcmeLogo from '@/app/ui/acme-logo';

import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import Navbar from './ui/navbar';
import Image from 'next/image';
import Slider from './ui/carousel/carousel';

export default function Page() {

  return (

    <main className="flex min-h-screen flex-col p-6">


      <div className="nav">
        <Navbar /> 
      </div>

      <div className="mt-4 flex grow flex-col gap-4 md:flex-row bg-black rounded-lg">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p className={`${styles.title} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            Handcrafted Haven
          </p>
          <p className={`${styles.text} md:text-2xl md:leading-normal`}>
            The go-to destination for those seeking unique, handcrafted treasures.  You can shop and look at all our inventory
            in our catalog.  There you will also find links to get to know the artisans who have created these items!  Your purchase
            here makes a tremendous impact.  From all of the sellers here, thank you and happy shopping!
          </p>
          <p className={`${styles.title} text-xl text-gray-800 md:text-2xl md:leading-normal`}>
            Handcrafted Haven SELLERS
          </p>
          <p className={`${styles.text} md:text-2xl md:leading-normal`}>
            Are you a craftsperson?  Do you have products to sell but wish you had a bigger platform?
            Look no further!  Click on the REGISTER link in the top right corner of our page to create a profile.
            Already have a profile?  Click on the LOGIN link in the top right corner to access your profile.
          </p>
          {/* <Link
            href="/login"
            className={`${styles.banner} flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base`}
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link> */}
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <Image
            src="/hero.jpg"
            width={1000}
            height={760}
            // width={1200}
            // height={960}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <Image
            src="/hero.jpg"
            width={800}
            height={860}
            className="block md:hidden"
            alt="Screenshots of the dashboard project showing mobile version"
          />
        </div>

      </div>


      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <Slider />
      </div>


    </main>
  )
}