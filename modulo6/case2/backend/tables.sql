-- Active: 1658624429287@@35.226.146.116@3306@silveira-21814745-luiz-azevedo
CREATE TABLE case2_pizzas(
id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(255) NOT NULL,
price FLOAT NOT NULL,
ingredients TEXT NOT NULL
);

CREATE TABLE orders_list_case2(
id INT PRIMARY KEY AUTO_INCREMENT,
items VARCHAR(255) NOT NULL
);

CREATE TABLE orders_details_case2(
id INT PRIMARY KEY AUTO_INCREMENT,
pizza VARCHAR(255) NOT NULL,
quantity INT NOT NULL,
FOREIGN KEY (id) REFERENCES orders_list_case2(id)
);

CREATE TABLE case2_Users(
id VARCHAR(255) PRIMARY KEY NOT NULL,
username VARCHAR(255) NOT NULL,
email VARCHAR(255) NOT NULL UNIQUE,
password VARCHAR(255) NOT NULL
);