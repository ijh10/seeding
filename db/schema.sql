DROP TABLE IF EXISTS employees;
CREATE TABLE IF NOT EXISTS employees (
    id serial PRIMARY KEY NOT NULL, 
    name text NOT NULL, 
    birthday date NOT NULL, 
    salary INTEGER NOT NULL
) 


