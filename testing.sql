-- Versi DBMS
SELECT VERSION();

-- Vendor
SELECT @@version_comment;

-- Engine
SHOW ENGINES;

-- Character set
SHOW VARIABLES LIKE 'character_set_server';
-- Collation
SHOW VARIABLES LIKE 'collation_server';

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    total DECIMAL(10,2),
    status VARCHAR(20) DEFAULT 'pending'
);

SELECT u.username, COUNT(o.id) as order_count
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
GROUP BY u.username;
