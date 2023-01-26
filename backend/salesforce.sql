-- -----------------------------------------------------

-- Schema salesforce

-- -----------------------------------------------------

-- -----------------------------------------------------

-- Schema salesforce

-- -----------------------------------------------------

CREATE SCHEMA IF NOT EXISTS `salesforce` DEFAULT CHARACTER SET utf8 ;

USE `salesforce` ;

-- -----------------------------------------------------

-- Table `salesforce`.`service`

-- -----------------------------------------------------

CREATE TABLE
    IF NOT EXISTS `salesforce`.`service` (
        `idservice` INT NOT NULL AUTO_INCREMENT,
        `nom` VARCHAR(80) NOT NULL,
        `nbemploye` INT NOT NULL,
        `localisation` VARCHAR(80) NOT NULL,
        PRIMARY KEY (`idservice`)
    );

-- -----------------------------------------------------

-- Table `salesforce`.`fonction`

-- -----------------------------------------------------

CREATE TABLE
    IF NOT EXISTS `salesforce`.`fonction` (
        `idfonction` INT NOT NULL AUTO_INCREMENT,
        `nom` VARCHAR(80) NOT NULL,
        PRIMARY KEY (`idfonction`)
    );

-- -----------------------------------------------------

-- Table `salesforce`.`utilisateur`

-- -----------------------------------------------------

CREATE TABLE
    IF NOT EXISTS `salesforce`.`utilisateur` (
        `idutilisateur` INT NOT NULL AUTO_INCREMENT,
        `nom` VARCHAR(80) NOT NULL,
        `prenom` VARCHAR(80) NOT NULL,
        `dateembauche` DATE NOT NULL,
        `motdepasse` VARCHAR(45) NOT NULL,
        `admin` TINYINT NOT NULL,
        `anniversaire` DATE NOT NULL,
        `service_idservice` INT NOT NULL,
        `fonction_idfonction` INT NOT NULL,
        PRIMARY KEY (`idutilisateur`),
        INDEX `fk_utilisateur_service1_idx` (`service_idservice` ASC) VISIBLE,
        INDEX `fk_utilisateur_fonction1_idx` (`fonction_idfonction` ASC) VISIBLE,
        CONSTRAINT `fk_utilisateur_service1` FOREIGN KEY (`service_idservice`) REFERENCES `salesforce`.`service` (`idservice`) ON DELETE NO ACTION ON UPDATE NO ACTION,
        CONSTRAINT `fk_utilisateur_fonction1` FOREIGN KEY (`fonction_idfonction`) REFERENCES `salesforce`.`fonction` (`idfonction`) ON DELETE NO ACTION ON UPDATE NO ACTION
    );

-- -----------------------------------------------------

-- Table `salesforce`.`idee`

-- -----------------------------------------------------

CREATE TABLE
    IF NOT EXISTS `salesforce`.`idee` (
        `ididee` INT NOT NULL AUTO_INCREMENT,
        `date` DATETIME NOT NULL,
        `theme` VARCHAR(80) NOT NULL,
        `titre` VARCHAR(80) NOT NULL,
        `description` TEXT(500) NOT NULL,
        `ressource` LONGBLOB NULL,
        `archive` TINYINT NOT NULL,
        `utilisateur_idutilisateur` INT NOT NULL,
        `service_idservice` INT NOT NULL,
        PRIMARY KEY (`ididee`),
        INDEX `fk_idee_utilisateur1_idx` (
            `utilisateur_idutilisateur` ASC
        ) VISIBLE,
        INDEX `fk_idee_service1_idx` (`service_idservice` ASC) VISIBLE,
        CONSTRAINT `fk_idee_utilisateur1` FOREIGN KEY (`utilisateur_idutilisateur`) REFERENCES `salesforce`.`utilisateur` (`idutilisateur`) ON DELETE NO ACTION ON UPDATE NO ACTION,
        CONSTRAINT `fk_idee_service1` FOREIGN KEY (`service_idservice`) REFERENCES `salesforce`.`service` (`idservice`) ON DELETE NO ACTION ON UPDATE NO ACTION
    );

-- -----------------------------------------------------

-- Table `salesforce`.`favoris`

-- -----------------------------------------------------

CREATE TABLE
    IF NOT EXISTS `salesforce`.`favoris` (
        `idee_ididee` INT NOT NULL,
        `utilisateur_idutilisateur` INT NOT NULL,
        INDEX `fk_favoris_idee_idx` (`idee_ididee` ASC) VISIBLE,
        INDEX `fk_favoris_utilisateur1_idx` (
            `utilisateur_idutilisateur` ASC
        ) VISIBLE,
        CONSTRAINT `fk_favoris_idee` FOREIGN KEY (`idee_ididee`) REFERENCES `salesforce`.`idee` (`ididee`) ON DELETE NO ACTION ON UPDATE NO ACTION,
        CONSTRAINT `fk_favoris_utilisateur1` FOREIGN KEY (`utilisateur_idutilisateur`) REFERENCES `salesforce`.`utilisateur` (`idutilisateur`) ON DELETE NO ACTION ON UPDATE NO ACTION
    );

-- -----------------------------------------------------

-- Table `salesforce`.`likes`

-- -----------------------------------------------------

CREATE TABLE
    IF NOT EXISTS `salesforce`.`likes` (
        `utilisateur_idutilisateur` INT NOT NULL,
        `idee_ididee` INT NOT NULL,
        INDEX `fk_likes_utilisateur1_idx` (
            `utilisateur_idutilisateur` ASC
        ) VISIBLE,
        INDEX `fk_likes_idee1_idx` (`idee_ididee` ASC) VISIBLE,
        CONSTRAINT `fk_likes_utilisateur1` FOREIGN KEY (`utilisateur_idutilisateur`) REFERENCES `salesforce`.`utilisateur` (`idutilisateur`) ON DELETE NO ACTION ON UPDATE NO ACTION,
        CONSTRAINT `fk_likes_idee1` FOREIGN KEY (`idee_ididee`) REFERENCES `salesforce`.`idee` (`ididee`) ON DELETE NO ACTION ON UPDATE NO ACTION
    );

-- -----------------------------------------------------

-- Table `salesforce`.`commentaire`

-- -----------------------------------------------------

CREATE TABLE
    IF NOT EXISTS `salesforce`.`commentaire` (
        `idcommentaire` INT NOT NULL AUTO_INCREMENT,
        `detail` TEXT(500) NOT NULL,
        `date` DATETIME NOT NULL,
        `utilisateur_idutilisateur` INT NOT NULL,
        `idee_ididee` INT NOT NULL,
        PRIMARY KEY (`idcommentaire`),
        INDEX `fk_commentaire_utilisateur1_idx` (
            `utilisateur_idutilisateur` ASC
        ) VISIBLE,
        INDEX `fk_commentaire_idee1_idx` (`idee_ididee` ASC) VISIBLE,
        CONSTRAINT `fk_commentaire_utilisateur1` FOREIGN KEY (`utilisateur_idutilisateur`) REFERENCES `salesforce`.`utilisateur` (`idutilisateur`) ON DELETE NO ACTION ON UPDATE NO ACTION,
        CONSTRAINT `fk_commentaire_idee1` FOREIGN KEY (`idee_ididee`) REFERENCES `salesforce`.`idee` (`ididee`) ON DELETE NO ACTION ON UPDATE NO ACTION
    );

-- -----------------------------------------------------

-- Table `salesforce`.`like_com`

-- -----------------------------------------------------

CREATE TABLE
    IF NOT EXISTS `salesforce`.`like_com` (
        `commentaire_idcommentaire` INT NOT NULL,
        `utilisateur_idutilisateur` INT NOT NULL,
        INDEX `fk_like_com_commentaire1_idx` (
            `commentaire_idcommentaire` ASC
        ) VISIBLE,
        INDEX `fk_like_com_utilisateur1_idx` (
            `utilisateur_idutilisateur` ASC
        ) VISIBLE,
        CONSTRAINT `fk_like_com_commentaire1` FOREIGN KEY (`commentaire_idcommentaire`) REFERENCES `salesforce`.`commentaire` (`idcommentaire`) ON DELETE NO ACTION ON UPDATE NO ACTION,
        CONSTRAINT `fk_like_com_utilisateur1` FOREIGN KEY (`utilisateur_idutilisateur`) REFERENCES `salesforce`.`utilisateur` (`idutilisateur`) ON DELETE NO ACTION ON UPDATE NO ACTION
    );