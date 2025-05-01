const express = require("express");
const router = express.Router();
const {
    exportUserPDF,
    exportPostPDF,
    exportUserCSV,
    exportPostCSV,
} = require("../controllers/reportController");

const apiKeyMiddleware = require("../config/apiKey");

router.use(apiKeyMiddleware);

const setExportHeaders = (res, fileName, contentType) => {
    res.setHeader("Content-Type", contentType);
    res.setHeader("Content-Disposition", `attachment; filename=${fileName}`);
};

/**
 * @swagger
 * tags:
 *   name: Reports
 *   description: Rotas para exportação de relatórios
 */

/**
 * @swagger
 * /api/reports/users/export/pdf:
 *   get:
 *     summary: Exporta usuários em PDF
 *     tags: [Reports]
 *     responses:
 *       200:
 *         description: PDF gerado com sucesso
 *         content:
 *           application/pdf:
 *             schema:
 *               type: string
 *               format: binary
 *       500:
 *         description: Erro ao gerar o PDF
 */
router.get("/users/export/pdf", (req, res) => {
    setExportHeaders(res, "users.pdf", "application/pdf");
    exportUserPDF(req, res);
});

/**
 * @swagger
 * /api/reports/posts/export/pdf:
 *   get:
 *     summary: Exporta posts em PDF
 *     tags: [Reports]
 *     responses:
 *       200:
 *         description: PDF gerado com sucesso
 *         content:
 *           application/pdf:
 *             schema:
 *               type: string
 *               format: binary
 *       500:
 *         description: Erro ao gerar o PDF
 */
router.get("/posts/export/pdf", (req, res) => {
    setExportHeaders(res, "posts.pdf", "application/pdf");
    exportPostPDF(req, res);
});

/**
 * @swagger
 * /api/reports/users/export/csv:
 *   get:
 *     summary: Exporta usuários em CSV
 *     tags: [Reports]
 *     responses:
 *       200:
 *         description: CSV gerado com sucesso
 *         content:
 *           text/csv:
 *             schema:
 *               type: string
 *               format: binary
 *       500:
 *         description: Erro ao gerar o CSV
 */
router.get("/users/export/csv", (req, res) => {
    setExportHeaders(res, "users.csv", "text/csv");
    exportUserCSV(req, res);
});

/**
 * @swagger
 * /api/reports/posts/export/csv:
 *   get:
 *     summary: Exporta posts em CSV
 *     tags: [Reports]
 *     responses:
 *       200:
 *         description: CSV gerado com sucesso
 *         content:
 *           text/csv:
 *             schema:
 *               type: string
 *               format: binary
 *       500:
 *         description: Erro ao gerar o CSV
 */
router.get("/posts/export/csv", (req, res) => {
    setExportHeaders(res, "posts.csv", "text/csv");
    exportPostCSV(req, res);
});

module.exports = router;
