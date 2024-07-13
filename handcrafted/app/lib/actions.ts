'use server';
const { db } = require('@vercel/postgres');
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
const bcrypt = require('bcrypt');
export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
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

// Not now
