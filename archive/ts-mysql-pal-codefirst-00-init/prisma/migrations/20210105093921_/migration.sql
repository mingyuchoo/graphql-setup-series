-- CreateTable
CREATE TABLE `Customer` (
    `customerNumber` INT NOT NULL,
    `customerName` VARCHAR(191) NOT NULL,
    `contactLastName` VARCHAR(191) NOT NULL,
    `contactFirstName` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `addressLine1` VARCHAR(191) NOT NULL,
    `addressLine2` VARCHAR(191),
    `city` VARCHAR(191) NOT NULL,
    `state` VARCHAR(191),
    `postalCode` VARCHAR(191),
    `country` VARCHAR(191) NOT NULL,
    `salesRepEmployeeNumber` INT,
    `creditLimit` DECIMAL(65,30),
INDEX `salesRepEmployeeNumber`(`salesRepEmployeeNumber`),

    PRIMARY KEY (`customerNumber`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Employee` (
    `employeeNumber` INT NOT NULL,
    `lastName` VARCHAR(191) NOT NULL,
    `firstName` VARCHAR(191) NOT NULL,
    `extension` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `officeCode` VARCHAR(191) NOT NULL,
    `reportsTo` INT,
    `jobTitle` VARCHAR(191) NOT NULL,
INDEX `officeCode`(`officeCode`),
INDEX `reportsTo`(`reportsTo`),

    PRIMARY KEY (`employeeNumber`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Office` (
    `officeCode` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `addressLine1` VARCHAR(191) NOT NULL,
    `addressLine2` VARCHAR(191),
    `state` VARCHAR(191),
    `country` VARCHAR(191) NOT NULL,
    `postalCode` VARCHAR(191) NOT NULL,
    `territory` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`officeCode`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `OrderDetail` (
    `orderNumber` INT NOT NULL,
    `productCode` VARCHAR(191) NOT NULL,
    `quantityOrdered` INT NOT NULL,
    `priceEach` DECIMAL(65,30) NOT NULL,
    `orderLineNumber` INT NOT NULL,
INDEX `productCode`(`productCode`),

    PRIMARY KEY (`orderNumber`,`productCode`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Order` (
    `orderNumber` INT NOT NULL,
    `orderDate` DATETIME(3) NOT NULL,
    `requiredDate` DATETIME(3) NOT NULL,
    `shippedDate` DATETIME(3),
    `status` VARCHAR(191) NOT NULL,
    `comments` VARCHAR(191),
    `customerNumber` INT NOT NULL,
INDEX `customerNumber`(`customerNumber`),

    PRIMARY KEY (`orderNumber`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Payment` (
    `customerNumber` INT NOT NULL,
    `checkNumber` VARCHAR(191) NOT NULL,
    `paymentDate` DATETIME(3) NOT NULL,
    `amount` DECIMAL(65,30) NOT NULL,

    PRIMARY KEY (`customerNumber`,`checkNumber`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProductLine` (
    `productLine` VARCHAR(191) NOT NULL,
    `textDescription` VARCHAR(191),
    `htmlDescription` VARCHAR(191),
    `image` VARCHAR(191),

    PRIMARY KEY (`productLine`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Product` (
    `productCode` VARCHAR(191) NOT NULL,
    `productName` VARCHAR(191) NOT NULL,
    `productLine` VARCHAR(191) NOT NULL,
    `productScale` VARCHAR(191) NOT NULL,
    `productVendor` VARCHAR(191) NOT NULL,
    `productDescription` VARCHAR(191) NOT NULL,
    `quantityInStock` INT NOT NULL,
    `buyPrice` DECIMAL(65,30) NOT NULL,
    `MSRP` DECIMAL(65,30) NOT NULL,
INDEX `productLine`(`productLine`),

    PRIMARY KEY (`productCode`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Customer` ADD FOREIGN KEY (`salesRepEmployeeNumber`) REFERENCES `Employee`(`employeeNumber`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Employee` ADD FOREIGN KEY (`officeCode`) REFERENCES `Office`(`officeCode`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Employee` ADD FOREIGN KEY (`reportsTo`) REFERENCES `Employee`(`employeeNumber`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OrderDetail` ADD FOREIGN KEY (`orderNumber`) REFERENCES `Order`(`orderNumber`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OrderDetail` ADD FOREIGN KEY (`productCode`) REFERENCES `Product`(`productCode`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Order` ADD FOREIGN KEY (`customerNumber`) REFERENCES `Customer`(`customerNumber`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Payment` ADD FOREIGN KEY (`customerNumber`) REFERENCES `Customer`(`customerNumber`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Product` ADD FOREIGN KEY (`productLine`) REFERENCES `ProductLine`(`productLine`) ON DELETE CASCADE ON UPDATE CASCADE;
