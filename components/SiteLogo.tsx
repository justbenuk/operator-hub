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

const subSizes = {
  small: "text-xs",
  medium: "text-xs",
  large: "text-md",
};


const iconSizes = {
  small: "h-5 w-5",
  medium: "h-10 w-10",
  large: "h-16 w-16",
};

export default function SiteLogo({ size = "medium" }: SiteLogoProps) {
  return (
    <Link
      href={"/"}
      className="flex flex-row items-center justify-center gap-3"
    >
      <CarTaxiFrontIcon className={cn("text-primary", iconSizes[size])} />
      <div className="flex flex-col justify-center">
        <span className={cn("font-semibold", textSizes[size])}>OperatorHub</span>
        <span className={cn("font-semibold", subSizes[size])}>The Home of Independent UK taxi Companies</span>
      </div>
    </Link>
  );
}
