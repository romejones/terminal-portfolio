// components/Topbar.tsx
import { useRouter } from "next/router";
import { Search } from "lucide-react";

export default function Topbar() {
  const router = useRouter();

  // Map routes to friendly Latin titles
  const routeTitles: { [key: string]: string } = {
    "/": "Domum",           // Home
    "/cv": "Curriculum Vitae",
    "/projects": "Proiecta",
    "/schedule": "Calendarium",
    "/misc": "Miscellaneus",
    };

  const currentTitle = routeTitles[router.pathname] || "JEDI Portfolio";

  return (
    <header className="flex justify-between items-center w-full border-b-4 border-black px-6 py-4 bg-mainbg">
      {/* Dynamic Page Title */}
      <div>
        <span className="text-lg font-extrabold font-display">{currentTitle}</span>
      </div>

      {/* Search Box */}
      <div className="relative w-64">
        <input
          type="text"
          placeholder="Find skills, projects, etc."
          className="w-full border-2 border-black bg-white px-3 py-1 text-sm font-mono focus:outline-none"
        />
        <Search className="absolute right-2 top-1.5" size={16} />
      </div>
    </header>
  );
}