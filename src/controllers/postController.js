const postModel = require('../models/postModel');

const getPosts = async (req, res) => {
    try {
        const { title } = req.query;
        const posts = await postModel.getPosts(title);

        res.status(200).json({
            message: title
                ? `Posts filtrados pelo título "${title}" recuperados com sucesso.`
                : "Todos os posts recuperados com sucesso.",
            data: posts,
        });
    } catch (error) {
        console.error("Erro ao buscar posts:", error);
        res.status(500).json({ error: "Erro interno ao buscar posts." });
    }
};

const getPostById = async (req, res) => {
    try {
        const post = await postModel.getPostById(req.params.id);
        if (!post) {
            return res.status(404).json({
                message: "Post não encontrado.",
            });
        }
        res.status(200).json({
            message: "Post encontrado com sucesso.",
            data: post,
        });
    } catch (error) {
        console.error("Erro ao buscar post:", error);
        res.status(500).json({
            message: "Erro ao buscar post.",
            error: error.message,
        });
    }
};

const createPost = async (req, res) => {
    try {
        const { title, content } = req.body;
        const photo = req.file ? req.file.path : null;
        const userId = req.user?.id || 1; // Exemplo: colocar 1 fixo, ou vir do token se tiver auth

        const post = await postModel.createPost(title, content, photo, userId);

        res.status(201).json({
            message: "Post criado com sucesso.",
            data: post,
        });
    } catch (error) {
        console.error('Erro ao criar post:', error);
        res.status(500).json({ message: 'Erro ao criar post' });
    }
};

const updatePost = async (req, res) => {
    try {
        const { title, content } = req.body;
        const image = req.file ? req.file.path : req.body.image; // Se houver imagem, usa o arquivo, senão, usa a imagem existente
        const updatedPost = await postModel.updatePost(req.params.id, title, content, image);

        if (!updatedPost) {
            return res.status(404).json({
                message: "Post não encontrado.",
            });
        }

        res.status(200).json({
            message: "Post atualizado com sucesso.",
            data: updatedPost,
        });
    } catch (error) {
        console.error("Erro ao atualizar post:", error);
        res.status(500).json({
            message: "Erro ao atualizar post.",
            error: error.message,
        });
    }
};

const deletePost = async (req, res) => {
    try {
        const message = await postModel.deletePost(req.params.id);
        if (!message) {
            return res.status(404).json({
                message: "Post não encontrado.",
            });
        }
        res.status(200).json({
            message: "Post deletado com sucesso.",
        });
    } catch (error) {
        console.error("Erro ao deletar post:", error);
        res.status(500).json({
            message: "Erro ao deletar post.",
            error: error.message,
        });
    }
};

module.exports = {
    getPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost,
};
