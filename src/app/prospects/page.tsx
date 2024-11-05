import { Metadata } from "next";
import { lusitana } from "@/app/ui/fonts";
import Link from "next/link";
import ProspectTable from "@/app/components/prospect-table";
import { Suspense } from "react";
import { ProspectsTableSkeleton } from "@/app/ui/skeletons";

export const metadata: Metadata = {
  title: "Prospective customers",
};

export default async function Page() {
  return (
    <main>
      <div className="flex items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>
          Prospective customers
        </h1>
      </div>
      <Suspense fallback={<ProspectsTableSkeleton />}>
        <ProspectTable />
      </Suspense>
      <Link className="button" href="/prospects/add">
        Add new prospect
      </Link>
    </main>
  );
}
