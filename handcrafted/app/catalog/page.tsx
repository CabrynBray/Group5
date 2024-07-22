"use client"

import Link from "next/link";
import Image from 'next/image';
import Navbar from "../ui/navbar";
import '@/app/ui/product-page.css';
import Products from "../lib/placeholder-productData.js";
import { useState } from "react";

interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    imageUrl: string;
    seller: string;
}
    
export default function CatalogPage() {
    const [products, setProducts] = useState<Product[]>(Products);
    const [seller, setSeller] = useState<string>('All');
    const [priceRange, setPriceRange] = useState<string>('All');
  
    const handleSellerChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedSeller = e.target.value;
        setSeller(selectedSeller);
        filterProducts(selectedSeller, priceRange);
    };
  
    const handlePriceRangeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedPriceRange = e.target.value;
        setPriceRange(selectedPriceRange);
        filterProducts(seller, selectedPriceRange);
    };
  
    const filterProducts = (selectedSeller: string, selectedPriceRange: string) => {
        let filteredProducts = Products;
    
        if (selectedSeller !== 'All') {
            filteredProducts = filteredProducts.filter(product => product.seller === selectedSeller);
        }
    
        if (selectedPriceRange !== 'All') {
            filteredProducts = filteredProducts.filter(product => {
                if (selectedPriceRange === 'Under $30') return product.price < 30;
                if (selectedPriceRange === '$30 - $50') return product.price >= 30 && product.price <= 50;
                if (selectedPriceRange === 'Over $50') return product.price > 50;
                return true; // Default filter condition
            });
        }
    
        setProducts(filteredProducts);
    };

    // Extract unique sellers for dropdown options
    const uniqueSellers = [...new Set(Products.map(product => product.seller))];
  
    return (
        <main className="flex min-h-screen flex-col p-6">
            <div className="nav">
                <Navbar /> 
            </div>

            <div className="filters">
                <div className="filter">
                    <label htmlFor="seller">Seller:</label>
                    <select id="seller" value={seller} onChange={handleSellerChange}>
                        <option value="All">All</option>
                        {uniqueSellers.map((seller, index) => (
                            <option key={index} value={seller}>{seller}</option>
                        ))}
                    </select>
                </div>
                <div className="filter">
                    <label htmlFor="priceRange">Price Range:</label>
                    <select id="priceRange" value={priceRange} onChange={handlePriceRangeChange}>
                        <option value="All">All</option>
                        <option value="Under $30">Under $30</option>
                        <option value="$30 - $50">$30 - $50</option>
                        <option value="Over $50">Over $50</option>
                    </select>
                </div>
            </div>

            <div className="products-grid">
                {products.map(product => (
                    <div key={product.id} className="product-card">
                        <img
                            src={product.imageUrl}
                            alt={product.title}
                            width={200}
                            height={200}
                            className="product-image"
                        />
                        <h2 className="product-title">{product.title}</h2>
                        <p className="product-description">{product.description}</p>
                        <p className="product-price">$ {product.price}</p>
                        <Link href={`/catalog/${product.id}`} className="product-link">View Details</Link>
                        <Link href={`/catalog/${product.id}/artisan`} className="product-link">Seller Profile</Link>
                    </div>
                ))}
            </div>
        </main>
    );
}

