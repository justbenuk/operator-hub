"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import slugify from "slugify";
import { z } from "zod";
import { isAdmin } from "../Authentication/AuthicationActions";
import { operatingArea } from "./DirectorySchemas";

export async function AddOperatingAreaAction(
  data: z.infer<typeof operatingArea>,
) {
  const user = await isAdmin();

  try {
    const validated = operatingArea.parse(data);

    await db.$transaction(
      async (tx) => (
        await tx.operatingArea.create({
          data: {
            name: validated.name,
            slug: slugify(validated.name, {
              lower: true,
            }),
          },
        }),
        await tx.activityLog.create({
          data: {
            userId: user.id,
            feature: "COMPANY",
            action: "CREATED",
            description: "Created operating area",
          },
        })
      ),
    );

    revalidatePath("/admin/companies/operating-areas");
    return { success: true };
  } catch (error) {
    throw new Error(`Operating Area: ${error}`);
  }
}
