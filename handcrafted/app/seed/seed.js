import { table } from 'console';

const { db } = require('@vercel/postgres');
const bcrypt = require('bcrypt');

async function createUsers(client) {
  try {
   
    await client.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);

    // Create the "users" table if it doesn't exist
    const createTable = await client.query(`
      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        fname VARCHAR(255) NOT NULL,
        lname VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        address TEXT NOT NULL
      );
    `);

    console.log(`Created "users" table`);
    return { createUsers };
    // Insert data into the "users" table
    // const insertedUsers = await Promise.all(
    //   users.map(async (user) => {
    //     const hashedPassword = await bcrypt.hash(user.password, 10);
    //     return client.sql`
    //     INSERT INTO users (id, name, email, password)
    //     VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
    //     ON CONFLICT (id) DO NOTHING;
    //   `;
    //   }),
    // );

    // console.log(`Seeded ${insertedUsers.length} users`);
  } catch (error) {
    console.error('Error seeding users:', error);
    throw error;
  }
}
async function userStories(client) {
  try {
    await client.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
    const createTable = await client.query(`
        CREATE TABLE IF NOT EXISTS stories (
          id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
          user_id UUID DEFAULT uuid_generate_v4() NOT NULL,
          story text,
         FOREIGN KEY(user_id) REFERENCES users(id)
        );
      `);
    console.log('User Story table created');
  } catch (error) {
    console.log('Error seeding Stories', error);
  }
}

async function seedProduct(client) {
  try {
    // Ensure the uuid-ossp extension is enabled
    await client.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);

    // Create the "products" table if it doesn't exist
    const createTable = await client.query(`
      CREATE TABLE IF NOT EXISTS products (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        user_id UUID DEFAULT uuid_generate_v4() NOT NULL,
        name VARCHAR(100) NOT NULL,
        description TEXT,
        price DECIMAL(10, 2) NOT NULL,
        image_url VARCHAR(255),
        FOREIGN KEY (user_id) REFERENCES users(id)
      );
    `);
    console.log('Products table created or already exists.');

    return {
      createTable,
    };
  } catch (err) {
    console.error('Error creating products table:', err);
  }
}

export async function seedReview(client) {
  try {
    await client.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);

    // Create the "products" table if it doesn't exist
    const createTable = await client.query(`
     CREATE TABLE IF NOT EXISTS  ratings (
     id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
     user_id  UUID DEFAULT uuid_generate_v4() NOT NULL,
     product_id UUID DEFAULT uuid_generate_v4() NOT NULL,
     rating INTEGER CHECK (rating >= 1 AND rating <= 5),
     review TEXT,
     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
     FOREIGN KEY (user_id) REFERENCES users(id),
     FOREIGN KEY (product_id) REFERENCES products(id)
  );
    `);
    console.log('Review table created or already exists.');
    return {
      createTable,
    };
  } catch (err) {
    console.error('Error creating reviews table:', err);
  }
}

export async function main() {
  const client = await db.connect();
  await createUsers(client);
  await userStories(client);
  await seedProduct(client);
  await seedReview(client);

  await client.end();
}

export default main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
