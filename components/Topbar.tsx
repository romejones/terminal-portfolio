import { Search, User } from "lucide-react";

export default function Topbar() {
  return (
    <header className="flex justify-between items-center w-full border-b-4 border-black px-6 py-4 bg-topbar">
      <div className="flex items-center gap-2">
        <button className="border-2 border-black bg-white px-3 py-1 font-mono text-sm hover:bg-black hover:text-white transition-colors">
          ←
        </button>
        <span className="text-lg font-extrabold font-display text-heading">Professional Info</span>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative w-64">
          <input
            type="text"
            placeholder="Find courses, trainers, etc."
            className="w-full border-2 border-black bg-white px-3 py-1 text-sm font-mono focus:outline-none"
          />
          <Search className="absolute right-2 top-1.5 text-black" size={16} />
        </div>
        <div className="w-8 h-8 border-2 border-black rounded-full flex items-center justify-center bg-white">
          <User size={16} className="text-black" />
        </div>
      </div>
    </header>
  );
}
