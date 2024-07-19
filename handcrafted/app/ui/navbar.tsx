// components/Footer.js
import React from 'react';
import styles from '../ui/home.module.css'
import Link from 'next/link';
import AcmeLogo from './acme-logo';



export default function Navbar() {
    return (
        <nav className="w-full h-20 lg:h-28 border-b-[1px] border-gray-500 rounded-lg text-black lg:text-brown bg-slate-300">

            <div className="nav-start maz-w-screen-2xl h-full mx-auto px-4 flex items-center justify-between">
                <AcmeLogo />
            

                <div className="nav-middle mx-auto px-4">
                    <ul className='lg:inline-flex items-center gap-8 uppercase text-m font-semibold'>
                        <li><Link href="/" className="text-brown hover:text-gray-400">Home |</Link></li>
                        <li><Link href="/about" className="text-brown hover:text-gray-400">About |</Link></li>
                        <li><Link href="/catalog" className="text-brown hover:text-gray-400">Catalog |</Link></li>
                    </ul>
                </div>

                {/* <div className='nav-end lg:inline-flex gap-8 items-center'> */}
                <div className="nav-end lg:inline-flex gap-8 items-center">
                    <ul className='lg:inline-flex items-center gap-8 uppercase text-m font-semibold'>
                    <li><div className='relative'>
                        <img 
                        src="/shopping_cart_checkout.png" 
                        height={25}
                        width={25}
                        alt="cart" />
                        <span className='w-4 h-4 bg-yellow-600 text-white rounded-full absolute left-0 -bottom-2 text-xs flex items-center justify-center'>
                            0
                        </span>
                    </div></li>
                    <li><Link 
                        href={"/login"}>LOGIN |
                        {/* className='{`${styles.banner} flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base`}' */}
                    </Link></li>
                    <li><Link 
                        href={"/register"}>REGISTER |
                        {/* className='{`${styles.banner} flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium-semibold text-white  transition-colors hover:bg-blue-400 md:text-base`}' */}
                    </Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};


