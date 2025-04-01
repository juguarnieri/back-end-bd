const pool = require("../config/database");

const getAllPosts = async () => {
    const result = await pool.query("SELECT * FROM posts");
    return result.rows;
};

const getPostById = async (id) => {
    const result = await pool.query("SELECT * FROM posts WHERE id = $1", [id]);
    return result.rows[0];
};

const getPostsByUserId = async (userId) => {
    const result = await pool.query("SELECT * FROM posts WHERE user_id = $1", [userId]);
    return result.rows;
};

const createPost = async (title, content, image, userId) => {
    const result = await pool.query(
        "INSERT INTO posts (title, content, image, user_id) VALUES ($1, $2, $3, $4) RETURNING *",
        [title, content, image, userId]
    );
    return result.rows[0];
};

const updatePost = async (id, title, content, image) => {
    const result = await pool.query(
        "UPDATE posts SET title = $1, content = $2, image = $3 WHERE id = $4 RETURNING *",
        [title, content, image, id]
    );
    return result.rows[0];
};

const deletePost = async (id) => {
    const result = await pool.query("DELETE FROM posts WHERE id = $1 RETURNING *", [id]);

    if (result.rowCount === 0) {
        return { error: "Post não encontrado." };
    }

    return { message: "Post deletado com sucesso." };
};

module.exports = { getAllPosts, getPostById, getPostsByUserId, createPost, updatePost, deletePost };
