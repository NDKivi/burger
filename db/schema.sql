CREATE DATABASE burgers_db;
USE burgers_db;
CREATE TABLE burgers (
	id SERIAL,
    burger_name VARCHAR(255),
    devoured BOOLEAN
);