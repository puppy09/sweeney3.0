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

app.use((req, res, next) => {
  console.log("Solicitud recibida:", req.method, req.url);
  next();
});

export default app;
