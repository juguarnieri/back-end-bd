const pool = require("../config/database");

const getPosts = async (title) => {
    try {
        let query = `SELECT posts.*, users.name AS users_name 
                     FROM posts 
                     LEFT JOIN users ON posts.user_id = users.id`;

        if (title) {
            query += ` WHERE posts.title ILIKE $1`; 
            const { rows } = await pool.query(query, [`%${title}%`]);
            return rows;
        }

        const { rows } = await pool.query(query);
        return rows;
    } catch (error) {
        console.error("Erro ao buscar posts:", error);
        throw error; 
    }
};

const getPostById = async (id) => {
    try {
        if (!id) {
            throw new Error("ID não fornecido");
        }

        const query = "SELECT * FROM posts WHERE id = $1";
        const { rows } = await pool.query(query, [id]);

        if (rows.length === 0) {
            return null; 
        }

        return rows[0]; 
    } catch (error) {
        console.error("Erro ao buscar post por ID:", error);
        throw error;
    }
};

const createPost = async (title, content, photo, userId) => {
    const query = `
        INSERT INTO posts (title, content, photo, user_id)
        VALUES ($1, $2, $3, $4)
        RETURNING *;
    `;
    const values = [title, content, photo, userId];
    
    const { rows } = await pool.query(query, values);
    return rows[0];
};

const updatePost = async (id, title, content, image) => {
    try {
        if (!id) {
            throw new Error("ID não fornecido");
        }

        if (!title || !content) {
            throw new Error("Os campos 'title' e 'content' são obrigatórios.");
        }

        const query = `
            UPDATE posts 
            SET title = $1, content = $2, photo = $3
            WHERE id = $4
            RETURNING *;
        `;
        const { rows } = await pool.query(query, [title, content, image, id]);

        if (rows.length === 0) {
            return null; 
        }

        return rows[0]; 
    } catch (error) {
        console.error("Erro ao atualizar post:", error);
        throw error;
    }
};

const deletePost = async (id) => {
    try {
        if (!id) {
            throw new Error("ID não fornecido");
        }

        const query = `
            DELETE FROM posts 
            WHERE id = $1
            RETURNING *;
        `;
        const { rows } = await pool.query(query, [id]);

        if (rows.length === 0) {
            return null; 
        }

        return { message: "Post deletado com sucesso." }; 
    } catch (error) {
        console.error("Erro ao deletar post:", error);
        throw error; 
    }
};

module.exports = {
    getPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost,
};
