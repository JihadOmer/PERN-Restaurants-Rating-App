
-- // create restaurant table in database


create table restaurant(
id BIGSERIAL not null PRIMARY KEY,
name VARCHAR(50) not null,
location VARCHAR(50) not null,
price_range int not null
);

-- insert into restaurant table 

INSERT INTO restaurant(name, location, price_range)
VALUES('Sareeg','Khartoum', 3);


-- // create reviews table 

CREATE TABLE reviews (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    restaurant_id BIGINT NOT NULL REFERENCES restaurant(id),
    name VARCHAR(50) NOT NULL,
    review TEXT NOT NULL,
    rating INT NOT NULL check(
        rating >= 1
        and rating <= 5
    )
);

-- insert into reviews table 

INSERT INTO reviews(restaurant_id, name, review, rating)
VALUES(1, 'jihad', 'so good ',3);





