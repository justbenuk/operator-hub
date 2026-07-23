import ThemeToggle from "../ThemeToggle";
import { SidebarTrigger } from "../ui/sidebar";

export default function AdminSidebarHeader() {
  return (
    <header className="border-b p-2 flex flex-row items-center justify-between">
      <SidebarTrigger />
      <div>
        <ThemeToggle />
      </div>
    </header>
  )
}

