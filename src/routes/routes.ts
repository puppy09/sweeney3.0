import { Router } from "express";
import { login, registro } from "../controllers/authController";
import { checkJWT } from "../middlewares/auth";
import { deleteCategoria, getCategorias, postCategoria, putCategoria } from "../controllers/categoriasController";
import { deleteNegocio, getNegocios, postNegocio, putNegocio } from "../controllers/negociosController";
import { deleteAsociacion, getAsociaciones, postAsociacion, putAsociacion } from "../controllers/asociacionesController";
import { deleteMovimiento, getMovimientos, getMovimientosByCat, getMovimientosByNegocio, postMovimiento, putMovimiento } from "../controllers/movimientosController";


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

//Rutas de Asociaciones
router.post("/add/asociacion", checkJWT, postAsociacion);
router.get("/get/asociaciones", checkJWT, getAsociaciones);
router.delete("/del/asociacion/:id_asociacion", checkJWT, deleteAsociacion);
router.put("/upd/asociacion/:id_asociacion", checkJWT, putAsociacion);

//Rutas de Movimientos
router.post("/add/movimiento", checkJWT, postMovimiento);
router.put("/upd/movimiento", checkJWT, putMovimiento);
router.get("/get/movimientos", checkJWT, getMovimientos);
router.get("/get/movimientos/categoria/:id_categoria", checkJWT, getMovimientosByCat);
router.get("/get/movimientos/negocio/:id_negocio", checkJWT, getMovimientosByNegocio);
router.delete("/del/movimiento/:id_mov", checkJWT, deleteMovimiento);
export { router };
