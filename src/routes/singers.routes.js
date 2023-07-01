import { Router } from "express";
import {
    getSingers,
    getSinger,
    postSinger,
    patchSinger,
    deleteSinger,
} from "../controllers/singers.controller.js";

const router = Router();

router.get("/singers", getSingers);

router.get("/singers/:id", getSinger);

router.post("/singers", postSinger);

router.patch("/singers/:id", patchSinger);

router.delete("/singers/:id", deleteSinger);

export default router;
