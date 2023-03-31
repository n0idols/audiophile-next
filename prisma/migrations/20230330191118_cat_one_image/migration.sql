/*
  Warnings:

  - You are about to drop the column `desktopimg` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `mobileimg` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `tabletimg` on the `Category` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Category" DROP COLUMN "desktopimg",
DROP COLUMN "mobileimg",
DROP COLUMN "tabletimg",
ADD COLUMN     "image" TEXT;
