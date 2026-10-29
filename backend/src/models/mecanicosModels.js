import { Schema, Model } from "mongoose";

const mecanicosSchema = new Schema ({
    nombre: {
        type: String
    },
    apellido: {
        type: String
    }, 
    especialidad: {
        type: String
    },
    telefono: {
        type: Number
    }, 
    añosExperiencia: {
        type: Number
    }
},
{
timestamps: true,
strict: false
})

export default model("mecanicos", mecanicosSchema); 
