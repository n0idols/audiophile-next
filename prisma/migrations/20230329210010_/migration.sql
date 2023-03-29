/*
  Warnings:

  - You are about to drop the column `imageId` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the `Gallery` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Image` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Gallery" DROP CONSTRAINT "Gallery_productId_fkey";

-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_galleryId_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_imageId_fkey";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "imageId",
ADD COLUMN     "gallery" TEXT[],
ADD COLUMN     "image" TEXT;

-- DropTable
DROP TABLE "Gallery";

-- DropTable
DROP TABLE "Image";
