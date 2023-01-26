CREATE TABLE
    IF NOT EXISTS `salesforce`.`theme` (
        `idtheme` INT NOT NULL AUTO_INCREMENT,
        `nom` VARCHAR(80) NOT NULL,
        PRIMARY KEY (`idtheme`)
    ) ENGINE = InnoDB AUTO_INCREMENT = 9 DEFAULT CHARACTER SET = utf8mb3;