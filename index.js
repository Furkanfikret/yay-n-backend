import express from 'express';
import cors from 'cors';
import pool,{dbTest} from './db.js';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname,'public')));

app.get("/",(req,res) =>{
    res.sendFile(path.join(__dirname,'views','home_page.html'));
})
app.listen(port,()=>{
    console.log(`Backend Server Is Running On Port ${port} !`);
    dbTest();
})

