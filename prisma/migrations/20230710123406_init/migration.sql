-- CreateTable
CREATE TABLE `user` (
    `ID` INTEGER NOT NULL AUTO_INCREMENT,
    `firstName` VARCHAR(191) NOT NULL,
    `lastName` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `userauth` (
    `id` VARCHAR(191) NOT NULL,
    `userID` INTEGER NOT NULL,
    `login` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `userauth` ADD CONSTRAINT `userauth_userID_fkey` FOREIGN KEY (`userID`) REFERENCES `user`(`ID`) ON DELETE RESTRICT ON UPDATE CASCADE;
