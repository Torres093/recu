import express from "express"; 
import cookieParser from "cookie-parser";
import carrosRoutes from "./src/routes/carrosRoutes.js"
import mecanicosRoutes from ".src/routes/carrosRoutes.js"; 


const app = express(); 

app.use (
    cors({
        origin: ["http://localhost:5173", "http://localhost:5173"],
        credentials: true
    })
); 

app.use(cookieParser()); 
app.use(express.json()); 

app.use("/api/carros", carrosRoutes); 
app.use("/api/mecanicos", mecanicosRoutes); 

export default app; 

