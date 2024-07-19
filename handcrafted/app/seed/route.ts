import bcrypt from 'bcrypt';
import { db } from '@vercel/postgres';
import { reviews } from '../lib/placeholder-reviewData';
import { Products } from '../lib/placeholder-productData';
import { main } from './seed';
const client = await db.connect();

// async function seedReviews() {
//   try {
//     await client.sql`
//       CREATE TABLE IF NOT EXISTS reviews (
//         id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//         product_id INT NOT NULL,
//         reviewer_name VARCHAR(255) NOT NULL,
//         review_text TEXT NOT NULL,
//         rating FLOAT NOT NULL,
//         review_date TIMESTAMP NOT NULL
//       );
//     `;

//     const insertedReviews = await Promise.all(
//       reviews.map(
//         (review) => client.sql`
//         INSERT INTO reviews (id, product_id, reviewer_name, review_text, rating, review_date)
//         VALUES (uuid_generate_v4(), ${review.product_id}, ${review.reviewer_name}, ${review.review_text}, ${review.rating}, ${review.review_date})
//         ON CONFLICT (id) DO NOTHING;
//       `,
//       ),
//     );
//     return insertedReviews;
//   } catch (error) {
//     console.log('Here in an error', error);
//   }
// }

// async function seedProducts() {
//   await client.sql`
//       CREATE TABLE IF NOT EXISTS products (
//         id SERIAL PRIMARY KEY,
//         title VARCHAR(255) NOT NULL,
//         description TEXT NOT NULL,
//         price NUMERIC(10, 2) NOT NULL,
//         imageUrl VARCHAR(255) NOT NULL,
//         seller VARCHAR(255) NOT NULL
//       );
//     `;

//   const insertedProducts = await Promise.all(
//     Products.map(
//       (product) => client.sql`
//         INSERT INTO products (title, description, price, imageUrl, seller)
//         VALUES (${product.title}, ${product.description}, ${product.price}, ${product.imageUrl}, ${product.seller})
//         ON CONFLICT (id) DO NOTHING;
//       `,
//     ),
//   );

//   return insertedProducts;
// }

export async function GET() {
  try {
    await client.sql`BEGIN`;

    await main();
    // await seedReviews(); // Seed reviews table
    // await seedProducts(); // Seed products table
    // Add more seeding functions here if necessary
    await client.sql`COMMIT`;

    return Response.json({ message: 'Database seeded successfully' });
  } catch (error) {
    console.log(error);
    await client.sql`ROLLBACK`;
    return Response.json({ error }, { status: 500 });
  }
}
