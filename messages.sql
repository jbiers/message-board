CREATE TABLE IF NOT EXISTS messages (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    messageText VARCHAR(1000) NOT NULL,
    username VARCHAR(100) NOT NULL,
    creationDate VARCHAR(100) NOT NULL
);

INSERT INTO messages (
    messageText,
    username,
    creationDate) 
VALUES (
    "This is our first message",
    "Mary",
    "2022-07-14T17:32:34.883Z"
);
