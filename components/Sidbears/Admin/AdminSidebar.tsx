import AdminCompanyMenu from "@/components/Menus/AdminCompanyMenu";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { CarTaxiFrontIcon } from "lucide-react";
import Link from "next/link";

export default function AdminSidebar() {
  return (
    <Sidebar variant="inset" collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
            >
              <Link href="/">
                <CarTaxiFrontIcon className='text-primary-forground dark:text-primary' />
                <span className="text-base font-semibold">OperatorHub</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <AdminCompanyMenu />
      </SidebarContent>
      <SidebarFooter>footer</SidebarFooter>
    </Sidebar>
  )
}

