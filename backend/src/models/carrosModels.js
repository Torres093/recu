import { Schema, Model } from "mongoose";

const carrosSchema = new Schema ({
    marca: {
        type: String
    },
    modelo: {
        type: String
    }, 
    año: {
        type: Number
    },
    color: {
        type: String
    }, 
    placa: {
        type: String
    }
},
{
timestamps: true,
strict: false
})

export default model("carros", carrosSchema); 