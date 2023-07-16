CREATE TABLE reviews (
    id INT BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    review TEXT NOT NULL,
    rating INT NOT NULL check (rating >= 1 and rating <= 5),
);