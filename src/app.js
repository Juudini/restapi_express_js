import Express from "express";
import singersRoutes from "./routes/singers.routes.js";
import indexRoutes from "./routes/index.routes.js";

import "./config.js";

const app = Express();

app.use(Express.json());

app.use(indexRoutes);
app.use("/api", singersRoutes);
app.use((req, res, next) => {
    res.status(404).json({
        message: "Endpoint not found",
    });
});

export default app;
