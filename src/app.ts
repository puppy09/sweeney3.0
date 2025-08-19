import express, { Request, Response } from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import {router} from "./routes/routes"

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

//console.log("Router cargado", router);
app.use("/",router);
console.log("Rutas en router:", router.stack.map(l => l.route?.path));

app.use((req, res, next) => {
  console.log("Solicitud recibida:", req.method, req.url);
  next();
});

export default app;
