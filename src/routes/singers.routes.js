import { Router } from "express";
import SingerController from "../controllers/singers.controller.js";
const router = Router();

//~~> | Singer Controller
const singerController = new SingerController();

router.get("/", singerController.getSingers);

router.get("/:id", singerController.getSinger);

router.post("/", singerController.postSinger);

router.patch("/:id", singerController.patchSinger);

router.delete("/:id", singerController.deleteSinger);

export default router;
