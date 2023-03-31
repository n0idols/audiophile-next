/*
  Warnings:

  - You are about to drop the column `image` on the `Category` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Category" DROP COLUMN "image",
ADD COLUMN     "desktopimg" TEXT,
ADD COLUMN     "mobileimg" TEXT,
ADD COLUMN     "tabletimg" TEXT;

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "mobileimg" TEXT,
ADD COLUMN     "tabletimg" TEXT;
