/*
  Warnings:

  - You are about to drop the column `companyId` on the `OperatingArea` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "OperatingArea" DROP CONSTRAINT "OperatingArea_companyId_fkey";

-- DropIndex
DROP INDEX "OperatingArea_companyId_idx";

-- AlterTable
ALTER TABLE "OperatingArea" DROP COLUMN "companyId",
ADD COLUMN     "companyProfileId" TEXT;

-- AddForeignKey
ALTER TABLE "OperatingArea" ADD CONSTRAINT "OperatingArea_companyProfileId_fkey" FOREIGN KEY ("companyProfileId") REFERENCES "CompanyProfile"("id") ON DELETE SET NULL ON UPDATE CASCADE;
