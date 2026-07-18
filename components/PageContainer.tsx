import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function PageContainer({ children, className }: { children: ReactNode, className?: string }) {
  return (
    <div className={cn('container mx-auto px-4 2xl:px-0', className)}>{children}</div>
  )
}

