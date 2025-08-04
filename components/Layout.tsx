import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-mainbg text-black font-display">
      {/* Sidebar (always visible on sm+) */}
      <div className="w-64 shrink-0 hidden sm:block border-r-4 border-black">
        <Sidebar />
      </div>

      {/* Main content area */}
      <div className="flex flex-col flex-grow">
        <Topbar />
        <main className="p-6 overflow-y-auto flex-grow space-y-6">
          {children}
        </main>
      </div>
    </div>
  );
}