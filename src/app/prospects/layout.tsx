import Logout from "@/app/components/logout"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div >
      <Logout />
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}