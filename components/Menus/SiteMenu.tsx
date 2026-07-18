import Link from "next/link"

const MENUITEMS = [
  {
    name: 'About',
    href: '/about'
  },
  {
    name: 'Contact',
    href: '/contact'
  }
]

export default function SiteMenu() {
  return (
    <nav className="hidden lg:flex flex-row justify-center items-center gap-4">
      {MENUITEMS.map((item) => (
        <Link key={item.href} href={item.href} className="text-lg font-semibold">{item.name}</Link>
      ))}
    </nav>
  )
}

