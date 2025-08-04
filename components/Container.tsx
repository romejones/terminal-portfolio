// components/Container.tsx

import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-topbar text-textPrimary font-display">
      <div className="w-64 shrink-0 hidden sm:block">
        <Sidebar />
      </div>
      <div className="flex flex-col flex-grow border-l-4 border-black">
        <Topbar />
        <main className="p-6 overflow-y-auto flex-grow">{children}</main>
      </div>
    </div>
  );
}
