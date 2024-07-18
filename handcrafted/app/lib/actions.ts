'use server';
const { db, sql } = require('@vercel/postgres');
import { z } from 'zod';

const multer = require('multer');

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { NextRequest } from 'next/server';
import { request } from 'https';
const bcrypt = require('bcrypt');
export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    const sing = await signIn('credentials', formData);
    console.log(sing);
  } catch (error) {
    if (error instanceof AuthError) {
      console.log('There is an error', { error });
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        case 'CallbackRouteError':
          return 'Email or Password Incorrects';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}

const userFormData = z.object({
  fname: z
    .string({ invalid_type_error: 'Please Include a name.' })
    .trim()
    .toLowerCase(),
  lname: z.string().trim().toLowerCase(),
  email: z.string().email({ message: 'Invalid email address' }),
  password: z
    .string()
    .min(6, { message: 'Must Contain a minimum of 6 characters' }),
  address: z.string(),
});

const poductsFormData = z.object({
  user_id: z.string(),
  name: z.string().toLowerCase(),
  description: z.string(),
  price: z.coerce.number(), // Corse the price to number because input filed alwasy return string
  image_url: z.object({}),
  /* user_id UUID DEFAULT uuid_generate_v4() NOT NULL,
  name VARCHAR(100) NOT NULL,
  description TEXT,
  price DECIMAL(10, 2) NOT NULL,
  image_url VARCHAR(255),
*/
});
const ProductForm = poductsFormData.omit({ image_url: true });
export type State = {
  errors?: {
    fname?: string[];
    lname?: string[];
    email?: string[];
    password?: any;
    address?: string[];
  };
  message?: string | null;
};

export async function userRegistration(formData: FormData) {
  // Validate the UserformData with the actual form data passed into this function
  const { fname, lname, email, password, address } = userFormData.parse({
    fname: formData.get('fname'),
    lname: formData.get('lname'),
    email: formData.get('email'),
    password: formData.get('password'),
    address: formData.get('address'),
  });

  // Hash the passoword before inserting it into the database.
  const hassPassword = await bcrypt.hash(password, 10);

  try {
    const registerUser =
      await sql`insert into Users(fname, lname, email, password, address) 
          values(${fname}, ${lname}, ${email}, ${hassPassword}, ${address})`;

    return registerUser;
  } catch (error) {
    console.log('An error occured', error);
  }

  // revalidatePath('');
  redirect('/login');
}

// export default async function addProucts(formData: FormData) {
//   console.log(formData );
//   const storage = multer.diskStorage({
//     destination: 'uploads',
//   });
//   multer({ storage: storage }).single('');

//   // const { user_id, name, description, price } = ProductForm.parse({
//   //   user_id: formData.get('user_id'),
//   //   name: formData.get('name'),
//   //   description: formData.get('description'),
//   //   price: formData.get('price'),
//   // });
// }
