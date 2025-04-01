const postModel = require("../models/postModel");

const getAllPosts = async (req, res) => {
    try {
        const posts = await postModel.getAllPosts();
        res.json(posts);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar posts." });
    }
};

const getPostById = async (req, res) => {
    try {
        const post = await postModel.getPostById(req.params.id);
        if (!post) {
            return res.status(404).json({ message: "Post não encontrado." });
        }
        res.json(post);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar post." });
    }
};

const getUserPosts = async (req, res) => {
    try {
        const posts = await postModel.getPostsByUserId(req.params.userId);
        res.json(posts);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar posts do usuário." });
    }
};

const createPost = async (req, res) => {
    try {
        const { title, content, image, user_id } = req.body;
        if (!user_id) {
            return res.status(400).json({ message: "O campo user_id é obrigatório." });
        }
        const newPost = await postModel.createPost(title, content, image, user_id);
        res.status(201).json(newPost);
    } catch (error) {
        console.error("Erro ao criar post:", error);
        res.status(500).json({ message: "Erro ao criar post." });
    }
};

const updatePost = async (req, res) => {
    try {
        const { title, content, image } = req.body;
        const updatedPost = await postModel.updatePost(req.params.id, title, content, image);
        if (!updatedPost) {
            return res.status(404).json({ message: "Post não encontrado." });
        }
        res.json(updatedPost);
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar post." });
    }
};

const deletePost = async (req, res) => {
    try {
        const message = await postModel.deletePost(req.params.id);
        res.json(message);
    } catch (error) {
        res.status(500).json({ message: "Erro ao deletar post." });
    }
};

module.exports = { getAllPosts, getPostById, getUserPosts, createPost, updatePost, deletePost };
