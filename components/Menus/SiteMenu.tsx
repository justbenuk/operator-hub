import Link from "next/link";

export default function SiteMenu() {
  return (
    <nav className="hidden lg:flex flex-row justify-center items-center gap-4">
      <Link href={"/resources"}>Contact Us</Link>
    </nav>
  );
}
