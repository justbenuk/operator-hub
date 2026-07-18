import { cn } from "@/lib/utils";
import { CarTaxiFrontIcon } from "lucide-react";
import Link from "next/link";

interface SiteLogoProps {
  size?: "small" | "medium" | "large";
}

const textSizes = {
  small: "text-md",
  medium: "text-xl",
  large: "text-4xl",
};

const iconSizes = {
  small: "h-5 w-5",
  medium: "h-8 w-8",
  large: "h-10 w-10",
};

export default function SiteLogo({ size = "medium" }: SiteLogoProps) {
  return (
    <Link
      href={"/"}
      className="flex flex-row items-center justify-center gap-2"
    >
      <CarTaxiFrontIcon className={cn("text-primary", iconSizes[size])} />
      <span className={cn("font-semibold", textSizes[size])}>OperatorHub</span>
    </Link>
  );
}
