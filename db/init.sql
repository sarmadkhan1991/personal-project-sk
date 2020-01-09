


CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(80) NOT NULL,
    hash TEXT NOT NULL,
    first_name VARCHAR(40) NOT NULL,
    last_name VARCHAR(40) NOT NULL
);

CREATE TABLE products (
    product_id SERIAL PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    img_url TEXT NOT NULL,
    price INTEGER NOT NULL,
    category VARCHAR (30)
);

CREATE TABLE shows (
    show_id SERIAL PRIMARY KEY,
    city VARCHAR(40) NOT NULL,
    show_date DATE NOT NULL,
    venue VARCHAR(40) NOT NULL,
    price INTEGER NOT NULL
);