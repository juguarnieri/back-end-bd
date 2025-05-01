const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");
const upload = require("../config/upload"); 
const apiKeyMiddleware = require("../config/apiKey"); 

router.use(apiKeyMiddleware);

/**
 * @swagger
 * tags:
 *   name: Posts
 *   description: Gerenciamento de posts (CRUD de posts)
 */
/**
 * @swagger
 * tags:
 *   name: Posts
 *   description: Gerenciamento de posts (CRUD de posts)
 */

/**
 * @swagger
 * /api/posts:
 *   get:
 *     summary: Lista todos os posts ou posts filtrados por título
 *     tags: [Posts]
 *     parameters:
 *       - in: query
 *         name: title
 *         schema:
 *           type: string
 *         description: Filtrar posts pelo título (opcional)
 *     responses:
 *       200:
 *         description: Lista de posts
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Lista de posts recuperada com sucesso."
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         example: 1
 *                       title:
 *                         type: string
 *                         example: "Título do Post"
 *                       content:
 *                         type: string
 *                         example: "Conteúdo do post aqui."
 *                       image:
 *                         type: string
 *                         example: "http://exemplo.com/imagem.jpg"
 *       500:
 *         description: Erro interno ao buscar posts
 */
router.get("/posts", postController.getPosts);

/**
 * @swagger
 * /api/posts/{id}:
 *   get:
 *     summary: Buscar um post pelo ID
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do post
 *     responses:
 *       200:
 *         description: Post encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Post encontrado com sucesso."
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 1
 *                     title:
 *                       type: string
 *                       example: "Título do Post"
 *                     content:
 *                       type: string
 *                       example: "Conteúdo do post aqui."
 *                     image:
 *                       type: string
 *                       example: "http://exemplo.com/imagem.jpg"
 *       404:
 *         description: Post não encontrado
 */
router.get("/posts/:id", postController.getPostById);

/**
 * @swagger
 * /api/posts:
 *   post:
 *     summary: Criar um novo post com imagem
 *     tags: [Posts]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - content
 *               - photo  
 *               - user_id
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *               photo:  
 *                 type: string
 *                 format: binary
 *                 description: Upload de imagem do post
 *               user_id:
 *                 type: integer
 *                 description: ID do usuário que está criando o post
 *     responses:
 *       201:
 *         description: Post criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Post criado com sucesso."
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 1
 *                     title:
 *                       type: string
 *                       example: "Título do Post"
 *                     content:
 *                       type: string
 *                       example: "Conteúdo do post aqui."
 *                     photo: 
 *                       type: string
 *                       example: "http://exemplo.com/imagem.jpg"
 *                     user_id:
 *                       type: integer
 *                       example: 1
 *       400:
 *         description: Campos obrigatórios não enviados
 *       500:
 *         description: Erro interno
 */
router.post("/posts", upload.single("photo"), postController.createPost);
/**
 * @swagger
 * /api/posts/{id}:
 *   put:
 *     summary: Atualizar um post existente
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do post
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *               image:
 *                 type: string
 *     responses:
 *       200:
 *         description: Post atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Post atualizado com sucesso."
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 1
 *                     title:
 *                       type: string
 *                       example: "Título do Post Atualizado"
 *                     content:
 *                       type: string
 *                       example: "Conteúdo atualizado do post."
 *                     image:
 *                       type: string
 *                       example: "http://exemplo.com/imagem_atualizada.jpg"
 *       404:
 *         description: Post não encontrado
 *       500:
 *         description: Erro interno
 */
router.put("/posts/:id", postController.updatePost);

/**
 * @swagger
 * /api/posts/{id}:
 *   delete:
 *     summary: Deletar um post pelo ID
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do post
 *     responses:
 *       200:
 *         description: Post deletado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Post deletado com sucesso."
 *       404:
 *         description: Post não encontrado
 *       500:
 *         description: Erro interno
 */
router.delete("/posts/:id", postController.deletePost);

module.exports = router;
