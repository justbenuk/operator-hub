"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { companySchema } from "../DirectorySchemas";

export default function AddDirectoryForm() {
  const form = useForm({
    resolver: zodResolver(companySchema),
    defaultValues: {
      name: "",
      logoUrl: "",
      coverImageUrl: "",
      shortDescription: "",
      fullDescription: "",
      establishedYear: 0,
      vehicleCount: 0,
      address: "",
      phone: "",
      email: "",
      website: "",
      isTwentyFourSeven: false,
      operatingAreas: [],
      openingHours: [],
    },
  });
  return <form>add form</form>;
}
