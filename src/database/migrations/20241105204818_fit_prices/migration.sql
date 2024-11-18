/*
  Warnings:

  - You are about to drop the column `price` on the `fits` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "fits" DROP COLUMN "price",
ADD COLUMN     "currentPrice" INTEGER,
ADD COLUMN     "originalPrice" INTEGER;
