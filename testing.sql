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
