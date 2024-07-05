import { Metadata } from "next";
import Link from "next/link";
import styles from "@/app/ui/home.module.css";
import Image from "next/image";

export const metadata: Metadata = {
    title: 'Sellers',
};

export default async function Page() {
    return (
        <main className="flex min-h-screen flex-col p-6">
            <div className={`${styles.banner} flex h-20 shrink-0 items-end rounded-lg p-4 md:h-52`}>

            </div>
            <div>
                <Image
                    src="/hh-logo.png"
                    width={1000}
                    height={760}
                    className="hidden md:block"
                    alt="Screenshots of the sellers project showing desktop version"
                />

                <Image
                    src="/hh-logo.png"
                    width={560}
                    height={620}
                    className="block md:hidden"
                    alt="Screenshots of the sellers project showing mobile version"
                />
            </div>

        </main>
    );
}