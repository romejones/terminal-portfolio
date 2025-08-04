// components/Sidebar.tsx

import { Home, Calendar, FileText, Layers, List } from "lucide-react";
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="bg-sidebar text-textPrimary w-full sm:w-64 h-screen p-6 border-4 border-black flex flex-col justify-between">
      <div className="space-y-6">
        <div className="text-2xl font-extrabold border-b-4 border-black pb-2">JEDI</div>
        <nav className="flex flex-col space-y-4 text-sm font-mono">
          <SidebarLink href="/" icon={<Home size={16} />}>Home</SidebarLink>
          <SidebarLink href="/cv" icon={<List size={16} />}>CV</SidebarLink>
          <SidebarLink href="/projects" icon={<FileText size={16} />}>Projects</SidebarLink>
          <SidebarLink href="/schedule" icon={<Calendar size={16} />}>Schedule</SidebarLink>
          <SidebarLink href="/misc" icon={<Layers size={16} />}>Misc</SidebarLink>
        </nav>
      </div>
    </aside>
  );
}

function SidebarLink({ href, icon, children }: { href: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="flex items-center gap-2 hover:underline underline-offset-4 hover:text-accent"
    >
      {icon}
      {children}
    </Link>
  );
}