import Link from 'next/link';
import Image from 'next/image';
import '@/app/ui/product-page.css';

export default function ProductPage() {
  const products = [
    {
      id: 1,
      title: 'Handcrafted Vase',
      description: 'A beautiful handcrafted vase made from high-quality ceramic.',
      price: '$45.00',
      imageUrl: '/placeholder-vase.png'
    },
    {
      id: 2,
      title: 'Wooden Bowl',
      description: 'A stunning wooden bowl perfect for serving or decoration.',
      price: '$30.00',
      imageUrl: '/placeholder-bowl.png'
    },
    {
      id: 3,
      title: 'Knitted Scarf',
      description: 'A cozy knitted scarf to keep you warm during winter.',
      price: '$25.00',
      imageUrl: '/placeholder-scarf.png'
    },
    {
      id: 4,
      title: 'Leather Wallet',
      description: 'A stylish and durable leather wallet for everyday use.',
      price: '$60.00',
      imageUrl: '/placeholder-wallet.png'
    },
    {
      id: 5,
      title: 'Hand-painted Mug',
      description: 'A unique hand-painted mug to enjoy your favorite beverages.',
      price: '$20.00',
      imageUrl: '/placeholder-mug.png'
    },
  ];

  return (
    <main className="product-page">
      <header className="header">
        <h1 className="header-title">Universal Header still needs to be added</h1>
      </header>
      <div className="products-grid">
        {products.map(product => (
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
            <Link href={`/product/${product.id}`} className="product-link">View Details</Link>
          </div>
        ))}
      </div>
    </main>
  );
}
