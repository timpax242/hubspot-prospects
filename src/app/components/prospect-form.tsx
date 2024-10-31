'use client';

import { useActionState } from 'react';
import { createProspect } from '@/app/lib/actions';
import Link from 'next/link';
import { Button } from './button';

export default function ProspectForm() {

  const [errorMessage, formAction] = useActionState(createProspect, "");

  return (
    <form action={formAction}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">

        <div className="mb-4">
          <label htmlFor="company" className="mb-2 block text-sm font-medium">
            Name of the prospect company
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="company"
                name="company"
                placeholder="Enter company"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="contact_person" className="mb-2 block text-sm font-medium">
            Contact person for the company
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="contact_name"
                name="contact_name"
                placeholder="Enter contact person"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="contact_phone" className="mb-2 block text-sm font-medium">
            Contact person&apos;s phone
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="contact_phone"
                name="contact_phone"
                placeholder="Enter contact phone"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="contact_email" className="mb-2 block text-sm font-medium">
            Contact person&apos;s email
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="contact_email"
                name="contact_email"
                placeholder="Enter contact email"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="sender_email" className="mb-2 block text-sm font-medium">
            Your email
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="sender_email"
                name="sender_email"
                placeholder="Enter your email"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>

        {errorMessage && (
          <div id="error-message" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">
              {errorMessage}
            </p>
          </div>
        )}
      </div>

      <div className="flex justify-end gap-4">
        <Link
          href="/prospects"
          className="button bg-gray-100 text-gray-600 hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button className="button" type="submit">Create customer</Button>
      </div>
    </form>
  )
}