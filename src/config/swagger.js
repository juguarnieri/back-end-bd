// src/config/swagger.js

const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API de Posts",
      version: "1.0.0",
      description: "Documentação da API de Posts usando Swagger",
    },
  },
  apis: ["./src/routes/*.js"], // ajuste o caminho se necessário
};

const specs = swaggerJsdoc(options);

function setupSwagger(app) {
  app.use("/doc", swaggerUi.serve, swaggerUi.setup(specs));
}

module.exports = setupSwagger;
