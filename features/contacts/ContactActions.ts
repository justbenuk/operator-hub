"use server";

import z from "zod";
import { MainContactSchema } from "./ContactSchema";
import { db } from "@/lib/db";

export async function CreateSiteContactAction(
  data: z.infer<typeof MainContactSchema>,
) {
  try {
    const validated = MainContactSchema.parse(data);

    await db.$transaction(
      async (tx) => (
        await tx.siteContact.create({
          data: validated,
        }),
        await tx.activityLog.create({
          data: {
            feature: "OTHER",
            action: "CREATED",
            description: "Main contact form sent",
          },
        })
      ),
    );

    return { success: true };
  } catch (error) {
    throw new Error(`Contact Action: ${error}`);
  }
}
