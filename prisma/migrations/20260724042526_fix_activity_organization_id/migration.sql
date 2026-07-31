/*
  Warnings:

  - You are about to drop the column `organisationId` on the `ActivityLog` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "ActivityLog_organisationId_createdAt_idx";

-- DropIndex
DROP INDEX "ActivityLog_organisationId_feature_idx";

-- DropIndex
DROP INDEX "ActivityLog_organisationId_idx";

-- AlterTable
ALTER TABLE "ActivityLog" DROP COLUMN "organisationId";

-- CreateIndex
CREATE INDEX "ActivityLog_organizationId_idx" ON "ActivityLog"("organizationId");

-- CreateIndex
CREATE INDEX "ActivityLog_organizationId_createdAt_idx" ON "ActivityLog"("organizationId", "createdAt");

-- CreateIndex
CREATE INDEX "ActivityLog_organizationId_feature_idx" ON "ActivityLog"("organizationId", "feature");
