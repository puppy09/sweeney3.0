import { Router } from "express";
import { login, registro } from "../controllers/authController";

const router = Router();

// Rutas de Auth
router.post("/auth", login);
router.post("/auth/registro", registro);
export { router };
