import { pool } from "../config/index.js";

export default class SingerController {
    async getSingers(req, res) {
        try {
            const [rows] = await pool.query("SELECT * FROM singers");
            res.json(rows);
        } catch (error) {
            res.status(500).json({
                message: "Something went wrong",
            });
        }
    }

    async getSinger(req, res) {
        const singerId = req.params.id;
        try {
            const [rows] = await pool.query(
                "SELECT * FROM singers WHERE id= ?",
                [singerId]
            );
            if (rows.length <= 0)
                return res.status(404).json({ message: "Singer not found" });
            res.json(rows[0]);
        } catch (error) {
            res.status(500).json({
                message: "Something went wrong",
            });
        }
    }

    async postSinger(req, res) {
        const { name, genre } = req.body;
        try {
            const [rows] = await pool.query(
                "INSERT INTO singers(name, genre) VALUES(?, ?)",
                [name, genre]
            );
            res.send({ id: rows.insertId, name, genre });
        } catch (error) {
            res.status(500).json({
                message: "Something went wrong",
            });
        }
    }

    async patchSinger(req, res) {
        const singerId = req.params.id;
        const { name, genre } = req.body;
        try {
            const [result] = await pool.query(
                "UPDATE singers SET name= IFNULL(?, name), genre = IFNULL(?, genre) WHERE id= ?",
                [name, genre, singerId]
            );
            if (result.affectedRows <= 0)
                return res.status(404).json({ message: "Singer not found" });

            const [rows] = await pool.query(
                "SELECT * FROM singers WHERE id=?",
                [singerId]
            );
            res.json(rows[0]);
        } catch (error) {
            res.status(500).json({
                message: "Something went wrong",
            });
        }
    }

    async deleteSinger(req, res) {
        const singerId = req.params.id;
        try {
            const [result] = await pool.query(
                "DELETE FROM singers WHERE id= ?",
                [singerId]
            );
            if (result.affectedRows <= 0)
                return res.status(404).json({ message: "Singer not found" });
            res.sendStatus(204);
        } catch (error) {
            res.status(500).json({
                message: "Something went wrong",
            });
        }
    }
}
