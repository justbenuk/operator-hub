import { Button } from "@/components/ui/button";
import { CarTaxiFrontIcon } from "lucide-react";
import Link from "next/link";

export default function UnauthorisedPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center text-center">
        <CarTaxiFrontIcon className="text-primary size-18 animate-pulse" />
        <h1 className="text-primary text-4xl font-semibold">Woooooowwwwww</h1>
        <p className="text-xl">Your not allowed to be here</p>
        <Button asChild className="mt-6">
          <Link href={'/'}>Go Home</Link>
        </Button>
      </div>
    </div>
  )
}

