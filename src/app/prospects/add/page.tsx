import { lusitana } from '@/app/ui/fonts';
import CustomerForm from "@/app/components/customer-form";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Add a prospect',
};

export default function Home() {
  return (
    <main>
      <div className="flex mb-4 items-center justify-between">
      <h1 className={`${lusitana.className} text-2xl`}>Add new prospect</h1>
      </div>
      <CustomerForm />
    </main>
  );
}