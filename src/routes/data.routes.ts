import express from "express";
import infoController from "../controllers/info";

const router = express.Router();

// Wrap async route handlers to catch errors
const asyncHandler = (fn: any) => (req: express.Request, res: express.Response, next: express.NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};

router
    .route("/")
    .post(asyncHandler(infoController.addData))
    .get(asyncHandler(infoController.allData));

export default router;
