const userModel = require("../models/userModel");

const getAllUsers = async (req, res) => {
    try {
        const users = await userModel.getUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ message: "Erro ao buscar usuários." });
    }
};

module.exports = { getAllUsers };


