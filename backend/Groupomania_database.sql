CREATE DATABASE Groupomania;

DROP TABLE IF EXISTS Users;
CREATE TABLE Users (
    id int unsigned NOT NULL AUTO_INCREMENT,
    pseudo varchar(25) NOT NULL UNIQUE,
    name varchar(40) NOT NULL,
    firstname varchar(40) NOT NULL,
    email varchar(40) NOT NULL,
    password varchar(255) DEFAULT NULL,
    admin tinyint NOT NULL DEFAULT '0',
    PRIMARY KEY (id),
    UNIQUE KEY email (email)
)
ENGINE=InnoDB;

DROP TABLE IF EXISTS Posts;
CREATE TABLE Posts (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    user_id INT UNSIGNED NOT NULL,
    title VARCHAR(80) NOT NULL,
    imgURL VARCHAR(160),
    date DATETIME NOT NULL,
    PRIMARY KEY(id),
    CONSTRAINT fk_posts_user_id FOREIGN KEY (user_id) REFERENCES Users (id) ON DELETE CASCADE
)
ENGINE=InnoDB;


DROP TABLE IF EXISTS Comms;
CREATE TABLE Comms (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    user_id INT UNSIGNED NOT NULL,
    post_id INT UNSIGNED NOT NULL,
    date DATETIME NOT NULL,
    content VARCHAR(280) NOT NULL,
    PRIMARY KEY(id),
    CONSTRAINT fk_comms_user_id FOREIGN KEY (user_id) REFERENCES Users (id) ON DELETE CASCADE,
    CONSTRAINT fk_comms_post_id FOREIGN KEY (post_id) REFERENCES Posts (id) ON DELETE CASCADE
)
ENGINE=InnoDB;

INSERT INTO Users VALUES (NULL, 'admin', 'admin', 'admin', 'admin@groupomania', '$2a$10$tAmiATVyS.MzGVa5wwC85uYu704c3naSbAivXCIRawUrshB7JfFhy', 1);
