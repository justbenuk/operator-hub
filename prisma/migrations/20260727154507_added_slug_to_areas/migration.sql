/*
  Warnings:

  - Added the required column `slug` to the `OperatingArea` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "OperatingArea" ADD COLUMN     "slug" TEXT NOT NULL;
