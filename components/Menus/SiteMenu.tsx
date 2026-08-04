import { MENUITEMS } from "@/data/MenuItems";
import Link from "next/link";

export default function SiteMenu() {
  return (
    <nav className="hidden lg:flex flex-row justify-center items-center gap-4">
      {MENUITEMS.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className="font-semibold text-lg"
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}
