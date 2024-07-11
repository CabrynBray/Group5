'use server';
 
import { signIn } from '@//auth';
import { createUser } from '@//auth';
import { AuthError } from 'next-auth';

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

  export async function register(
    prevState: string | undefined,
    formData: FormData,
  ) {
    const firstName = formData.get('fname') as string;
    const lastName = formData.get('lname') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const address = formData.get('address') as string;
  
    try {
      await createUser(firstName, lastName, email, password, address);
      return { success: true };
    } catch (error) {
      if (error instanceof AuthError) {
        switch (error.type) {
          case 'UserAlreadyExists':
            return 'User already exists.';
          case 'InvalidEmail':
            return 'Invalid email address.';
          default:
            return 'Something went wrong.';
        }
      }
      throw error;
    }
  }