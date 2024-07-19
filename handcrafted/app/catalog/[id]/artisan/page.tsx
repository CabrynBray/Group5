'use client';

import { useEffect, useState } from "react";
import Navbar from "@/app/ui/navbar";
import Products from "@/app/lib/placeholder-productData";
import Image from "next/image";


export default function ArtisanPage({ params }: { params: { id: string } }) {
    const id = parseInt(params.id);
    const product = Products.find((product) => product.id === id);

    const [description, setDescription] = useState(product ? product.description : '');

    useEffect(() => {
        if (product) {
            setDescription(product.description);
        }
    }, [product]);

    if (!product) {
        return (
            <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
                <Navbar />
                <div className="flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-6 mb-6 w-full max-w-lg">
                    <h1 className="text-2xl font-semibold text-gray-800">
                        Product Not Found
                    </h1>
                    <p className="mt-4 text-gray-600 text-center">
                        Sorry, the product you are looking for does not exist. Please check the URL or return to the homepage.
                    </p>
                    <a href="/app" className="mt-6 inline-block px-4 py-2 bg-brown-100 text-white rounded-lg shadow hover:bg-blue-600">
                        Go to Homepage
                    </a>
                </div>
            </main>
        );
    }

    const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(e.target.value);
    };

    const saveDescription = () => {
        const productIndex = Products.findIndex((p) => p.id === id);
        if (productIndex !== -1) {
            Products[productIndex].description = description;
            alert('Description updated!');
        }
    };

    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <Navbar />
            <div className="w-full max-w-4xl">
                <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 mb-6">
                    <h1 className="text-2xl font-bold mb-4">{`Artisian ${product.seller}'s Page`}</h1>

                    {product.sellerImg && (
                        <Image
                            src={product.sellerImg}
                            className="rounded-full mb-4"
                            width={200}
                            height={200}
                            alt={`${product.seller}'s picture`}
                        />
                    )}
                    <p className="text-center text-gray-600">This is a dedicated page where artisans can make changes to their items to sell.</p>
                </div>
                <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 mb-6">
                    <h2 className="text-xl font-semibold mb-4">{`Product Name: ${product.title}`}</h2>
                    <div className="flex justify-center mb-4">
                        <Image
                            src={product.imageUrl}
                            alt={`${product.id}`}
                            className="rounded-lg"
                            width={200}
                            height={200}
                        />
                    </div>
                    <div className="w-full">
                        <h3 className="text-lg font-medium mb-2">{`Modify the description for ${product.title}`}</h3>
                        <textarea
                            className="w-full mb-4 p-4 border border-gray-300 rounded-lg"
                            value={description}
                            onChange={handleDescriptionChange}
                        />
                        <button onClick={saveDescription}
                            className="w-full h-10 bg-gray-500 text-white font-medium rounded-lg hover:bg-brown-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brown-100 transition duration-200">Save Description</button>
                    </div>
                </div>
            </div>
        </main>
    )
}