"use server";

import { db } from "@/lib/db";
import type { ActivityAction, ActivityFeature, Prisma } from "@prisma/client";

type AddLogItemInput = {
  organizationId?: string | null;
  userId?: string | null;
  feature: ActivityFeature;
  action: ActivityAction;
  description: string;
  entityType?: string | null;
  entityId?: string | null;
  metadata?: Prisma.InputJsonValue;
};

export async function AddLogItem({
  organizationId,
  userId,
  feature,
  action,
  description,
  entityType,
  entityId,
  metadata,
}: AddLogItemInput) {
  try {
    await db.activityLog.create({
      data: {
        organizationId,
        userId,
        feature,
        action,
        description,
        entityId,
        entityType,
        metadata,
      },
    });
  } catch (error) {
    throw new Error(`Activity Log: ${error}`);
  }
}
