import Link from "next/link"
import SiteMenu from "../Menus/SiteMenu"
import SiteLogo from "../SiteLogo"
import ThemeToggle from "../ThemeToggle"
import { Button } from "../ui/button"
import PageContainer from "../PageContainer"
import { BadgeCheck, Bell, CreditCard, LayoutDashboardIcon, User2Icon } from "lucide-react"
import { isLoggedIn } from "@/features/Authentication/AuthicationActions"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { AvatarImage, AvatarFallback, Avatar } from "../ui/avatar"

export default async function SiteHeader() {
  const user = await isLoggedIn()

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
            {!user ? (
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
            ) : (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    size="lg"
                    variant={'ghost'}
                  >
                    <Avatar className="h-8 w-8 rounded-lg">
                      <AvatarImage src={user.image as string} alt={user.name} />
                      <AvatarFallback className="rounded-lg">OH</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
                  side='bottom'
                  align="end"
                  sideOffset={4}
                >
                  <DropdownMenuLabel className="p-0 font-normal">
                    <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                      <Avatar className="h-8 w-8 rounded-lg">
                        <AvatarImage src={user.image as string} alt={user.name} />
                        <AvatarFallback className="rounded-lg">OH</AvatarFallback>
                      </Avatar>
                      <div className="grid flex-1 text-left text-sm leading-tight">
                        <span className="truncate font-medium">{user.name}</span>
                        <span className="truncate text-xs">{user.email}</span>
                      </div>
                    </div>
                  </DropdownMenuLabel>
                  {user.role === 'admin' && (
                    <>
                      <DropdownMenuSeparator />
                      <DropdownMenuGroup>
                        <DropdownMenuItem asChild>
                          <Link href={'/admin'}>
                            <LayoutDashboardIcon />
                            Admin
                          </Link>
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                    </>
                  )}
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem asChild>
                      <Link href={'/dashboard'}>
                        <LayoutDashboardIcon />
                        Dashboard
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <BadgeCheck />
                      Account
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <CreditCard />
                      Billing
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Bell />
                      Notifications
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>)}
          </div>
        </div>
      </PageContainer>
    </header>

  )
}
