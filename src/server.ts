import express from "express";
import "dotenv/config";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";

const app = express();
const { log, error } = console;

const port = process.env.PORT || 3000;

const router = express.Router();

// Import the routes from dist folder
import infoRoutes from "./routes/data.routes.js";

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const DB_URL = process.env.MONGO_URL;

if (!DB_URL) {
  error("MONGO_URL is not defined in the environment variables.");
  process.exit(1);  // Exit the process if the MongoDB URL is missing
}

try {
  mongoose.connect(DB_URL);  // Remove 'useNewUrlParser' and 'useUnifiedTopology'
  log("Connection Successful");
} catch (err) {
  console.error("Unable to Connect to MongoDB", err);
}

app.use("/api", router);

router.use("/data", infoRoutes);

app.listen(port, () => log("Server is running"));

