import Express from "express";
import path from "path";
import { __dirname } from "./utils/pathUtils.js";
import morgan from "morgan";
import colors from "colors";

//Handlebars
import { engine } from "express-handlebars";

// Swagger
import SwaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import { swaggerOptions } from "./config/index.js";

//~> |Routes
import singersRoutes from "./routes/singers.routes.js";

const app = Express();
app.use(morgan("dev"));
app.use(Express.json());
const swaggerSpecs = swaggerJSDoc(swaggerOptions);
app.use(Express.static(__dirname + "/public"));
app.use(Express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));

app.engine(
    ".hbs",
    engine({
        extname: ".hbs",
        defaultLayout: "main",
        layoutsDir: path.join(app.get("views"), "layouts"),
        partialsDir: path.join(app.get("views"), "partials"),
        runtimeOptions: { allowProtoPropertiesByDefault: true },
    })
);
app.set("view engine", ".hbs");

/* ★━━━━━━━━━━━★ Routes ★━━━━━━━━━━━★ */
app.use("/api/singers", singersRoutes);
app.use("/", SwaggerUi.serve, SwaggerUi.setup(swaggerSpecs));

/* ★━━━━━━━━━━━★ Templates ★━━━━━━━━━━━★ */
app.use("*", (req, res, next) => {
    res.render("partials/_notFound", { title: "404 Not Found" });
});

export default app;
