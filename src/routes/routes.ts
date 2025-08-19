import { Router } from "express";
import { login, registro } from "../controllers/authController";
import { checkJWT } from "../middlewares/auth";
import { deleteCategoria, getCategorias, postCategoria, putCategoria } from "../controllers/categoriasController";

const router = Router();

// Rutas de Auth
router.post("/auth", login);
router.post("/auth/registro", registro);

//Rutas de Categorias
router.post("/add/categoria",checkJWT, postCategoria);
router.put("/upd/categoria/:id_categoria",checkJWT, putCategoria);
router.delete("/del/categoria/:id_categoria", checkJWT, deleteCategoria);
router.get("/get/categorias", checkJWT, getCategorias);

export { router };
