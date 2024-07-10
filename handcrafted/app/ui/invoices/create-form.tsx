import { CustomerField } from '@/app/lib/definitions';
import Link from 'next/link';
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { userRegistration } from '@/app/lib/actions';
export default function Form() {
  return (
    <form action={userRegistration}>
      <label htmlFor='fname'>Firstname
        <input name='fname'></input>

      </label>
      <label htmlFor='lname'>Lastname
        <input name='lname'></input>

      </label>
      <label htmlFor='email'>Email
        <input name='email'></input>

      </label>
      <label htmlFor='password'>Password
        <input name='password'></input>

      </label>
      <label htmlFor='address'>Address
        <input name='address'></input>

      </label>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/invoices"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Create Invoice</Button>
      </div>
    </form>
  );
}
