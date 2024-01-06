/*
  Warnings:

  - You are about to alter the column `postId` on the `Comment` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `Comment` MODIFY `postId` INTEGER NOT NULL;
