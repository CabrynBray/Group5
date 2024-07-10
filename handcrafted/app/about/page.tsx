import Link from "next/link";
import Navbar from "../ui/navbar";

export default function About(){
    return (
        <main className="flex min-h-screen flex-col p-6">

            <div className="nav">
                <Navbar /> 
            </div>

            <div className="abouthero">
                <img className="items-center"
                src="/abouthero.jpg" 
                alt="about-hero"
                width={""}
                height={"100vh"}
                 />
            </div>
        
            <div className='w-full bg-gray'>
                <h2 className='mb-12 text-3xl font-bold'>About Us</h2>

                <div className='flex gap-12'>
                <p>
                    The idea behind Handcrafted Haven began when we decided to go on a trip 
                    to Southeast Asia.  We saw so many people like this woman in the photo above
                    who were hard at work, crafting these amazing items just to make enough money
                    to provide for their families.
                </p>
                <p>
                    We wanted to help, but felt like simply buying these items ourselves wasn't enough.
                    We got back to our hotel that night and brainstormed ideas of how we could truly make
                    a difference in the lives of these amazing people.  That's when Handcrafted Haven was
                    truly born.
                </p>
                <p>
                    We wanted to give these artisans a wider, more global reach to be able to really
                    profit off of their talents and skill.  We wanted to provide them, and all like them around
                    the globe with a platform to share their products while bringing relief to their day-to-day efforts.
                    So take some time, browse, buy, and know that you're making a huge difference with your purchase!
                </p>
                </div>
            </div>
           
        </main>
    );
}