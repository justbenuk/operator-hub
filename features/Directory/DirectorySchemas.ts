import { DayOfWeek } from "@prisma/client";
import z from "zod";

export const companySchema = z.object({
  name: z.string().min(2),
  logoUrl: z.string().optional(),
  coverImageUrl: z.string().optional(),
  shortDescription: z.string().max(255),
  fullDescription: z.string(),
  establishedYear: z.coerce.number().optional(),
  vehicleCount: z.coerce.number().optional(),
  address: z.string(),
  phone: z.string(),
  email: z.email(),
  website: z.url().optional().or(z.literal("")),
  isTwentyFourSeven: z.boolean(),
  operatingAreas: z.array(z.string()),
  openingHours: z.array(
    z.object({
      day: z.enum(DayOfWeek),
      openTime: z.string().optional(),
      closeTime: z.string().optional(),
      closed: z.boolean(),
    }),
  ),
});

export const operatingArea = z.object({
  name: z.string().min(1, "You must provide a name"),
});
