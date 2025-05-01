const multer = require('multer');
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const userRoutes = require("./src/routes/userRoutes");
const postRoutes = require("./src/routes/postRoutes");
const reportRoutes = require("./src/routes/reportRoutes");
const setupSwagger = require("./src/config/swagger");
const path = require("path");


const app = express();


app.use(cors());
app.use(express.json());


app.use("/uploads", express.static(path.join(__dirname, "uploads")));


app.use("/api", userRoutes);
app.use("/api", postRoutes);
app.use("/api/reports", reportRoutes);
setupSwagger(app);


app.use((err, req, res, next) => {
    console.error(err.stack);
    if (err instanceof multer.MulterError) {
        return res.status(400).send({ message: err.message });
    }
    res.status(500).send({ message: "Erro interno do servidor", error: err.message });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
