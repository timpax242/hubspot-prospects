import { BanknotesIcon } from '@heroicons/react/24/outline';

export default function Logo() {
  return (
    <div
      className={`flex flex-row items-center leading-none`}
    >
      <BanknotesIcon className="h-12 w-12 mr-3 mr-2 rotate-[15deg] text-white" />
      <p className="text-[44px] text-white">Prospective customers</p>
    </div>
  );
}
