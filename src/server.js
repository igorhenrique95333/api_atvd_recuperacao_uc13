import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import fileUpload from "express-fileupload";
import { fileURLToPath } from 'url';
import { dirname } from "path";
import userRoutes from './routes/userRoutes.js';
import authRoutes from './routes/authRoutes.js'

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const server = express();
server.use(cors());
server.use(express.json()); 
server.use(fileUpload());

server.listen(process.env.PORT, () =>{
    console.log(`Rodando na porta: ${process.env.BASE}`);
});
