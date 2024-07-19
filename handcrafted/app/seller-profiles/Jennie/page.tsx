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
            <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
                <Image
                        src="/seller-profile/jennie.jpg"
                        width={1200}
                        height={960}
                        className="object-cover hidden md:block"
                        alt="Jennie profile pic desktop version"
                    />
                    <Image
                        src="/seller-profile/jennie.jpg"
                        width={800}
                        height={860}
                        className="object-cover block md:hidden"
                        alt="Jennie profile pic showing mobile version"
                    />
                </div>
            
            <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
            <p className={`${styles.title} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
                    Jennie S.
                    </p>
                    <p className={`${styles.text} md:text-2xl md:leading-normal`}>
                    Hello Everybody! <br />
                    My name is Jennie and my passion is knitting and creating beautiful items like the wooden-bowlss I sell here.  Before my
                    husband died, I was going to school to learn how to make things to sell.  My dream was to open up my own store where I could sell
                    my wares, but the worst happened when my husband passed away from a sudden heart-attack.  We have 3 children who I raise and care
                    for myself.  I did not think my dream would ever come true, but thanks to Handcrafted Haven it has!  Please enjoy my items and 
                    should you buy them, please know that I am so grateful!
                    </p>
            </div>
            </div>
            
            <div className="h-70 grid grid-cols-4 gap-4 content-evenly md:border-black-500 p-4 rounded-lg justify-space">
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
                <Image
                    src="/Products/Knitted-Scarf.jpg"
                    width={800}
                    height={460}
                    className="h-full w-full overflow-hidden"
                    alt="scarf"
                />
                <Image
                    src="/Products/Hand-paintedMug.jpg"
                    width={800}
                    height={460}
                    className="h-full w-full overflow-hidden"
                    alt="mug"
                />
                <Image
                    src="/Products/Wooden-Bowl.jpg"
                    width={800}
                    height={460}
                    className="h-full w-full overflow-hidden"
                    alt="bowl"
                />
               

            </div>
        </main>
    );
}