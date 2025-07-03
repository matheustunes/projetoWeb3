CREATE TABLE `user` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `email` VARCHAR(50) NOT NULL UNIQUE, -- Email deve ser único!
  `password` VARCHAR(150) NOT NULL,
  `birth_date` DATE NOT NULL,
  `gender` VARCHAR(30) NOT NULL,
  `active` TINYINT(1) NOT NULL DEFAULT 1, -- Por padrão, usuário ativo
  `creation_date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update_date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `web3_address` VARCHAR(255),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;