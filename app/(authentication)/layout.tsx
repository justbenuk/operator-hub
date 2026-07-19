import SiteLogo from "@/components/SiteLogo";
import { ReactNode } from "react";

export default function AuthentticationLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <SiteLogo size="medium" />
        {children}
      </div>
    </div>)
}

