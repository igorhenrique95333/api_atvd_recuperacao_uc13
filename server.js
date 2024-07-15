import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import fileUpload from "express-fileupload";
import { fileURLToPath } from "url";
import { dirname } from "path";
import userRoutes from "./src/routes/userRoutes.js";
import authRoutes from "./src/routes/authRoutes.js";
import reservaRoutes from './src/routes/reservaRoutes.js';
import pratosRoutes from './src/routes/pratosRoutes.js';
import disponibilidadeRoutes from './src/routes/disponibilidadeRoutes.js'
import mesaRoutes from './src/routes/mesaRoutes.js'

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const server = express();
server.use(cors());
server.use(express.json());
server.use(fileUpload());

server.use(express.static(__dirname + "/public"));

server.use("/", authRoutes);
server.use("/", userRoutes);
server.use("/", reservaRoutes);
server.use("/", pratosRoutes);
server.use("/", disponibilidadeRoutes);
server.use("/", mesaRoutes);

server.listen(process.env.PORT, () => {
  console.log(`Rodando na porta: ${process.env.BASE}`);
});