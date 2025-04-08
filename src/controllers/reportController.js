const { format } = require("@fast-csv/format");
const PDFDocument = require("pdfkit");
const postModel = require("../models/postModel");

const exportUsersCSV = async (req, res) => {
    try {
        console.log("Iniciando exportação de usuários...");
        const users = await userModel.getUsers();
        console.log("Usuários obtidos:", users);

        res.setHeader("Content-Disposition", "attachment; filename=users.csv");
        res.setHeader("Content-Type", "text/csv");

        const csvStream = format({ headers: true });
        csvStream.pipe(res);

        users.forEach((user) => {
            csvStream.write({
                Id: user.id,
                Nome: user.name,
                Email: user.email
            });
        });

        csvStream.end();
    } catch (error) {
        console.error("Erro ao gerar o CSV:", error.message);
        res.status(500).json({ message: "Erro ao gerar o CSV de usuários" });
    }
};

const exportUsersPDF = async (req, res) => {
    try {
        const users = await userModel.getUsers();

        res.setHeader("Content-Type", "application/pdf");
        res.setHeader("Content-Disposition", "inline; filename=users.pdf");

        const doc = new PDFDocument();
        doc.pipe(res);

        doc.fontSize(20).text("Relatório de Usuários", { align: "center" });
        doc.moveDown();

        doc.fontSize(12).text("Id | Nome | Email", { underline: true });
        doc.moveDown(0.5);

        users.forEach((user) => {
            doc.text(`${user.id} | ${user.name} | ${user.email}`);
        });

        doc.end();
    } catch (error) {
        res.status(500).json({ message: "Erro ao gerar o PDF de usuários" });
    }
};

const exportPostsCSV = async (req, res) => {
    try {
        console.log("Iniciando exportação de posts...");
        const posts = await postModel.getPosts();
        console.log("Posts obtidos:", posts);

        res.setHeader("Content-Disposition", "attachment; filename=posts.csv");
        res.setHeader("Content-Type", "text/csv");

        const csvStream = format({ headers: true });
        csvStream.pipe(res);

        posts.forEach((post) => {
            csvStream.write({
                Id: post.id,
                Título: post.title,
                Conteúdo: post.content,
                Imagem: post.image,
                "ID do Usuário": post.user_id
            });
        });

        csvStream.end();
    } catch (error) {
        console.error("Erro ao gerar o CSV de posts:", error.message);
        res.status(500).json({ message: "Erro ao gerar o CSV de posts" });
    }
};
const exportPostsPDF = async (req, res) => {
    try {
        const posts = await postModel.getPosts();

        res.setHeader("Content-Type", "application/pdf");
        res.setHeader("Content-Disposition", "inline; filename=posts.pdf");

        const doc = new PDFDocument();
        doc.pipe(res);

        doc.fontSize(20).text("Relatório de Posts", { align: "center" });
        doc.moveDown();

        doc.fontSize(12).text("Id | Título | Conteúdo", { underline: true });
        doc.moveDown(0.5);


        posts.forEach((post) => {
            doc.text(`${post.id} | ${post.title} | ${post.content}`);
        });

        doc.end();
    } catch (error) {
        res.status(500).json({ message: "Erro ao gerar o PDF de posts" });
    }
};

module.exports = { exportUsersCSV, exportUsersPDF, exportPostsCSV, exportPostsPDF };