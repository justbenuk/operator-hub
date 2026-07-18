import Link from "next/link"



export default function SiteMenu() {
  return (
    <nav className="hidden lg:flex flex-row justify-center items-center gap-4">
      <Link href={'/directory'}>Directory</Link>
      <Link href={'/resources'}>Resources</Link>
      <Link href={'/resources'}>For Operators</Link>
      <Link href={'/resources'}>News & Blog</Link>
      <Link href={'/resources'}>Safty</Link>
      <Link href={'/resources'}>About Us</Link>
    </nav>
  )
}

