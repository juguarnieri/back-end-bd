const express = require("express");
const router = express.Router();
const {
    exportUsersCSV,
    exportUsersPDF,
    exportPostsCSV,
    exportPostsPDF
} = require("../controllers/reportController");

// Rotas para exportar usuários
router.get("/users/export/csv", exportUsersCSV);
router.get("/users/export/pdf", exportUsersPDF);

// Rotas para exportar posts
router.get("/posts/export/csv", exportPostsCSV);
router.get("/posts/export/pdf", exportPostsPDF);

module.exports = router;