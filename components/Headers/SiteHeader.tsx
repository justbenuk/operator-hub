import Link from "next/link"
import SiteMenu from "../Menus/SiteMenu"
import SiteLogo from "../SiteLogo"
import ThemeToggle from "../ThemeToggle"
import { Button } from "../ui/button"

export default function SiteHeader() {
  return (
    <header className="container mx-auto px-4 py-4 sm:px-6 2xl:px-0">
      <div className="grid grid-cols-[1fr_auto] items-center lg:grid-cols-[1fr_auto_1fr]">
        <div className="justify-self-start">
          <SiteLogo size="medium" />
        </div>
        <SiteMenu />
        <div className="flex items-center justify-self-end gap-2 sm:gap-3">
          <ThemeToggle />
          <div className="hidden lg:flex items-center gap-2 sm:gap-3">
            <Button
              asChild
              variant="outline"
              className="hidden h-10 border-2 border-primary px-6 sm:inline-flex lg:px-8"
            >
              <Link href="/login">Login</Link>
            </Button>
            <Button
              asChild
              className="h-10 border-2 border-primary px-4 sm:px-6 lg:px-8"
            >
              <Link href="/register">Register</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
