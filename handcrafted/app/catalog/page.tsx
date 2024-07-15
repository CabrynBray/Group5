import Link from "next/link";
import Image from 'next/image';
import Navbar from "../ui/navbar";
import '@/app/ui/product-page.css';
import Products from "../lib/placeholder-productData.js";

    
export default function CatalogPage() {

    return (
        <main className="flex min-h-screen flex-col p-6">
            <div className="nav">
                <Navbar /> 
            </div>

            <div className="products-grid">
                {Products.map(product => (
                    <div key={product.id} className="product-card">
                        <Image
                            src={product.imageUrl}
                            alt={product.title}
                            width={200}
                            height={200}
                            className="product-image"
                        />
                        <h2 className="product-title">{product.title}</h2>
                        <p className="product-description">{product.description}</p>
                        <p className="product-price">{product.price}</p>
                        <Link href={`/catalog/${product.id}`} className="product-link">View Details</Link>
                        <Link href={`/product/${product.seller}`} className="product-link">Seller Profile</Link>
                    </div>
                ))}
            </div>
        </main>
    );
}

