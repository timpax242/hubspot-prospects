import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { lusitana } from "@/app/ui/fonts";
import Logo from "@/app/components/logo";

export default function Page() {
  return (
    <main className="p-6">
      <div className="p-5 py-10 items-end rounded-lg bg-[color:--topbar]">
        {<Logo />}
      </div>
      <div className="mt-6 p-20 py-40 bg-gray-100">
        <p
          className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
        >
          <strong className={`${lusitana.className}`}>
            Welcome to Prospective customers.
          </strong>
        </p>
        <Link href="/prospects" className="button">
          <span>Continue</span> <ArrowRightIcon className="pl-2 ml-2 md:w-6" />
        </Link>
      </div>
    </main>
  );
}
