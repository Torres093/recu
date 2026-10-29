import express from "express"; 
import mecanicosControllers from "../controllers/mecanicosController.js"

const router = express.Router (); 

router.route("/")
.get(mecanicosControllers.getMecanicos)
.post(mecanicosControllers.insertMecanicos)
.put(mecanicosControllers.updateMecanicos)
.delete(mecanicosControllers.deleteMecanicos)

export default router; 