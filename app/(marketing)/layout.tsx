import SiteHeader from "@/components/Headers/SiteHeader";
import { ReactNode } from "react";

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <SiteHeader />
      {children}
      <footer>footer</footer>
    </div>
  )
}

