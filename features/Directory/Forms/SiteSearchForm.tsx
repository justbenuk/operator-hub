import { Button } from "@/components/ui/button";
import { FieldContent, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

export default function SiteSearchForm() {
  return (
    <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center justify-center">
      <div>
        <FieldLabel>Where are you looking</FieldLabel>
        <FieldContent>
          <Input placeholder="Enter Town, city or postcode" className="focus-none ring-none border-primary" />
        </FieldContent>
      </div>
      <div>
        <FieldLabel>Service Type</FieldLabel>
        <FieldContent>
          <Input placeholder="All Services" className="focus-none ring-none border-primary" />
        </FieldContent>
      </div>
      <div>
        <FieldLabel>When</FieldLabel>
        <FieldContent>
          <Input placeholder="Anytime" className="focus-none ring-none border-primary" />
        </FieldContent>
      </div>
      <Button className="mt-4 border-primary">
        <SearchIcon />
        <span>Search</span>
      </Button>
    </form>
  )
}

