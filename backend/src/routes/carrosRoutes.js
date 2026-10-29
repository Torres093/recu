import express from "express"; 
import carrosControllers from "../controllers/carrosControllers.js"

const router = express.Router (); 

router.route("/")
.get(carrosControllers.getCarros)
.post(carrosControllers.insertCarros)
.put(carrosControllers.updateCarros)
.delete(carrosControllers.deleteCarros)

export default router; 
