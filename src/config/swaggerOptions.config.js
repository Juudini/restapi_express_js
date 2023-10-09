import { rootDirOverSrc } from "../utils/pathUtils.js";

export const swaggerOptions = {
    definition: {
        openapi: "3.0.3",
        info: {
            title: "Rest API-Express",
            version: "1.0.0",
            description: "A simple express library API",
        },
        servers: [{ url: "http://localhost:3000/api" }],
        externalDocs: {
            url: "http://juandebandi.dev/",
            description: "Visit my portfolio for more projects.",
        },
    },
    apis: [`${rootDirOverSrc}/docs/*.js`],
};
