import { Metadata } from 'next';
import { lusitana } from '@/app/ui/fonts';
import Link from 'next/link';
import CustomerTable from '@/app/components/customer-table';

export const metadata: Metadata = {
  title: 'Prospective customers',
};

export default async function Page() {
  return (
    <main>
      <div className="flex items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Prospective customers</h1>
      </div>
      <CustomerTable  />
      <Link className="button" href="/prospects/add">Add new prospect</Link>
    </main>
  );
}
