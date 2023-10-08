import { createPool } from "mysql2/promise";

export const pool = createPool({
    host: "localhost", // Change to the database server's address
    user: "USERNAME", // Change to the database username
    password: "PASSWORD", // Change to the database password
    port: 3306, // Change to the database port
    database: "singersdb", // Change to the database name
});
