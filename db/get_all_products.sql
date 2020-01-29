-- SELECT * FROM products;

SELECT * FROM products p
JOIN inventory i ON p.product_id = i.product_id;