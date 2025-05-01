const userModel = require("../models/userModel");

const createUser = async (req, res) => {
    try {
        const { name, email } = req.body;
        const photo = req.file ? req.file.filename : null;

        if (!name || !email) {
            return res.status(400).json({ message: "Os campos 'name' e 'email' são obrigatórios." });
        }

        const newUser = await userModel.createUser(name, email, photo);
        return res.status(201).json({ message: "Usuário criado com sucesso.", data: newUser });
    } catch (error) {
        console.error("Erro ao criar usuário:", error);
        return res.status(500).json({ message: error.message });
    }
};

const getAllUsers = async (req, res) => {
    try {
        const users = await userModel.getUsers();
        return res.status(200).json({ message: "Lista de usuários recuperada com sucesso.", data: users });
    } catch (error) {
        console.error("Erro ao buscar usuários:", error);
        return res.status(500).json({ message: error.message });
    }
};

const getUser = async (req, res) => {
    try {
        const user = await userModel.getUserById(req.params.id);
        return res.status(200).json(user);
    } catch (error) {
        console.error("Erro ao buscar usuário:", error);
        return res.status(404).json({ message: error.message });
    }
};

const updateUser = async (req, res) => {
    try {
        const { name, email } = req.body;
        if (!name || !email) {
            return res.status(400).json({ message: "Os campos 'name' e 'email' são obrigatórios." });
        }

        const updatedUser = await userModel.updateUser(req.params.id, name, email);
        return res.json({ message: "Usuário atualizado com sucesso.", data: updatedUser });
    } catch (error) {
        console.error("Erro ao atualizar usuário:", error);
        return res.status(500).json({ message: error.message });
    }
};

const deleteUser = async (req, res) => {
    try {
        const response = await userModel.deleteUser(req.params.id);
        return res.json(response);
    } catch (error) {
        console.error("Erro ao deletar usuário:", error);
        return res.status(500).json({ message: error.message });
    }
};

module.exports = { createUser, getAllUsers, getUser, updateUser, deleteUser };
