import carrosModels from "../models/carrosModels.js"

const carrosControllers = {}; 

carrosControllers.getCarros = async (req, res) =>{
    const carros = await carrosModels.find(); 
    res.json(carros); 
}; 

carrosControllers.insertCarros = async (req, res) => {
    const{marca, modelo, año, color, placa} = req.body; 
    const newCarros = new carrosModels({
        marca,
        modelo,
        año,
        color,
        placa,
    }); 

    await newCarros.save(); 

    res.json({
        message: "carro guardado correctamente"
    })

}

carrosControllers.deleteCarros = async (req, res) =>{
    await  carrosModels.findById(req.params.id); 
    res.json({message: "carro eliminado"})

}

carrosControllers.updateCarros = async (req, res) => {
    const {marca, modelo, año, color, placa} = req.body; 
    await carrosModels.findByIdAndUpdate(
        req.params.id,
        {marca, modelo, año, color, placa},
        {new: true}

    ); 
    res.json({message: "Carro actualizado"})

}

export default carrosControllers; 