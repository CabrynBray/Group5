import Link from "next/link";
import Navbar from "@/app/ui/navbar";
import styles from "@/app/ui/home.module.css";
import Image from "next/image";

export default function Seller1(){
    return (
        <main className="flex min-h-screen flex-col p-6">

            <div className="nav">
                <Navbar /> 
            </div>

            <div className="mt-4 flex grow flex-col gap-4 md:flex-row bg-black rounded-lg">
            <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
            <p className={`${styles.title} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
                    Christopher M.
                    </p>
                    <p className={`${styles.text} md:text-2xl md:leading-normal`}>
                    Hello everyone! <br />
                    My name is Christopher and Im a master vase maker and leather maker.  I was lucky to have learned these skills from 
                    my parents.  My mom made vases and my dad created all kinds of amazing things out of leather.  I continue to use my talents
                    to take care of my family.  Each purchase that you make creates a huge impact on my family and I.  I honor and respect your
                    purchase and make sure that you will get amazing quality items.  Thank you so much for supporting me!
                    </p>
            </div>
            
            <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
                <Image
                        src="/seller-profile/christopher.jpg"
                        width={1200}
                        height={960}
                        className="object-cover hidden md:block"
                        alt="Christopher profile pic desktop version"
                    />
                    <Image
                        src="/seller-profile/christopher.jpg"
                        width={800}
                        height={860}
                        className="object-cover block md:hidden"
                        alt="Christopher profile pic showing mobile version"
                    />
                </div>
            </div>
            <div className="h-70 grid grid-cols-3 gap-4 content-evenly md:border-black-500 p-4 rounded-lg justify-space">
                <Image
                    src="/Products/Leather-Wallet.jpg"
                    width={800}
                    height={650}
                    className="h-full w-full overflow-hidden"
                    alt="leather-wallet"
                />
                <Image
                    src="/Products/Handcrafted-Vase.jpg"
                    width={800}
                    height={650}
                    className="h-full w-full overflow-hidden"
                    alt="vase"
                />
                <div className="bg-gray-50 flex items-center justify-center">
                    {/* <button className="">
                        order now
                    </button> */}
                    <Link
                        href="/catalog"
                        className="bg-[#ecae7e] text-white uppercase px-4 py-2 rounded-md content-evenly"
                    >
                        <span>Order Now</span>
                    </Link>
                </div>

            </div>
        </main>
    );
}