import express from 'express';

const app = express();
const port = 5000;

app.get("/",(req,res) =>{
    res.send("<h1>Main Page Of Backend !</h1>");
})
app.listen(port,()=>{
    console.log(`Backend Server Is Running On Port ${port} !`);
})

