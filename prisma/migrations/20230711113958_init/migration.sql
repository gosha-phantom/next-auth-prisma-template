-- CreateTable
CREATE TABLE `userauth2` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userID` INTEGER NOT NULL,
    `login` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `userauth2` ADD CONSTRAINT `userauth2_userID_fkey` FOREIGN KEY (`userID`) REFERENCES `user`(`ID`) ON DELETE RESTRICT ON UPDATE CASCADE;
