import Link from "next/link"
import SiteMenu from "../Menus/SiteMenu"
import SiteLogo from "../SiteLogo"
import ThemeToggle from "../ThemeToggle"
import { Button } from "../ui/button"
import PageContainer from "../PageContainer"
import { User2Icon } from "lucide-react"

export default function SiteHeader() {
  return (
    <header className="bg-gray-900 text-secondary dark:text-secondary-foreground">
      <PageContainer className="py-4">
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
                className="hidden h-10 border border-primary px-6 sm:inline-flex bg-secondary text-secondary-foreground"
              >
                <Link href="/login">Add Your Business</Link>
              </Button>
              <Button
                asChild
                className="h-10 border-2 border-primary"
              >
                <Link href="/login">
                  <User2Icon />
                  Operator Login
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </PageContainer>
    </header>

  )
}
