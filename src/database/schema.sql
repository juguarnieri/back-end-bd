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
    

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    image VARCHAR(500), 
    user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE
);

INSERT INTO posts (title, content, image, user_id) VALUES
('Post 1', 'Conteúdo do primeiro post', 'https://example.com/imagem1.jpg', 1),
('Post 2', 'Conteúdo do segundo post', 'https://example.com/imagem2.png', 2),
('Post 3', 'Conteúdo do terceiro post', 'https://example.com/imagem3.jpeg', 3),
('Post 4', 'Conteúdo do quarto post', 'https://example.com/imagem4.gif', 4),
('Post 5', 'Conteúdo do quinto post', 'https://example.com/imagem5.jpg', 1),
('Post 6', 'Conteúdo do sexto post', 'https://example.com/imagem6.png', 2),
('Post 7', 'Conteúdo do sétimo post', 'https://example.com/imagem7.jpeg', 3),
('Post 8', 'Conteúdo do oitavo post', 'https://example.com/imagem8.gif', 4);