CREATE DATABASE cadastro;
\c cadastro;


CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    photo TEXT
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    photo TEXT,
    user_id INT  REFERENCES users(id) ON DELETE CASCADE -- Garantindo que o user_id é obrigatoriamente atribuído
);

INSERT INTO users (name, email, photo) VALUES
     ('Josefina Almeida',' joseAlme@gmail.com', NULL),
    ('João Almeida', 'joao.almeida@email.com', NULL),
    ('Ana Costa', 'ana.costa@email.com', NULL),
    ('Pedro Oliveira', 'pedro.oliveira@email.com', NULL),
    ('Juliana Rocha', 'juliana.rocha@email.com', NULL),
    ('Lucas Martins', 'lucas.martins@email.com', NULL),
    ('Fernanda Lima', 'fernanda.lima@email.com', NULL),
    ('Ricardo Pereira', 'ricardo.pereira@email.com', NULL),
    ('Patrícia Nunes', 'patricia.nunes@email.com', NULL),
    ('Gabriel Souza', 'gabriel.souza@email.com', NULL),
    ('Camila Ribeiro', 'camila.ribeiro@email.com', NULL),
    ('André Santos', 'andre.santos@email.com', NULL),
    ('Larissa Carvalho', 'larissa.carvalho@email.com', NULL),
    ('Rafael Mendes', 'rafael.mendes@email.com', NULL),
    ('Beatriz Silva', 'beatriz.silva@email.com', NULL),
    ('Thiago Costa', 'thiago.costa@email.com', NULL),
    ('Mariana Oliveira', 'mariana.oliveira@email.com', NULL),
    ('Eduardo Rocha', 'eduardo.rocha@email.com', NULL),
    ('Sabrina Martins', 'sabrina.martins@email.com', NULL),
    ('Vinícius Lima', 'vinicius.lima@email.com', NULL),
    ('Isabela Pereira', 'isabela.pereira@email.com', NULL),
    ('Felipe Nunes', 'felipe.nunes@email.com', NULL),
    ('Carolina Souza', 'carolina.souza@email.com', NULL),
    ('Bruno Ribeiro', 'bruno.ribeiro@email.com', NULL),
    ('Vanessa Santos', 'vanessa.santos@email.com', NULL),
    ('Diego Carvalho', 'diego.carvalho@email.com', NULL),
    ('Natália Mendes', 'natalia.mendes@email.com', NULL),
    ('Rodrigo Silva', 'rodrigo.silva@email.com', NULL),
    ('Joana Almeida', 'joana.almeida@email.com', NULL),
    ('Roberto Silva', 'roberto.silva@email.com', NULL),
    ('Clara Santos', 'clara.santos@email.com', NULL),
    ('Miguel Oliveira', 'miguel.oliveira@email.com', NULL),
    ('Sofia Costa', 'sofia.costa@email.com', NULL),
    ('Aline Costa', 'aline.costa@email.com', NULL),
    ('Gustavo Oliveira', 'gustavo.oliveira@email.com', NULL),
    ('Renata Rocha', 'renata.rocha@email.com', NULL),
    ('Leandro Martins', 'leandro.martins@email.com', NULL),
    ('Tatiane Lima', 'tatiane.lima@email.com', NULL),
    ('Marcelo Pereira', 'marcelo.pereira@email.com', NULL),
    ('Paula Nunes', 'paula.nunes@email.com', NULL),
    ('Fábio Souza', 'fabio.souza@email.com', NULL),
    ('Carla Ribeiro', 'carla.ribeiro@email.com', NULL),
    ('Alexandre Santos', 'alexandre.santos@email.com', NULL),
    ('Priscila Carvalho', 'priscila.carvalho@email.com', NULL),
    ('Henrique Mendes', 'henrique.mendes@email.com', NULL),
    ('Letícia Silva', 'leticia.silva@email.com', NULL),
    ('Daniela Costa', 'daniela.costa@email.com', NULL),
    ('Rogério Oliveira', 'rogerio.oliveira@email.com', NULL),
    ('Simone Rocha', 'simone.rocha@email.com', NULL),
    ('Fernando Martins', 'fernando.martins@email.com', NULL),
    ('Cláudia Lima', 'claudia.lima@email.com', NULL),
    ('Márcio Pereira', 'marcio.pereira@email.com', NULL);


INSERT INTO posts (title, content, photo, user_id) VALUES
('Post 1', 'Conteúdo do primeiro post', 'https://example.com/imagem1.jpg', 1),
('Post 2', 'Conteúdo do segundo post', 'https://example.com/imagem2.png', 2),
('Post 3', 'Conteúdo do terceiro post', 'https://example.com/imagem3.jpeg', 3),
('Post 4', 'Conteúdo do quarto post', 'https://example.com/imagem4.gif', 4),
('Post 5', 'Conteúdo do quinto post', 'https://example.com/imagem5.jpg', 1),
('Post 6', 'Conteúdo do sexto post', 'https://example.com/imagem6.png', 2),
('Post 7', 'Conteúdo do sétimo post', 'https://example.com/imagem7.jpeg', 3),
('Post 8', 'Conteúdo do oitavo post', 'https://example.com/imagem8.gif', 4);




ALTER TABLE posts ALTER COLUMN user_id DROP NOT NULL;
