const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API Documentation",
            version: "1.0.0",
            description: "Documentação da API para gerenciamento de posts e usuários",
        },
        components: {
            securitySchemes: {
                ApiKeyAuth: {
                    type: "apiKey",
                    in: "header",
                    name: "x-api-key", 
                },
            },
        },
        security: [
            {
                ApiKeyAuth: [], 
            },
        ],
    },
    apis: ["./src/routes/*.js"], 
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

const setupSwagger = (app) => {
    app.use("/api-docs1", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

module.exports = setupSwagger;