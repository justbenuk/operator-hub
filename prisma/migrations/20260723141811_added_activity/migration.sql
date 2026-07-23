-- CreateEnum
CREATE TYPE "ActivityFeature" AS ENUM ('COMPANY', 'BLOG', 'CMS', 'PAGE', 'COMPLAINT', 'LOST_PROPERTY', 'DRIVER', 'VEHICLE', 'DOCUMENT', 'USER', 'SETTINGS', 'AUTH', 'OTHER');

-- CreateEnum
CREATE TYPE "ActivityAction" AS ENUM ('CREATED', 'UPDATED', 'DELETED', 'PUBLISHED', 'UNPUBLISHED', 'ARCHIVED', 'RESTORED', 'ASSIGNED', 'STATUS_CHANGED', 'LOGIN', 'LOGOUT', 'OTHER');

-- CreateTable
CREATE TABLE "ActivityLog" (
    "id" TEXT NOT NULL,
    "organisationId" TEXT,
    "userId" TEXT,
    "feature" "ActivityFeature" NOT NULL,
    "action" "ActivityAction" NOT NULL,
    "description" TEXT NOT NULL,
    "entityType" TEXT,
    "entityId" TEXT,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "organizationId" TEXT NOT NULL,

    CONSTRAINT "ActivityLog_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ActivityLog_organisationId_idx" ON "ActivityLog"("organisationId");

-- CreateIndex
CREATE INDEX "ActivityLog_organisationId_createdAt_idx" ON "ActivityLog"("organisationId", "createdAt");

-- CreateIndex
CREATE INDEX "ActivityLog_organisationId_feature_idx" ON "ActivityLog"("organisationId", "feature");

-- CreateIndex
CREATE INDEX "ActivityLog_userId_idx" ON "ActivityLog"("userId");

-- CreateIndex
CREATE INDEX "ActivityLog_entityType_entityId_idx" ON "ActivityLog"("entityType", "entityId");

-- AddForeignKey
ALTER TABLE "ActivityLog" ADD CONSTRAINT "ActivityLog_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActivityLog" ADD CONSTRAINT "ActivityLog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;
