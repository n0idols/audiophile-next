/*
  Warnings:

  - You are about to drop the `Includes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Includes" DROP CONSTRAINT "Includes_productId_fkey";

-- DropTable
DROP TABLE "Includes";
