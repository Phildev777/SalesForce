CREATE TABLE
    `archive` (
        `idee_ididee` int NOT NULL,
        KEY `fk_idee1_idx` (`idee_ididee`),
        CONSTRAINT `fk_idee1` FOREIGN KEY (`idee_ididee`) REFERENCES `idee` (`ididee`)
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb3;