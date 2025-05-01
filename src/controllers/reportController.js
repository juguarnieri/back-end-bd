const { format } = require("@fast-csv/format");
const PDFDocument = require("pdfkit");

const userModel = require("../models/userModel");
const postModel = require("../models/postModel");

const exportUserCSV = async (req, res) => {
    try {
        const users = await userModel.getUsers();

        res.setHeader("Content-Disposition", "attachment; filename=users.csv");
        res.setHeader("Content-Type", "text/csv");

        const csvStream = format({ headers: true });
        csvStream.pipe(res);

        users.forEach((user) => {
            csvStream.write({
                Id: user.id,
                Nome: user.name,
                Email: user.email,
            });
        });

        csvStream.end();
    } catch (error) {
        res.status(500).json({ message: "Erro ao gerar o CSV de usuários" });
    }
};

const exportPostCSV = async (req, res) => {
    try {
        const posts = await postModel.getPosts();

        res.setHeader("Content-Disposition", "attachment; filename=posts.csv");
        res.setHeader("Content-Type", "text/csv");

        const csvStream = format({ headers: true });
        csvStream.pipe(res);

        posts.forEach((post) => {
            csvStream.write({
                Id: post.id,
                Título: post.title,
                Conteúdo: post.content,
            });
        });

        csvStream.end();
    } catch (error) {
        res.status(500).json({ message: "Erro ao gerar o CSV de posts" });
    }
};

const exportUserPDF = async (req, res) => {
    try {
        const users = await userModel.getUsers();

        const doc = new PDFDocument();
        doc.pipe(res);

        res.setHeader("Content-Type", "application/pdf");
        res.setHeader("Content-Disposition", "attachment; filename=users.pdf");

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

const exportPostPDF = async (req, res) => {
    try {
        const posts = await postModel.getPosts();

        const doc = new PDFDocument();
        doc.pipe(res);

        res.setHeader("Content-Type", "application/pdf");
        res.setHeader("Content-Disposition", "attachment; filename=posts.pdf");

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

module.exports = {
    exportUserCSV,
    exportPostCSV,
    exportUserPDF,
    exportPostPDF,
};
