/*
  Warnings:

  - You are about to drop the `Note` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "country" TEXT,
ALTER COLUMN "city" DROP NOT NULL;

-- DropTable
DROP TABLE "Note";
