import express from "express";
import infoController from "../controllers/info";
const router = express.Router();
router
    .route("/")
    .post(infoController.addData)
    .get(infoController.allData);
export default router;
