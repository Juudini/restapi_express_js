import e from "express";
import { pool } from "../db.js";

export const getSingers = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM singers");
        res.json(rows);
    } catch (error) {
        return res.status(500).json({
            message: "Something goes wrong",
        });
    }
};

export const getSinger = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM singers WHERE id= ?", [
            req.params.id,
        ]);
        if (rows.length <= 0)
            return res.status(404).json({ message: "Singer not found" });
        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({
            message: "Something goes wrong",
        });
    }
};

export const postSinger = async (req, res) => {
    const { name, genre } = req.body;
    try {
        const [rows] = await pool.query(
            "INSERT INTO singers(name, genre) VALUES(?, ?)",
            [name, genre]
        );
        res.send({ id: rows.insertId, name, genre });
    } catch (error) {
        return res.status(500).json({
            message: "Something goes wrong",
        });
    }
};

export const patchSinger = async (req, res) => {
    const { id } = req.params;
    const { name, genre } = req.body;
    try {
        const [result] = await pool.query(
            "UPDATE singers SET name= IFNULL(?, name), genre = IFNULL(?, genre) WHERE id= ?",
            [name, genre, id]
        );
        if (result.affectedRows <= 0)
            return res.status(404).json({ message: "Singer not found" });
        const [rows] = await pool.query("SELECT * FROM singers WHERE id=?", [
            id,
        ]);
        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({
            message: "Something goes wrong",
        });
    }
};

export const deleteSinger = async (req, res) => {
    try {
        const [result] = await pool.query("DELETE FROM singers WHERE id= ?", [
            req.params.id,
        ]);
        if (result.affectedRows <= 0)
            return res.status(404).json({ message: "Singer not found" });
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({
            message: "Something goes wrong",
        });
    }
};
