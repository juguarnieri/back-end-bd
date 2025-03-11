CREATE DATABASE cadastro;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL
);

INSERT INTO users (name, email) VALUES 
    ('Maria Silva', 'maria.silva@email.com'),
    ('Bruna Souza', 'bruna.souza@email.com'),
    ('Carlos Mendes', 'carlos.mendes@email.com'),
    ('Daniel Santos', 'daniel.santos@email.com');
    

