import { GlobeAltIcon } from '@heroicons/react/24/outline';
import logo from "../../public/hh-logo.png"
import Image from 'next/image';

export default function AcmeLogo() {
  return (

    <Image
      src={logo}
      alt='Handcrated Logo'
      width={80}
      className="hidden md:block" />

  );
}
 