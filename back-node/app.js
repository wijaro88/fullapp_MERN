import express from "express";
import cors from "cors";
import db from "./database/db.js";
import blogRoutes from './routes/routes.js'

// const cors = require('cors');
const app = express();

app.use( cors( ) );
app.use(express.json());
app.use('/blogs', blogRoutes);

try {
    await db.authenticate()
    console.log('conexion a la BD');
} catch (error) {
    console.log (`El error de conexion es: ${error}`);
}


app.listen(8000, ()=>{
    console.log('server up running http://localhost:8000/');
})
