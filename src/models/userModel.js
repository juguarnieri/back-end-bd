const pool = require("../config/database");

const getUsers = async () => {
    try {
        const { rows } = await pool.query("SELECT * FROM users ORDER BY name ASC");
        return rows;
    } catch (error) {
        console.error("Erro ao buscar usuários:", error);
        throw new Error("Erro ao recuperar os usuários.");
    }
};

const getUserById = async (id) => {
    try {
        const { rows, rowCount } = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
        if (rowCount === 0) throw new Error("Usuário não encontrado.");
        return rows[0];
    } catch (error) {
        console.error("Erro ao buscar usuário:", error);
        throw error;
    }
};

const createUser = async (name, email, photo) => {
    try {
        const { rowCount } = await pool.query("SELECT 1 FROM users WHERE email = $1", [email]);
        if (rowCount > 0) throw new Error("E-mail já cadastrado.");

        const { rows } = await pool.query(
            `INSERT INTO users (name, email, photo)
             VALUES ($1, $2, $3) RETURNING *`,
            [name, email, photo]
        );
        return rows[0];
    } catch (error) {
        console.error("Erro ao criar usuário:", error);
        throw error;
    }
};

const updateUser = async (id, name, email) => {
    try {
        const { rows, rowCount } = await pool.query(
            "UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *",
            [name, email, id]
        );
        if (rowCount === 0) throw new Error("Usuário não encontrado.");
        return rows[0];
    } catch (error) {
        console.error("Erro ao atualizar usuário:", error);
        throw error;
    }
};

const deleteUser = async (id) => {
    try {
        const { rowCount } = await pool.query("DELETE FROM users WHERE id = $1", [id]);
        if (rowCount === 0) throw new Error("Usuário não encontrado.");
        return { message: "Usuário deletado com sucesso." };
    } catch (error) {
        console.error("Erro ao deletar usuário:", error);
        throw error;
    }
};

module.exports = { getUsers, getUserById, createUser, updateUser, deleteUser };
