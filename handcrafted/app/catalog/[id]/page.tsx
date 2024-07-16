import Link from "next/link";
import Image from 'next/image';
import Navbar from "../../ui/navbar";
import Products from "../../lib/placeholder-productData.js";
import '@/app/ui/product-page.css';


export default function Page({ params }: { params: { id: string } }) {
    // Find the product by ID
    const productId = parseInt(params.id);
    const product = Products.find(product => product.id === productId);

    if (!product) {
        return <div>Product not found!</div>;
    }


    return ( <main className="flex min-h-screen flex-col p-6">
            <div className="nav">
                <Navbar />
            </div>

            <div className="product-details">
                <div className="product-image">
                    <Image
                        src={product.imageUrl}
                        alt={product.title}
                        width={400}
                        height={400}
                    />
                </div>
                <div className="product-info">
                    <h1 className="product-title">{product.title}</h1>
                    <p className="product-description">{product.description}</p>
                    <p className="product-price">$ {product.price}</p>
                    <Link href={`/product/${product.seller}`} className="product-link">Seller Profile</Link>
                </div>
            </div>

            <div className="reviews">
                <h2>Product Reviews</h2>
                {/* Review Form */}
                <form>
                    <textarea rows={4} placeholder="Write your review..." />
                    <button type="submit"className="product-link">Submit Review</button>
                </form>

                {/* Reviews List */}
                <div className="review-list">
                    {/* Replace with actual review data if available */}
                    <div className="review">
                        <p><strong>Reviews</strong></p>
                    </div>
                    
                </div>
            </div>
        </main>
    
    );}