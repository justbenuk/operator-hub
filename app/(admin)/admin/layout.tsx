import AdminSidebarHeader from "@/components/Headers/AdminSidebarHeader";
import AdminSidebar from "@/components/Sidbears/Admin/AdminSidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { ReactNode } from "react";

export default function Adminlayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <AdminSidebar />
      <SidebarInset>
        <AdminSidebarHeader />
        {children}
      </SidebarInset>
    </SidebarProvider>
  )
}

