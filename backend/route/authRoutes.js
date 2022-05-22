import express from "express";
import {
  registerController,
  loginController,
} from "../controller/authController.js";

const router = express.Router();

// Register
router.post("/register", registerController);

//Login
router.post("/login", loginController);

export default router;
