"use client"

import Link from "next/link";
import Image from 'next/image';
import Navbar from "../../ui/navbar";
import Products from "../../lib/placeholder-productData.js";
import { reviews, addReview } from "../../lib/placeholder-reviewData.js";
import '@/app/ui/product-page.css';
import { useState, useEffect } from 'react';


export default function Page({ params }: { params: { id: string } }) {
    // Find the product by ID
    const productId = parseInt(params.id);
    const product = Products.find(product => product.id === productId);

    const [reviewerName, setReviewerName] = useState(""); // State for reviewer's name
    const [reviewText, setReviewText] = useState("");
    const [rating, setRating] = useState(0);

    const handleReviewSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const newReview = {
            product_id: productId,
            reviewer_name: reviewerName, // Use reviewerName state
            review_text: reviewText,
            rating: rating,
            review_date: new Date().toISOString(),
        };
        addReview(newReview);
        setReviewerName(""); // Clear reviewerName state after submission
        setReviewText("");
        setRating(0);
    };
    
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
                    <Link href={`/catalog/${product.id}/artisan`} className="product-link">Seller Profile</Link>
                </div>
            </div>

            <div className="reviews">
                <h2>Product Reviews</h2>
                <form onSubmit={handleReviewSubmit} className="review-form">
                    <input
                        type="text"
                        value={reviewerName}
                        onChange={(e) => setReviewerName(e.target.value)}
                        placeholder="Your Name"
                        className="reviewer-name-input"
                        required
                    />
                    <textarea
                        value={reviewText}
                        onChange={(e) => setReviewText(e.target.value)}
                        rows={4}
                        placeholder="Write your review..."
                        className="review-textarea"
                        required
                    />
                    <input
                        type="number"
                        value={rating}
                        onChange={(e) => setRating(parseInt(e.target.value))}
                        min={0}
                        max={5}
                        step={0.1}
                        placeholder="Rating (0-5)"
                        className="review-rating-input"
                        required
                    />
                    <button type="submit" className="review-submit-button">Submit Review</button>
                </form>

                <div className="review-list">
                    {reviews.filter(review => review.product_id === productId).map((review, index) => (
                        <div key={index} className="review">
                            <p><strong>{review.reviewer_name}</strong> - {review.review_date}</p>
                            <p>Rating: {review.rating}</p>
                            <p>{review.review_text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    
    );}