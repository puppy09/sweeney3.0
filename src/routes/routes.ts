import { Router } from "express";
import { login, registro } from "../controllers/authController";
import { checkJWT } from "../middlewares/auth";
import { postCategoria } from "../controllers/categoriasController";

const router = Router();

// Rutas de Auth
router.post("/auth", login);
router.post("/auth/registro", registro);

//Rutas de Categorias
router.post("/add/categoria",checkJWT, postCategoria);
router.put("/upd/categoria/:id_categoria",checkJWT, postCategoria);

export { router };
