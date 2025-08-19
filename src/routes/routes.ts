import { Router } from "express";
import { login, registro } from "../controllers/authController";
import { checkJWT } from "../middlewares/auth";
import { deleteCategoria, getCategorias, postCategoria, putCategoria } from "../controllers/categoriasController";
import { deleteNegocio, getNegocios, postNegocio, putNegocio } from "../controllers/negociosController";

const router = Router();

// Rutas de Auth
router.post("/auth", login);
router.post("/auth/registro", registro);

//Rutas de Categorias
router.post("/add/categoria",checkJWT, postCategoria);
router.put("/upd/categoria/:id_categoria",checkJWT, putCategoria);
router.delete("/del/categoria/:id_categoria", checkJWT, deleteCategoria);
router.get("/get/categorias", checkJWT, getCategorias);

//Rutas de Negocios
router.post("/add/negocio", checkJWT, postNegocio);
router.put("/upd/negocio/:id_negocio", checkJWT, putNegocio);
router.get("/get/negocios", checkJWT, getNegocios);
router.delete("/del/negocio/:id_negocio", checkJWT, deleteNegocio);

export { router };
