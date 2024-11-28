import express from "express";
import infoController from "../controllers/info.js";
const router = express.Router();
// Wrap async route handlers to catch errors
const asyncHandler = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};
router
    .route("/")
    .post(asyncHandler(infoController.addData))
    .get(asyncHandler(infoController.allData));
export default router;
